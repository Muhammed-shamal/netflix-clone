import React, { useContext, useEffect, useState } from "react";
import "./list.scss";
import { ListContext } from "../firebase/Contaxt/listContext";
import { Container, Row, Col } from "react-bootstrap";
import { Chat, Heart, Mailbox, Share } from "react-bootstrap-icons";
import { imgUrl } from "../Constants/constant";
import SectionNavbar from "../sectionNavbar/Navbar";
import { FirebaseContext } from "../firebase/Contaxt/context";
import { PostContext } from "../firebase/Contaxt/PostContext";
import { useNavigate } from "react-router-dom";
import BarLoading from "../assets/BarLoading";

export default function List() {
  const [myMovies, setMyMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const { firebaseConfig } = useContext(FirebaseContext);
  const { addList } = useContext(ListContext);
  const { setPostDetails } = useContext(PostContext);
  const navigation = useNavigate();

  useEffect(() => {
    setLoading(true);
    firebaseConfig
      .firestore()
      .collection("myMovies")
      .add({
        id: addList.id,
        movieImg: addList.backdrop_path
          ? addList.backdrop_path
          : addList.poster_path,
        release_date: addList.release_date
          ? addList.release_date
          : addList.first_air_date,
        media_type: addList.media_type,
        movieName: addList.title ? addList.title : addList.name,
        movieDescription: addList.overview,
      })
      .then(() => {
        firebaseConfig
          .firestore()
          .collection("myMovies")
          .get()
          .then((response) => {
            response.forEach((doc) => {
              setMyMovies((myMovies) => [...myMovies, doc.data()]);
            });
          });
      });
    setLoading(false);
  }, []);

  return (
    <div>
      <Container>
        <SectionNavbar />
        <Row>
          <Col sm="4">
            {loading ? (
              <BarLoading />
            ) : (
              myMovies.map((movie) => (
                <div
                  class="movie_card"
                  id="bright"
                  onClick={() => {
                    setPostDetails(movie);
                    navigation("/myMovie/playing");
                  }}
                >
                  <div class="info_section">
                    <div class="movie_header">
                      <img
                        class="locandina"
                        src={movie ? imgUrl + movie.movieImg : ""}
                        alt="img"
                      />
                      <h3 className="text-dark">
                        {movie.movieName ? movie.movieName : ""}
                      </h3>
                      <h6 className="text-dark">
                        {movie.release_date ? movie.release_date : ""}
                      </h6>

                      <p className="text-dark">{movie.media_type}</p>
                    </div>
                    <div class="movie_desc">
                      <small class="text">{movie.movieDescription}</small>
                    </div>
                    <div class="movie_social">
                      <ul>
                        <li>
                          <i class="material-icons">
                            <Share />
                          </i>
                        </li>
                        <li>
                          <i class="material-icons">
                            <Heart />
                          </i>
                        </li>
                        <li>
                          <i class="material-icons">
                            <Chat />
                          </i>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    class="blur_back bright_back"
                    style={{
                      background: `url(${
                        movie ? imgUrl + movie.movieImg : ""
                      })`,
                    }}
                  ></div>
                </div>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
