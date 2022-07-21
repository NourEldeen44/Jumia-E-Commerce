import React from "react";
import { useState, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Link } from "react-router-dom";
import Loream from "../../components/loream/loream";
import SaleCarousel from "../../components/salescarousel/saleCarousel";
import Snapscroll from "../../components/snapscroll/snapscroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firestore from "../../firebase";
import "./home.css";
import {
  faAppleWhole,
  faComputer,
  faGamepad,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import loadingImage from "../../images/loading.png";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
import Homecatbar from "../../components/homecatbar/homecatbar";
const Home = () => {
  const { lang, setlang } = useContext(langContext);
  const [loaded, setloaded] = useState(false);
  return (
    <div className="home-page-parent">
      <div className="home-navigation">
        <Homecatbar></Homecatbar>
        <SaleCarousel></SaleCarousel>
        <div
          className="side-nav-sales"
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "15px",
            marginRight: "15px",
          }}
        >
          <Link to="/loream">
            <img
              key={"1"}
              onLoad={() => setloaded(true)}
              style={{
                marginBottom: "14px",
                borderRadius: "4px",
                maxHeight: "218px",
              }}
              src={
                loaded
                  ? "https://eg.jumia.is/cms/27-22/Teasers/Artboard_1_copy.jpg"
                  : loadingImage
              }
              alt=""
            />
          </Link>
          <Link to="/loream">
            <img
              key={"2"}
              style={{ borderRadius: "4px", maxHeight: "218px" }}
              onLoad={() => setloaded(true)}
              src={
                loaded
                  ? "https://eg.jumia.is/cms/27-22/Teasers/Artboard_1-(3).jpg"
                  : loadingImage
              }
              alt=""
            />
          </Link>
        </div>
      </div>
      <Loream></Loream>
    </div>
  );
};

export default Home;
