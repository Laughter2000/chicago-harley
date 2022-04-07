import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'flowbite';
import 'tw-elements';
import Home from 'views/Home';
import AboutUs from 'views/AboutUs';


ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);


