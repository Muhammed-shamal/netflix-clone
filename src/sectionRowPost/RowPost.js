import React, { useContext, useEffect, useState } from "react";
import "./Row.css";
import axios from "../Constants/axios";
import { APIKEY, imgUrl } from "../Constants/constant";
import ReactPlayer from "react-player";
import { PostContext } from "../firebase/Contaxt/PostContext";
import { useNavigate } from "react-router-dom";
import { AllpostContext } from "../firebase/Contaxt/AllPost";
import { AuthContext } from "../firebase/Contaxt/context";
import BarLoading from "../assets/BarLoading";

export default function RowPost({ title, isSmall, url }) {
  const { setPostDetails } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState([]);

  const navigator = useNavigate();

  useEffect(() => {
    axios.get(url).then((response) => {
      setPost(response.data.results);
    });
  }, []);

  return (
    <div className="container">
      <div>
        <h5 className="title mt-5 ">{title}</h5>
        <div className="posters">
          {post.map((value) => (
            <>
              <img
                onClick={() => {
                  setPostDetails(value);
                  user ? navigator("/view") : navigator("/signIn");
                }}
                className={isSmall ? "smallPoster" : "poster"}
                src={`${post ? imgUrl + value.backdrop_path : ""}`}
                alt="img"
              />
              <div className="smallText">
                <small>{post ? value.original_title : ""}</small>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
