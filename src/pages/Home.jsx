import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";


const Home = () => {
  const navigate = useNavigate();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [newFiltered, setNewFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  // console.log(categories);

  useEffect(() => {
    setNewFiltered(productsList);
  }, [productsList]);

  const filterCategory = (categoryId) => {
    const filtered = productsList.filter(
      (product) => product.category.id === categoryId
    );
    setNewFiltered(filtered);
  };

  const searchProduct = () => {
    const filtered = productsList.filter((products) =>
      products.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setNewFiltered(filtered);
  };
  return (
    <Row>
      <Col lg={3}>
        <ListGroup>
          {categories?.map((category) => (
            <ListGroupItem
              key={category.id}
              onClick={() => filterCategory(category.id)}
              style={{ cursor: "pointer" }}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search Products"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <Button variant="outline-secondary" onClick={searchProduct}>
            Button
          </Button>
        </InputGroup>
        <Row xs={1}  md={2} xl={3} className="g-4">
            {newFiltered.map((newProducts) => (
      
        <Col key={newProducts.id}>
          <Card  
              onClick={() => navigate(`/productsItems/:${newProducts.id}`)}>
            <Card.Img claseName="card" variant="top" src={newProducts.productImgs} />
            <Card.Body>
              <Card.Title>{newProducts.title}</Card.Title>
              <Card.Text>
              {newProducts.lave}
              </Card.Text>
              <Card.Text>Price: ${newProducts.price} </Card.Text>
              <i class="fa-solid fa-cart-shopping"></i> 
              
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>

      </Col>
    </Row>
  );
};

export default Home;
