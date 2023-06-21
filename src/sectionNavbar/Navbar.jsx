import React, { useContext } from "react";
import { Row, Col, Container, Navbar, Button } from "react-bootstrap";
import netflixLogo from "./images/netflix 2.png";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../firebase/Contaxt/context";

export default function SectionNavbar() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Row>
        <Col>
          <Navbar>
            <Navbar.Brand>
              <img
                src={netflixLogo}
                alt="img"
                style={{ width: "150px", cursor: "pointer" }}
                onClick={() => navigate("/")}
              />
            </Navbar.Brand>
            <Navbar.Toggle />

            <Navbar.Collapse className="justify-content-end">
              <select name="choice" className="selection">
                <option value="second" lang="en" label="english" selected>
                  English
                </option>
                <option value="Spanish">Spanish</option>
                <option value="Hindhi" lang="hi" label="हिन्दी">
                  Hindi
                </option>
              </select>
              {!user ? (
                <Button
                  className="btn btn-danger btn-sm ms-3"
                  onClick={() => navigate("/signIn")}
                >
                  SignIn
                </Button>
              ) : (
                <span>
                  <strong className="ms-2">Welcome {user.displayName}</strong>
                </span>
              )}
            </Navbar.Collapse>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
