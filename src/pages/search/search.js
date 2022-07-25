/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */
import React from "react";
import { useRouteMatch, useLocation, Link } from "react-router-dom";
import CardImg from "react-bootstrap/esm/CardImg";
import loadingimg from "../../images/loading.png";
import "./search.css";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  orderBy,
  query,
  startAt,
  endAt,
  getDocs,
  where,
} from "@firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { firestore } from "../../firebase";
import { orderByChild } from "@firebase/database";
import { langContext } from "../../contexts/langContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const Search = () => {
  const searchValue = useRouteMatch().params.value;
  const location = useLocation();
  const [loading, setloading] = useState(true);
  const [products, setproducts] = useState([]);
  const { lang, setlang } = useContext(langContext);
  const prdIDS = [];
  useEffect(() => {
    search();
  }, [location]);
  const fireStore = firestore;
  const search = (value = searchValue) => {
    if (value) {
      setproducts([]);
      const colRef = collection(fireStore, "products");
      //name
      var searchnamequery = query(
        colRef,
        orderBy("search"),
        startAt(value.toLowerCase()),
        endAt(value.toLowerCase() + "\uf8ff")
      );
      //arname
      var searcharabicquery = query(
        colRef,
        orderBy("arname"),
        startAt(value.toLowerCase()),
        endAt(value.toLowerCase() + "\uf8ff")
      );
      //brand
      var searchbrandquery = query(
        colRef,
        where("brand", "==", `${searchValue}`.toLowerCase())
      );
      //category
      var searchcatquery = query(
        colRef,
        orderBy("category"),
        startAt(value.toLowerCase()),
        endAt(value.toLowerCase() + "\uf8ff")
      );
      //search actions
      //search by brand
      getDocs(searchbrandquery).then((q) => {
        if (!q.empty) {
          q.forEach((res) => {
            if (res.exists() && !prdIDS.includes(res.id)) {
              setproducts((products) => [
                ...products,
                { ...res.data(), productID: res.id },
              ]);
              // console.log(products);
              prdIDS.push(res.id);
            }
          });
        }
        //search by cat and name
        else {
          //search by name
          getDocs(searchnamequery).then((q) => {
            if (!q.empty) {
              q.forEach((res) => {
                if (res.exists() && !prdIDS.includes(res.id)) {
                  setproducts((products) => [
                    ...products,
                    { ...res.data(), productID: res.id },
                  ]);
                  // console.log(products);
                  prdIDS.push(res.id);
                }
              });
            } else {
              //search by cat
              getDocs(searchcatquery).then((q) => {
                if (!q.empty) {
                  q.forEach((res) => {
                    if (res.exists() && !prdIDS.includes(res.id)) {
                      setproducts((products) => [
                        ...products,
                        { ...res.data(), productID: res.id },
                      ]);
                      // console.log(products);
                      prdIDS.push(res.id);
                    }
                  });
                } else {
                  //ar name
                  getDocs(searcharabicquery).then((q) => {
                    if (!q.empty) {
                      q.forEach((res) => {
                        const docRef = doc(fireStore, `products/${res.id}`);
                        if (res.exists() && !prdIDS.includes(res.id)) {
                          setproducts((products) => [
                            ...products,
                            { ...res.data(), productID: res.id },
                          ]);
                          // console.log(products);
                          prdIDS.push(res.id);
                        }
                      });
                    } else {
                      alert("empty");
                    }
                  });
                }
              });
            }
          });
        }
        // setloading(false);
        // console.log("!!!!!!!!!!!!!!!!");
        // console.log(products);
        // console.log(prdIDS);
      });
    }
  };
  return (
    <div className="cardBox">
      {products.length == 0 ? (
        <div>
          <img src="../../images/loading.png" alt="" />
        </div>
      ) : (
        products.map((product, index) => {
          // console.log("???????????????????");
          // console.log(products);
          return (
            <div
              key={index}
              style={{
                position: "relative",
                zIndex: "2",
                width: "fit-content",
              }}
            >
              <div
                className="card"
                style={{
                  // width: "calc(33.33333% - 8px)",
                  width: "15vw",
                  marginLeft: "20px",
                  marginBottom: "20px",
                  height: "fit-content",
                }}
              >
                <Link
                  to={`/productDetails/${product.productID}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <img
                    onLoad={() => {
                      setloading(false);
                    }}
                    className="card-img-top"
                    src={loading == true ? loadingimg : product.imgurl}
                    alt="Card image cap"
                  />
                  <div
                    className="card-body"
                    style={{ height: "170px", overflow: "hidden" }}
                  >
                    <div className="card-title">
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
                              ? (
                                  product.price -
                                  (parseInt(product.price) *
                                    parseInt(product.offer)) /
                                    100
                                ).toFixed(2) + " Egp"
                              : (
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
                    <h6 className="card-title">Rate: {product.stars}</h6>
                  </div>
                </Link>
                <button
                  className="btn btn-warning "
                  onClick={() => {
                    localStorage.setItem(
                      products[index].productID,
                      !localStorage.getItem(products[index].productID)
                        ? "1"
                        : (
                            parseInt(
                              localStorage.getItem(products[index].productID)
                            ) + 1
                          ).toString()
                    );
                    alert(products[index].productID + "was added");
                  }}
                  style={{
                    backgroundColor: "darkorange",
                    color: "white",
                    marginBottom: "1rem",
                    marginLeft: "1rem",
                    marginRight: "1rem",
                  }}
                >
                  <span>
                    {lang == "en" ? "Add To Cart  " : "أضف إلى سلة التسوق "}
                  </span>
                  <FontAwesomeIcon icon={faCartShopping} />
                </button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Search;
