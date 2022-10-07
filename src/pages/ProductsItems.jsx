import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Col, Image, ListGroup, Row } from "react-bootstrap";

const ProductsItems = () => {
  const { id } = useParams();

  const productsList = useSelector((state) => state.products);
  const productDetail = productsList?.find(
    (products) => products?.id === Number(id)
  );

  const relatedNew = productsList?.filter(
    (products) => products?.category.id === productDetail?.category?.id
  );

  return (
    <Row>
      <Col>
        <h1>{productDetail?.title}</h1>
        <img src={productDetail?.productImgs} alt="" />
        <p>{productDetail?.description}</p>
      </Col>
      <Col lg={3}>
        <ListGroup variant="flush">
          {relatedNew?.map((product) => (
            <ListGroup.Item key={product.id}>
              <Link to={`/productsItems/${product.id}`}>
              <img src={productDetail?.productImgs} alt="" />
                {product.title}
              </Link>
            </ListGroup.Item>
          ))
        }
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProductsItems;
