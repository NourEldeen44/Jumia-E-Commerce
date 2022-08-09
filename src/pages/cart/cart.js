import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { langContext } from "../../contexts/langContext";
import "./cart.css"
import { Button } from "bootstrap";
const Cart = () => {
  // const locationre = useLocation()
  const { lang, setlang } = useContext(langContext);
  const [cart, setcart] = useState([]);
  const [price, setPrice] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  useEffect(() => {
    handleCart();
    console.log("rendered")

  }, [localStorage.length]);
  const handleCart = () => {
    const myCart = [];
    let totalCart = 0;
    for (var i = 0; i < localStorage.length; i++) {
      if (!cart.includes(localStorage.key(i))) {
        // myCart.push(`${localStorage.key(i)}`);
        // myCart = [...myCart, `${localStorage.key(i)}`]; Note: Render Problem Cant use this state!!!!!!!!!!!!!!!!!
        // setcart((cart) => [...cart, localStorage.getItem(localStorage.key(i))]);
        // console.log(localStorage.key(i));
        const docRef = doc(firestore, `products/${localStorage.key(i)}`);
        getDoc(docRef).then((res) => {
          myCart.push({ ...res.data(), productID: res.id, cartCounter: localStorage.getItem(res.id) });
          totalCart += parseInt(res.data()["price"]) * localStorage.getItem(res.id);

          setcart(myCart);
          // console.log(cart);
          console.log(totalCart);
          setPrice(totalCart)

        });
      }
    }

  };
  function deletingItem(product) {
    let deleteCart = cart;

    for (var i = 0; i < deleteCart.length; i++) {
      if (deleteCart[i].productID == product.productID)
        deleteCart.splice(i);
      setcart(deleteCart);
      console.log(cart)

    }
    for (var key = 0; key < localStorage.length; key++) {
      if (localStorage.key(key) == product.productID)
        localStorage.removeItem(product.productID);

      window.location.reload();
    }

    alert("deleted")
  }


  function totalPriceFun() {
    let totalPrice = 0;
    let totalCart = cart;
    totalCart.forEach(item => {
      totalPrice += parseInt(item.price);


    })
    setPrice(totalPrice);
  }


  function addOne(theProduct) {
    let counterr;
    // let addOneCart = cart;
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) == theProduct.productID) {
        counterr = theProduct.cartCounter;
        counterr++
        // addOneCart.push(theProduct)
        localStorage.setItem(theProduct.productID, counterr)
        // setcart(addOneCart)


        console.log(cart)
        console.log(counterr);


      }

    }
    window.location.reload();


  }

  let counter;
  function deleteOne(theProduct) {

    counter = theProduct.cartCounter;
    // let deleteOneCart = cart;
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.key(i) == theProduct.productID) {
        // counter = theProduct.cartCounter;
        if (counter >= 2) {
          counter--
          localStorage.setItem(theProduct.productID, counter)
          window.location.reload();

        }

      }

    }


  }

  let discount;
  return (

    <>


      <div
        className="cart-main-box"
        style={{ width: "85vw", marginLeft: "auto", marginRight: "auto" }}
      >



        <div class="container " style={{ width: "92%" }}>

          <div class="row">
            <div class="col-lg-9 d-flex flex-column" >
              <div style={{ backgroundColor: "white", borderRadius: '3px', paddingLeft: '10px', paddingTop: '7px', paddingBottom: '7px' }}>
                <h5
                  style={{
                    textAlign: "start",
                    paddingLeft: "10px",
                    width: "100%",
                    paddingBottom: "8px",
                  }}
                  class="border-bottom"
                >
                  {" "}
                  {lang == "en" ? "Cart" : "سلة التسوق"}{" "}
                </h5>
                {cart.map((product, i) => {
                  return (


                    <>
                      <div style={{ paddingBottom: '15px' }} class="border-bottom">
                        <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '10px', paddingLeft: '10px', paddingTop: '10px' }}>

                          <div style={{ display: 'flex' }} >
                            <div style={{ paddingRight: '10px' }}>
                              <img src={product.imgurl} style={{ width: '72px' }} alt="" />
                            </div>

                            <div>
                              <div style={{ fontSize: '1rem', fontWeight: '400', textOverflow: 'ellipsis', paddingTop: '9px' }}> {lang == "en" ? product.engname : product.arname}</div>
                              <div class="">
                                Jumia{" "}
                                <span class="fst-italic" style={{ color: "#f68b1e" }}>
                                  EXPRESS
                                </span>
                              </div>
                            </div>
                          </div>


                          <div>
                            <div style={{ fontSize: '1.25rem', fontWeight: '500', paddingRight: '7px' }}>  <div>  {" "}
                              {lang == "en"
                                ? `${Math.ceil(
                                  product.price -
                                  (parseInt(product.price) *
                                    parseInt(product.offer)) /
                                  100
                                ).toFixed(2)}EGP`
                                : `${Math.ceil(
                                  product.price -
                                  (parseInt(product.price) *
                                    parseInt(product.offer)) /
                                  100
                                ).toFixed(2)}جنيه`}{" "}</div>  </div>
                            <div style={{ display: 'flex' }}>
                              <span style={{ textDecoration: 'line-through', color: 'gray' }}>  {lang == "en"
                                ? `${product.price}EGP`
                                : `${product.price}جنيه`} </span>
                              <span
                                class="ms-1"
                                style={{
                                  height: "25px",
                                  backgroundColor: "#feefde",
                                  color: "#f68d26", paddingLeft: '5px', paddingRight: '5px'
                                }}
                              >
                                {" "}
                                %{product.offer}
                              </span>{" "}
                            </div>
                          </div>

                        </div>
                        <span style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', paddingRight: '10px' }}>

                          <button onClick={() => { deletingItem(product) }} style={{ color: '#F68B1E', fontSize: '.875rem', fontWeight: '500', backgroundColor: 'white', border: 'white' }}>
                            <span style={{ paddingRight: '10px', fontWeight: '700' }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                              </svg> </span> {lang == "en" ? "REMOVE" : "ازاله"}
                          </button>

                          <div style={{ display: 'flex', justifyContent: 'space-between', width: '13%' }}>
                            <button className="theButton" onClick={() => { deleteOne(product) }} disabled={cart[i].cartCounter == 1 ? true : false}> <span style={{ fontSize: '20px', fontWeight: '600' }} > - </span> </button>
                            <h6 style={{ paddingTop: '7px' }}>{cart[i].cartCounter}</h6>
                            <button onClick={() => { addOne(product) }} style={{ width: '32px', height: '32px', borderRadius: '4px', backgroundColor: '#F68B1E', border: 'white', color: 'white' }}><span style={{ fontSize: '20px', fontWeight: '600' }}> + </span> </button>
                          </div>

                        </span>



                      </div>
                    </>
                  );
                })}
              </div>





            </div>

            <div class="col-lg-3  d-flex flex-column" style={{ backgroundColor: "white", borderRadius: '3px' }}>
              <div
                class="fw-bolder border-bottom pb-2"
                style={{ fontSize: ".875rem", fontWeight: "400", paddingTop: '7px' }}
              >
                {" "}
                {lang == "en" ? "CART SUMMARY" : "ملخص سلة التسوق"}{" "}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }} className='border-bottom'>
                <div
                  class="fw-bolder  pb-2"
                  style={{ fontSize: ".875rem", fontWeight: "400", paddingTop: '7px' }}
                >
                  {" "}
                  {lang == "en" ? "Subtotal" : "الاجمالي"}{" "}
                </div>

                <div style={{ fontSize: '1.15rem', fontWeight: '500', paddingRight: '7px' }}>

                  {lang == "en"
                    ? `${price}EGP`
                    : `${price}جنيه`}
                </div>

              </div>
              <div
                style={{
                  color: "black",
                  fontWeight: "400",
                  fontSize: ".75rem", paddingTop: '7px', paddingLeft: '7px', paddingRight: '7px'
                }}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  class="bi bi-check2-circle"
                  style={{ fontWeight: "600", color: "#89c951" }}
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                </svg>{" "}
                {lang == "en" ? "Jumia Express items are eligible for free delivery " : "منتجات جوميا اكسبريس مؤهلة للشحن المجاني"}
              </div>
              <div class="ps-3 pb-1 border-bottom">
                Jumia{" "}
                <span class="fst-italic" style={{ color: "#f68b1e" }}>
                  EXPRESS
                </span>
              </div>
              <button style={{ width: '95%', height: '40px', borderRadius: '4px', backgroundColor: '#F68B1E', border: 'white', color: 'white', marginTop: '10px' }}>
                <span style={{ fontSize: '.875rem', fontWeight: '500' }}>    {lang == "en" ? "CHECKOUT " : "شراء"} <span> ( {lang == "en"
                  ? `${price}EGP`
                  : `${price}جنيه`} )  </span></span>
              </button>
            </div>
          </div>


        </div>




      </div>


      <div class="container " style={{ height: '100px', backgroundColor: '#f1f1f1' }}>  </div>




    </>
  );
};

export default Cart;
