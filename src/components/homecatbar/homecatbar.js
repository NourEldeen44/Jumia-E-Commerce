/* eslint-disable eqeqeq */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faAppleWhole,
  faComputer,
  faGamepad,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";

const Homecatbar = () => {
  const { lang, setlang } = useContext(langContext);

  return (
    <div
      className="card home-cat-bar"
      style={
        lang == "en"
          ? {
              height: "384px",
              width: "13rem",
              marginRight: "15px",
              border: "1px solid rgba(0,0,0,.09)",
              justifyContent: "space-evenly",
            }
          : {
              height: "384px",
              width: "13rem",
              marginLeft: "15px",
              border: "1px solid rgba(0,0,0,.09)",
              justifyContent: "space-evenly",
            }
      }
    >
      <ul className="list-group list-group-flush">
        <Link to="/category/supermarket">
          <li className="list-group-item">
            {"  "}
            <FontAwesomeIcon icon={faAppleWhole} />
            <span> {lang == "en" ? "Supermarket" : "سوبر ماركت"}</span>
          </li>
        </Link>
        <Link to="/category/fashion">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faShirt} />{" "}
            <span> {lang == "en" ? "Fashion" : "أزياء"}</span>
          </li>
        </Link>
        <Link to="/category/electronics">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faComputer} />{" "}
            <span> {lang == "en" ? "Electronics" : "إلكترونيات"}</span>
          </li>
        </Link>
        <Link to="/category/gamming">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faGamepad} />{" "}
            <span> {lang == "en" ? "Gaming" : "ألعاب"}</span>
          </li>
        </Link>
        <Link to="/category/supermarket">
          <li className="list-group-item">
            {"  "}
            <FontAwesomeIcon icon={faAppleWhole} />
            <span> {lang == "en" ? "Supermarket" : "سوبر ماركت"}</span>
          </li>
        </Link>
        <Link to="/category/fashion">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faShirt} />{" "}
            <span> {lang == "en" ? "Fashion" : "أزياء"}</span>
          </li>
        </Link>
        <Link to="/category/electronics">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faComputer} />{" "}
            <span> {lang == "en" ? "Electronics" : "إلكترونيات"}</span>
          </li>
        </Link>
        <Link to="/category/gamming">
          <li className="list-group-item">
            <FontAwesomeIcon icon={faGamepad} />{" "}
            <span> {lang == "en" ? "Gaming" : "ألعاب"}</span>
          </li>
        </Link>
        <Link to="/category/supermarket">
          <li className="list-group-item">
            {"  "}
            <FontAwesomeIcon icon={faAppleWhole} />
            <span> {lang == "en" ? "Supermarket" : "سوبر ماركت"}</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Homecatbar;
