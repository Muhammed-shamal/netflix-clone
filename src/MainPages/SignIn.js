import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowBarRight, Plus } from "react-bootstrap-icons";
import Collapsible from "react-collapsible";

import { TextField } from "@mui/material";
import "./sign.css";
import imgTv from "../en.png";
import imgTv2 from "../en2.png";
import imgTv3 from "../en-GB.png";
import imgTv4 from "../en3.png";

import SignSectionNavbar from "../signInNavbar/signInNavbar";
import { FirebaseContext } from "../firebase/Contaxt/context";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { firebaseConfig } = useContext(FirebaseContext);
  const navigation = useNavigate();

  const handleSubmit = () => {
    firebaseConfig
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Signed Successfully");
        navigation("/");
      })
      .then((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <SignSectionNavbar />
      <Row className="mt-5 ">
        <Col>
          <div className="hero-img ">
            <div className="heading">
              <h1>Unlimited movies, TV</h1>
              <h1>shows and more</h1>
            </div>

            <div className="mt-3 mb-4">
              <p>Watch anywhere. Cancel anytime.</p>
              <p>
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>

            <div className="mt-2 text-light">
              <TextField
                onChange={(event) => setEmail(event.target.value)}
                variant="outlined"
                className="input-field mb-2"
                label="Email address"
              />

              <TextField
                onChange={(event) => setPassword(event.target.value)}
                variant="outlined"
                className="input-field ms-1 mt-2"
                label="Password"
              />

              <button
                className="btn btn-danger  btn-lg mt-3 ms-3"
                onClick={handleSubmit}
              >
                Get started <ArrowBarRight />
              </button>
            </div>
          </div>
        </Col>
      </Row>

      <div style={{ paddingTop: "3em", paddingBottom: "3em" }}></div>

      <section className="section1">
        <Container>
          <Row className="mt-2">
            <Col>
              <div className="p-5 one">
                <div className="left-side">
                  <div>
                    <h1>Enjoy on your TV</h1>
                  </div>
                  <div>
                    <p className="mt-3">
                      Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple
                      TV
                      <br />
                      Blu-ray players and more.
                    </p>
                  </div>
                </div>
                <div
                  className="container
                "
                >
                  <img src={imgTv} alt="img-right" />
                </div>
              </div>
            </Col>

            <div className="line-long-area">
              <div className="line-long"></div>
            </div>

            <div className="p-5 two">
              <div className="">
                <img src={imgTv2} alt="img-tv" />
              </div>

              <div>
                <div>
                  <h1>Watch everywhere</h1>
                  <p>
                    Stream unlimited movies and TV shows on your phone, tablet,{" "}
                    <br />
                    laptop, and TV.
                  </p>
                </div>
              </div>
            </div>

            <div className="line-long-area">
              <div className="line-long"></div>
            </div>

            <div className="  p-5 three">
              <div>
                <div className="left-side">
                  <h1>
                    Create profiles for <br /> kids
                  </h1>
                  <p>
                    Send children on adventures with their favourite characters
                    in a <br /> space made just for them—free with your
                    membership.
                  </p>
                </div>
              </div>

              <div className="">
                <img src={imgTv3} alt="img-tv" />
              </div>
            </div>

            <div className="line-long-area">
              <div className="line-long"></div>
            </div>

            <div className="p-5 two">
              <div className="">
                <img src={imgTv4} alt="img-tv" />
              </div>

              <div>
                <div>
                  <h1>
                    Download your shows <br /> to watch offline
                  </h1>
                  <p>
                    Save your favourites easily and always have something to
                    watch.
                  </p>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <div style={{ paddingTop: "3em", paddingBottom: "3em" }}></div>

      <section style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <div>
              <h2 className="mb-4 ques">Frequently Asked Questions</h2>

              <div>
                <ul>
                  <li
                    className="container"
                    style={{
                      background: "rgb(19, 33, 68)",
                      marginBottom: "6px",
                    }}
                  >
                    <Collapsible
                      className="texts"
                      trigger={
                        <div className="box d-flex justify-content-between">
                          <h3>
                            <span>What is Next</span>
                          </h3>
                          <Plus style={{ fontSize: "2em" }} />
                        </div>
                      }
                    >
                      {" "}
                      Netflix is a streaming service that offers a wide variety
                      of award-winning TV shows, movies, anime, documentaries
                      and more – on thousands of internet-connected devices.
                      <br />
                      You can watch as much as you want, whenever you want,
                      without a single ad – all for one low monthly price.
                      There's always something new to discover, and new TV shows
                      and movies are added every week!
                    </Collapsible>
                  </li>

                  <li
                    className="container"
                    style={{
                      background: "rgb(19, 33, 68)",
                      marginBottom: "6px",
                    }}
                  >
                    <Collapsible
                      className="texts"
                      trigger={
                        <div className="box d-flex justify-content-between">
                          <h3>
                            <span>How much does Netflix cost?</span>
                          </h3>
                          <Plus style={{ fontSize: "2em" }} />
                        </div>
                      }
                    >
                      {" "}
                      Watch Netflix on your smartphone, tablet, Smart TV,
                      laptop, or streaming device, all for one fixed monthly{" "}
                      <br />
                      fee. Plans range from ₹ 149 to ₹ 649 a month. No extra
                      costs, no contracts.
                    </Collapsible>
                  </li>

                  <li
                    className="container"
                    style={{
                      background: "rgb(19, 33, 68)",
                      marginBottom: "6px",
                    }}
                  >
                    <Collapsible
                      className="texts"
                      trigger={
                        <div className="box d-flex justify-content-between">
                          <h3>
                            <span>Where can i watch?</span>
                          </h3>
                          <Plus style={{ fontSize: "2em" }} />
                        </div>
                      }
                    >
                      {" "}
                      Watch anywhere, anytime. Sign in with your Netflix account
                      to watch instantly on the web at netflix.com from your
                      personal computer or on any internet-connected device that
                      offers the Netflix app, including smart TVs, smartphones,
                      tablets, streaming media players and game consoles.
                      <br />
                      You can also download your favourite shows with the iOS,
                      Android, or Windows 10 app. Use downloads to watch while
                      you're on the go and without an internet connection. Take
                      Netflix with you anywhere.
                    </Collapsible>
                  </li>

                  <li
                    className="container"
                    style={{
                      background: "rgb(19, 33, 68)",
                      marginBottom: "6px",
                    }}
                  >
                    <Collapsible
                      className="texts"
                      trigger={
                        <div className="box d-flex justify-content-between">
                          <h3>
                            <span>How do i cancel</span>
                          </h3>
                          <Plus style={{ fontSize: "2em" }} />
                        </div>
                      }
                    >
                      Netflix is flexible. There are no annoying contracts and
                      no commitments. You can easily cancel your <br /> account
                      online in two clicks. There are no cancellation fees –
                      start or stop your account anytime.
                    </Collapsible>
                  </li>

                  <li
                    className="container"
                    style={{
                      background: "rgb(19, 33, 68)",
                      marginBottom: "6px",
                    }}
                  >
                    <Collapsible
                      className="texts"
                      trigger={
                        <div className="box d-flex justify-content-between">
                          <h3>
                            <span>What can I watch on Netflix?</span>
                          </h3>
                          <Plus style={{ fontSize: "2em" }} />
                        </div>
                      }
                    >
                      Netflix has an extensive library of feature films,
                      documentaries, TV shows, anime, award-winning Netflix{" "}
                      <br />
                      originals, and more. Watch as much as you want, anytime
                      you want.
                    </Collapsible>
                  </li>

                  <li
                    className="container"
                    style={{
                      background: "rgb(19, 33, 68)",
                      marginBottom: "6px",
                    }}
                  >
                    <Collapsible
                      className="texts"
                      trigger={
                        <div className="box d-flex justify-content-between">
                          <h3>
                            <span>Is Netflix good for kids?</span>
                          </h3>
                          <Plus style={{ fontSize: "2em" }} />
                        </div>
                      }
                    >
                      The Netflix Kids experience is included in your membership
                      to give parents control while kids enjoy family-friendly
                      TV shows and films in their own space.
                      <br />
                      Kids profiles come with PIN-protected parental controls
                      that let you restrict the maturity rating of content kids
                      can watch and block specific titles you don’t want kids to
                      see.
                    </Collapsible>
                  </li>
                </ul>
              </div>

              <div className="mt-3 mb-3">
                <span>
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </span>

                <div className="mt-3 text-light">
                  <TextField
                    variant="outlined"
                    onChange={(event) => setEmail(event.target.value)}
                    className="input-field"
                    label="Email address"
                  />
                  <TextField
                    variant="outlined"
                    onChange={(event) => setPassword(event.target.value)}
                    className="input-field"
                    label="Password"
                  />
                  <button
                    className="btn btn-danger  btn-lg mt-1 ms-3"
                    onClick={handleSubmit}
                  >
                    Get started <ArrowBarRight />
                  </button>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </section>

      <footer class="text-center text-lg-start">
        <div>
          <p>
            Questions? Call{" "}
            <span>
              <a href="#phone">
                <span>8304912033</span>
              </a>
            </span>
          </p>
        </div>
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="https://help.netflix.com/en/node/412">FAQ</a>
                </li>
                <li>
                  <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
                    Investor Relation
                  </a>
                </li>
                <li>
                  <a href="https://help.netflix.com/legal/privacy">Privacy</a>
                </li>
                <li>
                  <a href="#!">Speed test</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled">
                <li>
                  <a href="https://help.netflix.com/en/">Help center</a>
                </li>
                <li>
                  <a href="https://jobs.netflix.com/">Jobs</a>
                </li>
                <li>
                  <a href="#!">Cookie prefrence</a>
                </li>
                <li>
                  <a href="#!">Legel notice</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled mb-0">
                <li>
                  <a href="#!">Account</a>
                </li>
                <li>
                  <a href="#!">Corparasion Information</a>
                </li>
                <li>
                  <a href="#!">Ways to wash</a>
                </li>
                <li>
                  <a href="#!">Only on netflix</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <ul class="list-unstyled">
                <li>
                  <a href="https://media.netflix.com/en/s">Media center</a>
                </li>
                <li>
                  <a href="https://help.netflix.com/legal/termsofuse">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a href="https://help.netflix.com/en/contactus">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="drop-language">
          <select name="choice" className="selection">
            <option value="second" lang="en" label="english" selected>
              English
            </option>
            <option value="Spanish">Spanish</option>
            <option value="Hindhi" lang="hi" label="हिन्दी">
              Hindi
            </option>
          </select>
        </div>
        <p className="mt-3">Netflix India</p>
      </footer>
    </div>
  );
}
