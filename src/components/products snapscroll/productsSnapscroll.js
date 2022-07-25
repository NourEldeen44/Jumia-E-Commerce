/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable eqeqeq */
import {
  faChevronLeft,
  faChevronRight,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import loadingimg from "../../images/loading.png";
import { langContext } from "../../contexts/langContext";
import "./ProductSnapscroll.css";

const ProductSnapscroll = (props) => {
  const [products, setproducts] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setproducts(props.products);
    // console.log("Ids!!!!!!!!!!!!!!!!!!!!!!!!1");
    // console.log(props.prdsIDS);
  }, [props]);
  const [snapScrollScreen, setsnapScrollScreen] = useState("start");
  const [nxtBtnDisabled, setnxtBtnDisabled] = useState(false);
  const [prvBtnDisabled, setprvBtnDisabled] = useState(true);
  const { lang, setlang } = useContext(langContext);
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
      ref={props.refrence}
      className="snap-scroll-box"
      style={{
        display: "flex",
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
            ? { backgroundColor: "#c7c7cd", cursor: "auto" }
            : { backgroundColor: "#939393", cursor: "pointer" }
        }
        className="product-scroll-Btn nxt-btn"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <section className="product-snap-parent">
        {products.map((product, index) => {
          // console.log(product);
          return (
            <Link
              // to={`/search=${index}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                key={index}
                ref={
                  index == 0
                    ? firstImageRef
                    : index == products.length - 1
                    ? lastImageRef
                    : null
                }
                className="product-snap-child"
              >
                <div
                  className="card"
                  style={
                    lang == "en" && index == 0
                      ? {
                          marginLeft: 0,
                          width: "15vw",
                          marginBottom: "10px",
                          height: "fit-content",
                        }
                      : lang == "ar" && index == 0
                      ? {
                          width: "15vw",
                          marginRight: 0,
                          marginLeft: "11px",
                          marginBottom: "10px",
                          height: "fit-content",
                        }
                      : {
                          // width: "calc(33.33333% - 8px)",
                          width: "15vw",
                          marginLeft: "11px",
                          marginBottom: "10px",
                          height: "fit-content",
                        }
                  }
                >
                  <div
                    className="product-offer-badge"
                    style={
                      product.offer && product.offer !== "0"
                        ? {
                            position: "absolute",
                            left: "10px",
                            top: "5px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            color: "darkorange",
                            backgroundColor: "#feefde",
                            borderRadius: "4px",
                            padding: "4px",
                          }
                        : { display: "none" }
                    }
                  >
                    {"-" + product.offer + "%"}
                  </div>
                  <Link
                    to={`/productDetails/${product.productID}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      style={{ width: "95%" }}
                      onLoad={() => {
                        setloading(false);
                      }}
                      className="card-img-top"
                      src={loading == true ? loadingimg : product.imgurl}
                      alt="Card image cap"
                    />
                    <div
                      className="card-body"
                      style={{
                        height: "110px",
                      }}
                    >
                      <div
                        className="card-title"
                        style={{
                          width: "100%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {lang == "en" ? product.engname : product.arname}
                      </div>
                      <div className="offerPrice">
                        {parseInt(product.offer) == 0 ? (
                          <div className="card-title">
                            {lang == "en"
                              ? product.price + " Egp"
                              : product.price + " جنيه "}
                          </div>
                        ) : (
                          <div>
                            {/* price after offer */}
                            <div
                              className="card-title"
                              style={{
                                fontSize: "1rem",
                                fontWeight: "600",
                                marginBottom: "0px",
                              }}
                            >
                              {lang == "en"
                                ? Math.ceil(
                                    product.price -
                                      (parseInt(product.price) *
                                        parseInt(product.offer)) /
                                        100
                                  ).toFixed(2) + " Egp"
                                : Math.ceil(
                                    product.price -
                                      (parseInt(product.price) *
                                        parseInt(product.offer)) /
                                        100
                                  ).toFixed(2) + " جنيه "}
                            </div>
                            {/* price before offer */}
                            <div
                              className="card-title"
                              style={{
                                textDecoration: "line-through",
                                color: "grey",
                              }}
                            >
                              {lang == "en"
                                ? product.price + " Egp"
                                : product.price + " جنيه "}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
                {/* <img src={product.imgurl} alt="..." /> */}
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
            ? { backgroundColor: "#c7c7cd", cursor: "auto" }
            : { backgroundColor: "#939393", cursor: "pointer" }
        }
        className="product-scroll-Btn prv-btn"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default ProductSnapscroll;
