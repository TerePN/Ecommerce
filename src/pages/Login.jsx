import axios from "axios";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data) => {
    console.log(data);
    axios
      .post("https://ecommerce-api-react.herokuapp.com/api/v1/users/login", data)
      
      .then(() => alert("Usuario loggeado"))
      .catch((error) => {
        if (error.response?.status === 404) {
          alert("Credenciales inválidas");
        }
        console.log(error.response);
      });
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(submit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email")}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password")}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
