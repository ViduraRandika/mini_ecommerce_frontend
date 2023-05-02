import React, { useRef } from "react";
import {
  Breadcrumb,
  Button,
  Container,
  Divider,
  Form,
  Grid,
  GridColumn,
  Image,
} from "semantic-ui-react";
import NavBar from "./NavBar";

const EditProduct = () => {
  const submitButtonRef = useRef(null);

  const handleSubmit = () => {};
  return (
    <>
      <NavBar />
      <Container style={{ margin: "80px" }}>
        <Breadcrumb size="massive">
          <Breadcrumb.Section>
            <b>PRODUCTS</b>
          </Breadcrumb.Section>
          <Breadcrumb.Divider
            icon="right chevron"
            style={{ color: "var(--primary-color)" }}
          />
          <Breadcrumb.Section active style={{ color: "var(--primary-color)" }}>
            Edit product
          </Breadcrumb.Section>
        </Breadcrumb>
        <Divider hidden />

        <Form>
          <Grid>
            <Grid.Row>
              <GridColumn width={8}>
                <Form.Field>
                  <label>SKU</label>
                  <input
                    type="text"
                    placeholder="sku"
                    style={{
                      backgroundColor: "var(--elementbg-color)",
                      border: "0",
                    }}
                  />
                </Form.Field>
              </GridColumn>
            </Grid.Row>
            <Grid.Row>
              <GridColumn width={8}>
                <Form.Field>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="name"
                    style={{
                      backgroundColor: "var(--elementbg-color)",
                      border: "0",
                    }}
                  />
                </Form.Field>
              </GridColumn>
              <GridColumn width={8}>
                <Form.Field>
                  <label>QTY</label>
                  <input
                    type="number"
                    placeholder="qty"
                    style={{
                      backgroundColor: "var(--elementbg-color)",
                      border: "0",
                    }}
                  />
                </Form.Field>
              </GridColumn>
            </Grid.Row>
            <Grid.Row>
              <GridColumn width={16}>
                <Form.Field>
                  <label>Product Description</label>
                  <p style={{ color: "var(--info-color)" }}>
                    A small description about product.
                  </p>
                  <textarea
                    type="text"
                    placeholder="description"
                    style={{
                      backgroundColor: "var(--elementbg-color)",
                      border: "0",
                    }}
                  />
                </Form.Field>
              </GridColumn>
            </Grid.Row>
            <Grid.Row>
              <GridColumn width={3}>
                <h5>Product Images</h5>
                <p>
                  JPEG, PNG, SVG or GIF <br />
                  <span style={{ color: "var(--info-color)" }}>
                    (Maximum file size 50MB)
                  </span>
                </p>
              </GridColumn>
              <GridColumn
                width={2}
                style={{ margin: "0 -60px 0 0", padding: 0 }}
              >
                <Image rounded src="https://picsum.photos/70" />
              </GridColumn>
              <GridColumn
                width={2}
                style={{ margin: "0 -60px 0 0", padding: 0 }}
              >
                <Image rounded src="https://picsum.photos/70" />
              </GridColumn>
              <GridColumn width={2}>
                <p
                  style={{
                    color: "var(--primary-color)",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                >
                  <b>Add images</b>
                </p>
              </GridColumn>
            </Grid.Row>
            <Grid.Row>
              <GridColumn width={16} textAlign="right">
                <Button
                  className="right floated"
                  style={{
                    backgroundColor: "var(--primary-color)",
                    color: "white",
                  }}
                  ref={submitButtonRef}
                  onClick={handleSubmit}
                >
                  Save changes
                </Button>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export default EditProduct;
