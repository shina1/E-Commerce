import React from "react";
import { Col, Row } from "react-bootstrap";
import products from "../products";
import Products from "../components/Product";

const Homescreen = () => {
  return (
    <>
      <h1 className="text-center my-3">Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Products product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Homescreen;
