import React, { useContext, useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import "./login.css";
import SectionNavbar from "../sectionNavbar/Navbar";

import { Link, useNavigate } from "react-router-dom";
import { FirebaseContext } from "../firebase/Contaxt/context";
export default function Login() {
  const [email, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMail, setError] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const { firebaseConfig } = useContext(FirebaseContext);
  const navigation = useNavigate();

  const handleSignUp = () => {
    firebaseConfig
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        response.user.updateProfile({ displayName: userName }).then(() => {
          firebaseConfig
            .firestore()
            .collection("user")
            .add({
              id: response.user.uid,
              uname: userName,
              email: email,
              password: password,
            })
            .then(() => {
              navigation("/signIn");
            });
        });
      })
      .then((error) => {
        console.error(error);
      });
  };

  const handleSignIn = () => {
    if (!email && !password) {
      //document.getElementById("emailError").hidden = false;
      //document.getElementById("passwordError").hidden = false;
      setError(true);
      setErrorPassword(true);
    } else if (!email) {
      setError(true);
      setErrorPassword(false);
      //document.getElementById("emailError").hidden = false;
    } else if (!password) {
      setErrorPassword(true);
      setError(false);
      // document.getElementById("passwordError").hidden = false;
    } else {
      setErrorPassword(false);
      setError(false);
      handleSignUp();
    }
  };
  return (
    <div>
      <div className=" login-wrapper-background">
        <SectionNavbar />
        <div className="d-flex justify-content-center align-items-center ">
          <div className="loginBody">
            {/* <Form.Control placeholder="Email or phone number" type="email" className='w-50'/>
        <Form.Control placeholder="Email or phone number" type="password" className='w-50' /> */}
            <div className="mt-2 mb-4 ">
              <h3>Sign In</h3>
            </div>

            <Row>
              <Col>
                {" "}
                <Form
                  className="mt-3 mb-4"
                  style={{ background: "hsla(0, 0%, 100%, 0.55);" }}
                >
                  <Form.Group className="mt-4 mb-3">
                    <Form.Control
                      className="border-bottom w-100"
                      placeholder="UserName"
                      type="text"
                      onChange={(event) => setUserName(event.target.value)}
                    />
                    <span
                      id="emailError"
                      className="text-warning mt-2 mb-2"
                      hidden={errorMail ? false : true}
                    >
                      Please enter a valid email address
                    </span>
                  </Form.Group>

                  <Form.Group>
                    <Form.Control
                      className="border-bottom w-100"
                      placeholder="Email or phone number"
                      type="email"
                      onChange={(event) => setMail(event.target.value)}
                    />
                    <span
                      id="emailError"
                      className="text-warning mt-2 mb-2"
                      hidden={errorMail ? false : true}
                    >
                      Please enter a valid email address
                    </span>
                  </Form.Group>

                  <Form.Group className="mt-4 mb-3">
                    <Form.Control
                      className="border-bottom w-100"
                      placeholder="Password"
                      type="password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    <span
                      id="passwordError"
                      className="text-warning mt-2 mb-2"
                      hidden={errorPassword ? false : true}
                    >
                      Your password must contain between 4 and 60 characters.
                    </span>
                  </Form.Group>

                  <Button
                    onClick={handleSignIn}
                    className="mt-4 btn btn-danger w-100"
                  >
                    Sign In
                  </Button>

                  <div className="d-flex justify-content-between mt-2 mb-4">
                    <div>
                      <input type="checkbox" />
                      <span className="ms-2">Remember</span>
                    </div>
                    <span>Need help? </span>
                  </div>

                  <Form.Text className="mt-4">
                    New to Netlix ?<Link to={"/sign"}> Sign up now</Link>
                  </Form.Text>

                  <div className="mt-2">
                    <small>
                      This page is protected by Google reCAPTCHA to <br />{" "}
                      ensure you're not a bot.{" "}
                    </small>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}
