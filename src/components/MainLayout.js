import React, { useState } from "react";
import NavBar from "./NavBar";
import { Container, Form, Grid, GridColumn } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  search: Yup.string().required(),
});
const MainLayout = ({ Component, title }) => {
  const navigate = useNavigate();
  const handleAddNewProductBtn = () => {
    navigate("/add-new-product");
  };

  const handleViewFavouritesBtn = () => {
    navigate("/favourite-products");
  };

  const [values, setValues] = useState({
    search: "",
  });
    
    const handleSubmit = (event) => { 
        event.preventDefault();
        validationSchema.validate(values, { abortEarly: false }).then(async () => {
            navigate(`/search/:${values.search}`)
        }).catch((validationErrors) => {
          // Validation failed
          const errors = {};
          validationErrors.inner.forEach((error) => {
            errors[error.path] = error.message;
          });
        })
    };

    const handleChange = (event) => {
      const { name, value } = event.target;
      setValues((values) => ({
        ...values,
        [name]: value,
      }));
    };
  return (
    <>
      <NavBar />
      <Container style={{marginTop:"40px"}}>
        <Grid>
          <Grid.Row>
            <h1>
              <b>{title}</b>
            </h1>
          </Grid.Row>
          <Grid.Row>
            <GridColumn width={10}>
              <Form>
                <Form.Field
                  width={16}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#f5f5f5",
                    justifyContent: "space-between",
                  }}
                >
                  <GridColumn width={10} stretched style={{ display: "flex" }}>
                    <input
                      stretched
                      type="text"
                      style={{
                        flexGrow: 12,
                        border: "none",
                        borderRadius: "20px 0 0 20px",
                        backgroundColor: "var(--elementbg-color)",
                      }}
                      name="search"
                      placeholder="Search for products"
                      value={values.search}
                      onChange={handleChange}
                    />
                  </GridColumn>
                  <GridColumn width={6} stretched>
                    <button
                      className="right floated"
                      style={{
                        border: "none",
                        borderRadius: "20px 20px 20px 20px",
                        backgroundColor: "var(--primary-color)",
                        color: "white",
                        cursor: "pointer",
                        padding: "15px",
                      }}
                      onClick={handleSubmit}
                    >
                      <i className="search icon"></i>
                      <span>Search</span>
                    </button>
                  </GridColumn>
                </Form.Field>
              </Form>
            </GridColumn>

            <GridColumn width={6} textAlign="right">
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <GridColumn width={8} style={{ margin: "0 10px 0 0" }}>
                  <button
                    className="fluid ui button"
                    style={{
                      border: "none",
                      borderRadius: "10px 10px 10px 10px",
                      backgroundColor: "var(--primary-color)",
                      color: "white",
                      cursor: "pointer",
                      padding: "15px",
                    }}
                    onClick={handleAddNewProductBtn}
                  >
                    New Product
                  </button>
                </GridColumn>
                <GridColumn width={3}>
                  <button
                    className="fluid ui button"
                    style={{
                      border: "solid",
                      borderRadius: "10px",
                      borderWidth: "2px",
                      borderColor: "var(--primary-color)",
                      color: "var(--primary-color)",
                      backgroundColor: "white",
                      cursor: "pointer",
                      padding: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    onClick={handleViewFavouritesBtn}
                  >
                    <i className="star icon" style={{ margin: 0 }}></i>
                  </button>
                </GridColumn>
              </div>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Container>
      <Component />
    </>
  );
};

export default MainLayout;
