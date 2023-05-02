import React, { useRef, useState } from "react";
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
import * as Yup from "yup";
import NavBar from "./NavBar";
import { addNewProduct } from "../services/ProductService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const validationSchema = Yup.object().shape({
  sku: Yup.string().required("SKU is required"),
  name: Yup.string().required("Name is required"),
  qty: Yup.number()
    .positive("Quantity must be a positive number")
    .required("Quantity is required"),
  description: Yup.string().required("Description is required"),
});

const AddProduct = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    sku: "",
    name: "",
    qty: 0,
    description: "",
    price: 0,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    validationSchema
      .validate(values, { abortEarly: false })
      .then(async () => {
        // Validation succeeded
        setIsSubmitting(true);

        const res = await addNewProduct(values);
        if (res) {
          toast("Product added", {
            theme: "colored",
            type: "success",
            autoClose: 3000,
          });
          navigate("/");
        } else {
          toast("Something went wront, please try again", {
            theme: "colored",
            type: "error",
            autoClose: 3000,
          });
        }
      })
      .catch((validationErrors) => {
        // Validation failed
        const errors = {};
        validationErrors.inner.forEach((error) => {
          errors[error.path] = error.message;
        });
        setErrors(errors);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
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
            Add new product
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
                    name="sku"
                    value={values.sku}
                    onChange={handleChange}
                  />
                  {errors.sku && (
                    <div style={{ color: "red" }}>{errors.sku}</div>
                  )}
                </Form.Field>
              </GridColumn>
              <GridColumn width={8}>
                <Form.Field>
                  <label>Price</label>
                  <input
                    type="number"
                    placeholder="price"
                    style={{
                      backgroundColor: "var(--elementbg-color)",
                      border: "0",
                    }}
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                  />
                  {errors.price && (
                    <div style={{ color: "red" }}>{errors.price}</div>
                  )}
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
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div style={{ color: "red" }}>{errors.name}</div>
                  )}
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
                    name="qty"
                    value={values.qty}
                    onChange={handleChange}
                  />
                  {errors.qty && (
                    <div style={{ color: "red" }}>{errors.qty}</div>
                  )}
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
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                  />
                  {errors.description && (
                    <div style={{ color: "red" }}>{errors.description}</div>
                  )}
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
                  onClick={handleSubmit}
                >
                  Add product
                </Button>
              </GridColumn>
            </Grid.Row>
          </Grid>
        </Form>
      </Container>
    </>
  );
};

export default AddProduct;
