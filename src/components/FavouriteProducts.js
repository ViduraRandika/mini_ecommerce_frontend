import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid, GridColumn, Image } from "semantic-ui-react";
import { addToFavourite, deleteSelectedProduct, getAllFavouriteProducts, removeFromFavourite } from "../services/ProductService";
import { toast } from "react-toastify";

const FavouriteProducts = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const fetchData = async () => {
      try {
        const res = await getAllFavouriteProducts();
        if (res) {
          setProducts(res);
        } else {
          toast("Failed to fetch products", {
            theme: "colored",
            type: "error",
            autoClose: 3000,
          });
        }
        setIsLoading(false);
      } catch (err) {
        toast("Failed to fetch products", {
          theme: "colored",
          type: "error",
          autoClose: 3000,
        });
        setIsLoading(false);
      }
    };

    const handleDelete = async (id) => {
      const res = await deleteSelectedProduct(id);
      if (res) {
        fetchData();
        toast("Product deleted", {
          theme: "colored",
          type: "success",
          autoClose: 3000,
        });
      } else {
        toast("Something went wront, please try again", {
          theme: "colored",
          type: "error",
          autoClose: 3000,
        });
      }
    };

    const handleEdit = (id) => {
      navigate(`/edit-product/${id}`);
    };

    const handleAddToFavourite = async (id) => {
      const res = await addToFavourite(id);
      if (res) {
        fetchData();
      } else {
        toast("Something went wront, please try again", {
          theme: "colored",
          type: "error",
          autoClose: 3000,
        });
      }
    };

    const handleRemoveFromFavourite = async (id) => {
      const res = await removeFromFavourite(id);
      if (res) {
        fetchData();
      } else {
        toast("Something went wront, please try again", {
          theme: "colored",
          type: "error",
          autoClose: 3000,
        });
      }
    };

    useEffect(() => {
      fetchData();
    }, []);
  return (
    <Container style={{ marginTop: "40px" }}>
      <Grid>
        <Grid.Row style={{ color: "var(--primary-color)" }}>
          <GridColumn width={2}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5>SKU</h5>
            </div>
          </GridColumn>
          <GridColumn width={2}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5>IMAGE</h5>
            </div>
          </GridColumn>
          <GridColumn width={5}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5>PRODUCT NAME</h5>
            </div>
          </GridColumn>
          <GridColumn width={3}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5>PRICE</h5>
            </div>
          </GridColumn>
          <GridColumn width={4}>
            <div style={{ display: "flex", justifyContent: "center" }}></div>
          </GridColumn>
        </Grid.Row>

        {isLoading ? (
          <Grid.Row>
            <GridColumn width={16}>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <p>Loading products...</p>
              </div>
            </GridColumn>
          </Grid.Row>
        ) : (
          products.map((product) => {
            return (
              <Grid.Row key={product._id}>
                <GridColumn width={2}>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p style={{ color: "var(--info-color)" }}>{product.sku}</p>
                  </div>
                </GridColumn>
                <GridColumn width={2}>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image rounded src="https://picsum.photos/50" />
                  </div>
                </GridColumn>
                <GridColumn width={5}>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p>{product.name}</p>
                  </div>
                </GridColumn>
                <GridColumn width={3}>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p>${product.price}</p>
                  </div>
                </GridColumn>
                <GridColumn width={4}>
                  <div
                    style={{
                      display: "flex",
                      alignContent: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--primary-color)",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                      onClick={() => handleDelete(product._id)}
                    >
                      <i className="trash icon"></i>
                    </span>

                    <span
                      style={{
                        color: "var(--primary-color)",
                        cursor: "pointer",
                        marginRight: "10px",
                      }}
                      onClick={() => handleEdit(product._id)}
                    >
                      <i className="pencil icon"></i>
                    </span>
                    {product.isFavourite ? (
                      <span
                        style={{
                          color: "var(--primary-color)",
                          cursor: "pointer",
                        }}
                        onClick={() => handleRemoveFromFavourite(product._id)}
                      >
                        <i className="star icon"></i>
                      </span>
                    ) : (
                      <span
                        style={{
                          color: "var(--primary-color)",
                          cursor: "pointer",
                        }}
                        onClick={() => handleAddToFavourite(product._id)}
                      >
                        <i className="star outline icon"></i>
                      </span>
                    )}
                  </div>
                </GridColumn>
              </Grid.Row>
            );
          })
        )}
      </Grid>
    </Container>
  );
};

export default FavouriteProducts;
