import React, { useEffect, useContext, useState } from "react";
import "./Banner.css";
import axios from "../Constants/axios";
import { APIKEY, imgUrl } from "../Constants/constant";
import SectionNavbar from "../sectionNavbar/Navbar";
import { Play, Plus } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { ListContext } from "../firebase/Contaxt/listContext";
import { AuthContext } from "../firebase/Contaxt/context";

export default function Banner() {
  const { setAddList } = useContext(ListContext);
  const { user } = useContext(AuthContext);

  const [movie, setMovie] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${APIKEY}&language=en-US`)
      .then((response) => {
        let x = Math.floor(Math.random() * response.data.results.length);
        setMovie(response.data.results[x]);
      });
  }, []);

  return (
    <div
      className="banner"
      style={{
        background: `url(${movie ? imgUrl + movie.backdrop_path : ""})`,
      }}
    >
      <SectionNavbar />
      <div>
        <div className="content col-sm-4">
          <div className="banner-title">
            <h1>{movie ? movie.title : ""}</h1>
          </div>

          <div className="buttons">
            <button
              className="button"
              onClick={() => {
                user ? navigation("/playVideo") : navigation("/signIn");
                setAddList(movie ? movie : "");
              }}
            >
              <Play className="mb-1" /> Play
            </button>
            <button
              className="button"
              onClick={() => {
                user ? navigation("/addtoMylist") : navigation("/signIn");
                setAddList(movie ? movie : "");
              }}
            >
              <Plus className="mb-1" /> My list
            </button>
          </div>

          <h6 className="banner-discription">{movie ? movie.overview : ""}</h6>
        </div>

        <div className="fade-bottom"></div>
      </div>
    </div>
  );
}
