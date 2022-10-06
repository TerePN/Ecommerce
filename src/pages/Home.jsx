import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  // Card,
  // Col,
  Form,
  InputGroup,
  // ListGroup,
  // Row
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

  const searchProduct=()=> {
   
    const filtered= productsList.filter(products=> products.title.toLowerCase().includes(searchValue.toLowerCase()) 
    );
    setNewFiltered(filtered);
  };
  return (
    <div>
      <h1>HOME</h1>
      {categories.map((category) => (
        <Button claseName="buttonFilter" onClick={() => filterCategory(category.id)} Key={category.id}>
          {category.name}
        </Button>
      ))}
      
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Search Products"
          onChange={(e) => setSearchValue(e.target.value)}
          value= {searchValue}
        />
        <Button variant="outline-secondary" onClick={searchProduct}>
          Button
        </Button>
      </InputGroup>
      <ul>
        {newFiltered.map((newProducts) => (
          <li
            key={newProducts.id}
            onClick={() => navigate(`/productsItems/:${newProducts.id}`)}
          >
            <h4>{newProducts.title}</h4>
            <br />
            <img src={newProducts.productImgs} alt="" width={"100px"} />
            <br />
            {/* <p>{newProducts.description}</p> */}
            <b>{newProducts.category.name}</b>
            <br />
            <b>{newProducts.price}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
