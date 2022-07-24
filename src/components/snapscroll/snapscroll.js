/* eslint-disable eqeqeq */
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import "./snapscroll.css";
import { langContext } from "../../contexts/langContext";

const Snapscroll = (props) => {
  const [images, setimages] = useState([]);
  const { lang, setlang } = useContext(langContext);
  useEffect(() => {
    setimages(props.images);
  }, []);
  const [snapScrollScreen, setsnapScrollScreen] = useState("start");
  const [nxtBtnDisabled, setnxtBtnDisabled] = useState(false);
  const [prvBtnDisabled, setprvBtnDisabled] = useState(true);
  const firstImageRef = useRef(null);
  const lastImageRef = useRef(null);
  const nxtBtnRef = useRef(null);
  const prvBtnRef = useRef(null);
  const scrollEnd = () => {
    lastImageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    // console.log(snapScrollScreen);
    setnxtBtnDisabled(true);
    setprvBtnDisabled(false);
  };
  const scrollFirst = () => {
    firstImageRef.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
    setsnapScrollScreen("start");
    // console.log(snapScrollScreen);
    setprvBtnDisabled(true);
    setnxtBtnDisabled(false);
  };
  return (
    <div
      className="snap-scroll-box"
      style={{
        display: "flex",
        // maxWidth: "85vw",
        marginLeft: "auto",
        marginRight: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={scrollFirst}
        ref={prvBtnRef}
        style={
          prvBtnDisabled
            ? { backgroundColor: "#c7c7cd", cursor: "auto", direction: "ltr" }
            : {
                backgroundColor: "#939393",
                cursor: "pointer",
                direction: "ltr",
              }
        }
        className="scroll-Btn"
      >
        {lang == "en" ? (
          <FontAwesomeIcon icon={faChevronLeft} />
        ) : (
          <FontAwesomeIcon icon={faChevronRight} />
        )}
      </button>
      <section className="snap-parent">
        {images.map((image, index) => {
          return (
            <Link to={`/search=${index}`}>
              <div
                key={index}
                ref={
                  index == 0
                    ? firstImageRef
                    : index == images.length - 1
                    ? lastImageRef
                    : null
                }
                className="snap-child"
              >
                <img src={image} alt="..." />
              </div>
            </Link>
          );
        })}
      </section>
      <button
        onClick={scrollEnd}
        ref={nxtBtnRef}
        style={
          nxtBtnDisabled
            ? { backgroundColor: "#c7c7cd", cursor: "auto", direction: "ltr" }
            : {
                backgroundColor: "#939393",
                cursor: "pointer",
                direction: "ltr",
              }
        }
        className="scroll-Btn"
      >
        {lang == "en" ? (
          <FontAwesomeIcon icon={faChevronRight} />
        ) : (
          <FontAwesomeIcon icon={faChevronLeft} />
        )}
      </button>
    </div>
  );
};

export default Snapscroll;
