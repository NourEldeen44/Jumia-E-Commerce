/* eslint-disable eqeqeq */

import React from "react";
 //import { firestore } from "../../../@firebase";
 import { firestore } from "./../../firebase";
import {collection,doc,getDoc, orderBy,query,startAt,endAt,getDocs} from "@firebase/firestore";
import { useRouteMatch, useLocation, Link } from "react-router-dom";

// import { useHistory, useParams, useState} from "react-router-dom";
// import { useEffect, useContext } from "react";
import {  useContext,useEffect,useState } from "react";
import { useHistory } from 'react-router-dom';

// import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
// import { SplitButton } from "react-bootstrap";
// import {where} from "@firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Category = () => {


var history = useHistory();
console.log(history);
const [products, setproducts] = useState([]);
const [loading, setloading] = useState(true);

const { lang } = useContext(langContext);

console.log(history.location.pathname);

 var cat=history.location.pathname.split("/")[2];
  console.log(cat.toLowerCase());
  // var products = [];
  const prdIDS = [];
  var prds = [];


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
          // prds.push(res.data());
          //products.push(res.data());
         console.log(products);
          prdIDS.push(res.id);
          // console.log(prdIDS);
          //console.log(products.length);
        }
      });
    }
  }
  );
  }, []);
  

//   return (
//     <>
//     <div className="container">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="card">
//             <div className="card-header">
//               <h4>{cat}</h4>
//             </div>
//             <span>{products.length} </span>
//             <span>{products} </span>
//             {/* <div className="card-body">
//               <div className="row">
//                 {products.map((product) => (
//                   <div className="col-md-3">
//                     <div className="card">
//                       <div className="card-body">
//                         <img
//                           src={product.imgurl}
//                           alt="product"
//                           className="img-fluid"
//                         />
//                         <h5 className="card-title">{product.engname}</h5>
//                         <p className="card-text">{product.engdetails}</p>
//                         <p className="card-text">
//                           <small className="text-muted">
//                             {product.price}
//                           </small>
//                         </p>
//                         {/* <Link to={`/product/${product.id}`}>
//                           <button className="btn btn-primary">
//                             {lang.readMore}
//                           </button>
//                         </Link> 
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div> */}
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }

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