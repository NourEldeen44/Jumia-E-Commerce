import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
const Cart = () => {
  const { lang, setlang } = useContext(langContext);
  const [cart, setcart] = useState([]);
  useEffect(() => {
    handleCart();
  }, [localStorage.length]);
  const handleCart = () => {
    const myCart = [];
    for (var i = 0; i < localStorage.length; i++) {
      if (!cart.includes(localStorage.key(i)) && localStorage.key(i) != "UID") {
        // myCart.push(`${localStorage.key(i)}`);
        // myCart = [...myCart, `${localStorage.key(i)}`]; Note: Render Problem Cant use this state!!!!!!!!!!!!!!!!!
        // setcart((cart) => [...cart, localStorage.getItem(localStorage.key(i))]);
        // console.log(localStorage.key(i));
        const docRef = doc(firestore, `products/${localStorage.key(i)}`);
        getDoc(docRef).then((res) => {
          myCart.push({ ...res.data(), productID: res.id });
          setcart(myCart);
          // console.log(cart);
          // console.log(myCart);
        });
      }
    }
  };
  return (
    <div
      className="cart-main-box"
      style={{ width: "85vw", marginLeft: "auto", marginRight: "auto" }}
    >
      {cart.map((product, i) => {
        return (
          <div
            key={i}
            className="cart-product-box"
            style={{
              justifyContent: "center",
              alignItems: "center",
              padding: "2rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              backgroundColor: "white",
              marginTop: "1rem",
              borderRadius: "4px",
              // display: "flex",
            }}
          >
            <div
              className="cart-cont-two"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                className="cart-prd-cont-one"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  width: "100%",
                }}
              >
                <img src={product.imgurl} style={{ width: "10vw" }} alt="" />
                <div className="cartprd-name">
                  {lang == "en" ? product.engname : product.arname}
                </div>
              </div>
              <div
                className="cartprd-price"
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  width: "fit-content",
                }}
              >
                <div className="cart-main-price">
                  {lang == "en"
                    ? `${product.price}EGP`
                    : `${product.price}جنيه`}
                </div>
                <div
                  className="card-title"
                  style={
                    product.offer && product.offer !== "0"
                      ? {
                          textDecoration: "line-through",
                          color: "grey",
                        }
                      : { display: "none" }
                  }
                >
                  {lang == "en"
                    ? `${Math.ceil(
                        product.price -
                          (parseInt(product.price) * parseInt(product.offer)) /
                            100
                      ).toFixed(2)}Egp`
                    : `${Math.ceil(
                        product.price -
                          (parseInt(product.price) * parseInt(product.offer)) /
                            100
                      ).toFixed(2)}جنيه`}
                </div>
                <div
                  className="cart-offer-badge"
                  style={
                    product.offer && product.offer !== "0"
                      ? {
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
