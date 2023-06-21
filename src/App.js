import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./MainPages/Home";
import Login from "./MainPages/Login";
import SignIn from "./MainPages/SignIn";
import View from "./sectionView/view";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Post from "./firebase/Contaxt/PostContext";
import ContextAll from "./firebase/Contaxt/AllPost";
import List from "./list-section/list";
import ListFun from "./firebase/Contaxt/listContext";
import { FirebaseContext, AuthContext } from "./firebase/Contaxt/context";
import PlayVideo from "./sectionBanner/PlayHome";
import Video from "./Video/Video";

function App() {
  const { firebaseConfig } = useContext(FirebaseContext);
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="App">
      <ContextAll>
        <Post>
          <ListFun>
            <Router>
              <div>
                <Routes>
                  <Route path="/" element={user ? <Home /> : <SignIn />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signIn" element={<SignIn />} />
                  <Route path="/view" element={<View />} />
                  <Route path="/addtoMylist" element={<List />} />
                  <Route path="/playVideo" element={<PlayVideo />} />
                  <Route path="/myMovie/playing" element={<Video />} />
                </Routes>
              </div>
            </Router>
          </ListFun>
        </Post>
      </ContextAll>
    </div>
  );
}

export default App;
