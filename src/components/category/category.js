/* eslint-disable eqeqeq */
import './category.css';
import React from "react";
import { firestore } from "./../../firebase";
import {collection,doc,getDoc, orderBy,query,startAt,endAt,getDocs} from "@firebase/firestore";
import { useRouteMatch, useLocation, Link } from "react-router-dom";
import {  useContext,useEffect,useState } from "react";
import { useHistory } from 'react-router-dom';
import { langContext } from "../../contexts/langContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Category = () => {
var history = useHistory();
console.log(history);
const [products, setproducts] = useState([]);
const { lang } = useContext(langContext);
console.log(history.location.pathname);
 var cat=history.location.pathname.split("/")[2];
  console.log(cat.toLowerCase());
  const prdIDS = [];
  useEffect(() => {    
  const colRef = collection(firestore,"products");
  var searchcatquery = query(
    colRef,
    orderBy("category"),
    startAt(cat.toLowerCase()),
    endAt(cat.toLowerCase() + "\uf8ff")
  );
  getDocs(searchcatquery).then((q) => {
    if (!q.empty) {
      q.forEach((res) => {
        if (res.exists() && !prdIDS.includes(res.id)) {
           setproducts((products) => [...products, res.data()]);
          prdIDS.push(res.id);
        }
      });
    }
  }
  );
  }, []);
  


  return (
    <div className="cardBox">
    {products.length == 0 ? (
      <div>
        <img src="../../images/loading.png" alt="" />
      </div>
    ) : (
      products.map((product, index) => {
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
                to={`/search=${index}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {/* <img  onLoad={() => {setloading(false);}} className="card-img-top" src={loading == true ? loadingimg : product.imgurl} alt="Card image cap"/> */}
                <img className="card-img-top" src={product.imgurl} alt="Card image cap" />
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
                onClick={() => {}}
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
}
export default Category;