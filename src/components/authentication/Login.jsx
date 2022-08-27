import React, { useState } from "react";
import styles from "./Login.css";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import * as actionLogin from "../../redux/actions/actionLogin";
import { bindActionCreators } from "redux";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userList = useSelector((state) => state.userList);
  const { loginUser } = bindActionCreators(actionLogin, useDispatch());

  // Validation
  const [invalidUser, setInvalidUser] = useState(false);

  const checkIfValid = () => {
    let isValid = false;

    //check if use exist
    userList.forEach((user) => {
      if (user.email === email && user.password === password) {
        setInvalidUser(false);
        isValid = true;
        console.log("Successful login");
      } else {
        console.log("Failed login");
        setInvalidUser(true);
      }
    });
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      loginUser({ email, password });
    }
  };

  return (
    <div className={styles.container}>
      <Form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            size="sm"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            isIvalid={invalidUser}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Invalid user
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            isIvalid={invalidUser}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Invalid user
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
