import React from "react";
import NavBar from "./NavBar";
import { Container, Form, Grid, GridColumn } from "semantic-ui-react";

const MainLayout = ({ Component }) => {
  return (
    <>
      <NavBar />
      <Container>
        <Grid>
          <Grid.Row>
            <h2>
              <b>FAVOURITE PRODUCTS</b>
            </h2>
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
                  <GridColumn width={10}>
                    <input
                      type="text"
                      style={{
                        flexGrow: 1,
                        border: "none",
                        borderRadius: "20px 0 0 20px",
                        backgroundColor: "var(--elementbg-color)",
                      }}
                      placeholder="Search for products"
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
                      cursor: "pointer",
                      padding: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <i className="star icon" style={{ margin: 0 }}></i>
                  </button>
                </GridColumn>
              </div>
            </GridColumn>
          </Grid.Row>
        </Grid>
          </Container>
          <Component/>
    </>
  );
};

export default MainLayout;
