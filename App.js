import React from "react";
import {NavLink} from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Search from "./components/Search";
import SingleMovies from "./components/SingleMovies";
import {Routes, Route, Link} from "react-router-dom";
import Error from "./components/Error";
import "./App.css"


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="movie/:id" element={<SingleMovies/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </>
  );
}

export default App;
