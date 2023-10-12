import React, { useContext } from "react";
import { Row, Col, Container, Navbar, Button, Dropdown } from "react-bootstrap";
import netflixLogo from "./images/netflix 2.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext, FirebaseContext } from "../firebase/Contaxt/context";

export default function SectionNavbar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { firebaseConfig } = useContext(FirebaseContext);

  return (
    <Container>
      <Row>
        <Col>
          <Navbar>
            <Navbar.Brand>
              <img
                src={netflixLogo}
                alt="img"
                className="navbar-img"
                onClick={() => navigate("/")}
              />
            </Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
              <select name="choice" className="selection  ">
                <option value="second" lang="en" label="english" selected>
                  English
                </option>
                <option value="Spanish">Spanish</option>
                <option value="Hindhi" lang="hi" label="हिन्दी">
                  Hindi
                </option>
              </select>

              <Dropdown
                placement="left-end"
                className="mx-3"
                style={{ fontSize: "small" }}
              >
                <Dropdown.Toggle variant="light"></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    {!user ? (
                      <Button
                        className="btn btn-danger btn-sm ms-3"
                        onClick={() => navigate("/signIn")}
                      >
                        SignIn
                      </Button>
                    ) : (
                      <span>
                        <strong className="userName ms-2">
                          Welcome {user.displayName}
                        </strong>
                      </span>
                    )}
                  </Dropdown.Item>
                  <Dropdown.Item className="logout">
                    {user && (
                      <>
                        <span
                          onClick={() => {
                            firebaseConfig.auth().signOut();
                            navigate("/login");
                          }}
                        >
                          Logout
                        </span>
                      </>
                    )}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
