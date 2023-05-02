import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, GridColumn, Image } from "semantic-ui-react";
import { searchProduct } from "../services/ProductService";
import { toast } from "react-toastify";

const SearchResults = () => {
    const { id } = useParams();
    const fetchData = async () => {
      try {
        const res = await searchProduct(id);
          if (res) {
        } else {
          toast("Failed to fetch product details", {
            theme: "colored",
            type: "error",
            autoClose: 3000,
          });
        }
      } catch (error) {
        toast("Failed to fetch product details", {
          theme: "colored",
          type: "error",
          autoClose: 3000,
        });
      }
    };
    useEffect(() => {
      fetchData();
    }, [id]);
  return (
    <Container style={{ marginTop: "40px" }}>
      <Grid>
        <Grid.Row style={{ marginBottom: "10px" }}>
          <h2>
            <b style={{ color: "var(--info-color)" }}>
              4 Results found for 'Books'
            </b>
          </h2>
        </Grid.Row>
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
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5>TEST</h5>
            </div>
          </GridColumn>
        </Grid.Row>

        <Grid.Row>
          <GridColumn width={2}>
            <div
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <p style={{ color: "var(--info-color)" }}>#CA25</p>
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
              <p>Product-name</p>
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
              <p>$24.00</p>
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
              <span style={{ color: "var(--primary-color)" }}>
                <i className="trash icon"></i>
              </span>

              <span style={{ color: "var(--primary-color)" }}>
                <i className="pencil icon"></i>
              </span>

              <span style={{ color: "var(--primary-color)" }}>
                <i className="star outline icon"></i>
              </span>
            </div>
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default SearchResults;
