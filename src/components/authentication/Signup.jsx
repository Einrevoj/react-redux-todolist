import React, { useState } from "react";
import styles from "./Signup.css";
import { Button, Form, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import * as registerAction from "../../redux/actions/actionRegister";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showModal, setShowModal] = useState("");

  //Redux
  const { registerUser } = bindActionCreators(registerAction, useDispatch());
  const userList = useSelector((state) => state.userList);

  //Validation
  const [invalidUsername, setInvalidUsername] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState(false);
  const [invalidPassword, setInvalidPassword] = useState(false);

  const checkIfValid = () => {
    let isValid = true;
    userList.forEach((item) => {
      if (item.username === username) {
        isValid = false;
        setInvalidUsername(true);
      } else {
        setInvalidUsername(false);
      }
      // check email if valid
      if (item.email === email) {
        isValid = false;
        setInvalidEmail(true);
      } else {
        setInvalidEmail(false);
      }
    });
    // Check if password is same with confirmed password
    if (password !== confirmPassword) {
      setInvalidPassword(true);
      isValid = false;
    } else {
      setInvalidPassword(false);
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      registerUser({ username, email, password });
      setShowModal(true);
    }
  };
  const closeRegistration = () => {
    setShowModal(false);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className={styles.container}>
      <form className={styles.formContainer} onSubmit={handleSubmit}>
        <h2>REGISTER</h2>
        <Form.Group className="mb-3" contolId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            size="sm"
            placeholder="Enter Your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            isInvalid={invalidUsername}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            username already exist.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" contolId="su-formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            size="sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            autoComplete="email"
            isInvalid={invalidEmail}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            email already exist.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" contolId="su-formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Your Password"
            autoComplete="new-password"
          ></Form.Control>
        </Form.Group>

        <Form.Group className="mb-3" contolId="formConfirmPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            size="sm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-Enter Your Password"
            autoComplete="new-password"
            isValid={invalidPassword}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            The password confirmation does not match
          </Form.Control.Feedback>
        </Form.Group>

        <Modal show={showModal}>
          <Modal.Header>
            <Modal.Title className="text-dark">Congratulation!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-dark">
            Successful Registration!
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => closeRegistration()}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Button variant="info" type="submit" className={styles.button}>
          Submit
        </Button>
      </form>
    </div>
  );
}
