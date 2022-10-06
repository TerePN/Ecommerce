import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Image, ListGroup, Row } from "react-bootstrap";

const ProductsItems = () => {
    const{id} = useParams();
    
    const productsList= useSelector(state=> state?.products);
    
    const productDetail= productsList.find((products) => products?.id === Number(id) )
    const relatedNew = productsList.filter(
        (products) => products?.category.id === productDetail?.category?.id
      );
    

    
    return (
    <div>
            <h1>Products</h1>
            {/* <p>mostrando <b>{id}</b></p> */}
        <ListGroup>
           {relatedNew.map((products) => (
          <ListGroup.Item
            key={products.id}
            onClick={() => navigate(`/productsItems/${products.id}`)}
          >
            <Row>
              <Col md={3} lg={2}>
                <Image src={products.productImgs } width={"100px"} fluid />
              </Col>
              <Col>
                <p>{products.title}</p>
              </Col>
            </Row>

            <br />
            <b>Price: </b>
            {products.price}
            <p>{products.description}</p>
            </ListGroup.Item>
            ))}
        </ListGroup>
    </div>
  );
};

export default ProductsItems;