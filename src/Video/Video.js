import { React, useState, useEffect, useContext } from "react";
import ReactPlayer from "react-player";
import { PostContext } from "../firebase/Contaxt/PostContext";
import axios from "../Constants/axios";
import { APIKEY } from "../Constants/constant";
import BarLoading from "../assets/BarLoading";

export default function Video() {
  const { postDetails } = useContext(PostContext);
  const [loading, setLoading] = useState(false);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    if (postDetails) {
      setLoading(true);
      axios
        .get(`/movie/${postDetails.id}/videos?api_key=${APIKEY}&language=en-US`)
        .then((response) => {
          if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0]);
          } else {
            console.log("empty");
          }
        });

      setLoading(false);
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div>
          {loading ? (
            <BarLoading />
          ) : (
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
          )}
        </div>
      </div>
    </div>
  );
}
