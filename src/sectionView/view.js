import React, { useContext, useEffect, useState } from "react";
import "./view.css";
import axios from "../Constants/axios";
import { APIKEY, imgUrl } from "../Constants/constant";
import { PostContext } from "../firebase/Contaxt/PostContext";
import { Container } from "react-bootstrap";
import SectionNavbar from "../sectionNavbar/Navbar";
import logo from "../netflix.png";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import BarLoading from "../assets/BarLoading";

export default function View() {
  const [loading, setLoading] = useState(false);
  const { postDetails } = useContext(PostContext);
  const [urlId, setUrlId] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (postDetails) {
      axios
        .get(`/movie/${postDetails.id}/videos?api_key=${APIKEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0]);
          } else {
            console.log("empty");
          }
        });
    }
    setLoading(false);
  }, []);

  console.log(postDetails);

  return (
    <>
      <SectionNavbar />
      {loading ? (
        <BarLoading />
      ) : (
        <Container>
          <section className="section-hero">
            <div className="hero-container">
              <div className="info-container">
                <div>
                  <h2 className="title">
                    {postDetails.title ? postDetails.title : postDetails.name}
                  </h2>

                  <h6 className="small_title mt-5  ">
                    {postDetails.title ? postDetails.title : postDetails.name}
                  </h6>
                </div>

                <div className="mt-3">
                  <span className="release_date text-muted">
                    {postDetails.release_date
                      ? postDetails.release_date
                      : postDetails.first_air_date}
                  </span>

                  <span className="type ms-3">
                    |{" "}
                    {postDetails.media_type ? postDetails.media_type : "movie"}
                  </span>
                </div>
                <div className="description mt-3">
                  {postDetails ? postDetails.overview : ""}
                </div>
                <div className="author">Sorry for the autor</div>
              </div>

              <div className="hero-image">
                <img
                  src={`${
                    postDetails.backdrop_path
                      ? imgUrl + postDetails.backdrop_path
                      : imgUrl + postDetails.poster_path
                  }`}
                  alt="img"
                />
              </div>
            </div>

            <div className="wrapper-nav mt-5 d-flex justify-content-between">
              <img src={logo} alt="logo" style={{ width: "30px" }} />
              <h6 className="mt-2 ms-3">Whatch all you want</h6>

              <button
                className="btn btn-daner btn-sm text-light "
                onClick={() => {
                  navigation("/");
                }}
              >
                JOIN NOW
              </button>
            </div>
          </section>

          <section className="border-set mt-3 mb-5">
            <div className="hook-hr"></div>
            <small>
              This riveting crime series won Best Drama at the International
              Emmy
              <br />
              Awards, Premios Fénix and Premios Iris (plus six more Iris wins).
            </small>
            <div className="hook-hr"></div>
          </section>

          <section className="video-section mt-5">
            <div className="mb-3">
              <h5>
                Videos |{" "}
                <span className="text-muted">
                  {postDetails.title ? postDetails.title : postDetails.name}
                </span>
              </h5>
            </div>

            <div className="videos mt-5 mb-5">
              {urlId && (
                <ReactPlayer
                  loop
                  width={"100%"}
                  url={`https://www.youtube.com/watch?v=${urlId.key}`}
                  controls
                />
              )}
            </div>
          </section>
        </Container>
      )}
    </>
  );
}
