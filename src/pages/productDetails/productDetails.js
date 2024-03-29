/* eslint-disable eqeqeq */
import React from "react";
// import Details from './Details';
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useRef } from "react";
import "./productDetails.css";
function ProductDetails(props) {
  const { lang, setlang } = useContext(langContext);
  const [productData, setProductData] = useState({});
  const productID = useRouteMatch().params.id;
  const mainRef = useRef(null);

  useEffect(() => {
    const docRef = doc(firestore, `products/${productID}`);
    getDoc(docRef).then((res) => {
      setProductData(res.data());
      // console.log(productData["keyfeatures"][0]);
    });
    mainRef.current.scrollIntoView();
  }, []);

  // function addtoFavorites(productId) {

  //   const favorites = JSON.parse(localStorage.getItem("favoriteItems") || "[]")
  //   localStorage.setItem('favoriteItems', JSON.stringify(favorites))
  //   if (!favorites.includes(productId)) {
  //     favorites.push(productId)
  //     localStorage.setItem('favoriteItems', JSON.stringify(favorites))
  //     console.log("added")
  //   } else {
  //     for (var i = 0; i < favorites.length; i++) {
  //       if (favorites[i] == productId) {
  //         favorites.splice(i, 1);
  //         console.log("deleted")
  //         localStorage.setItem('favoriteItems', JSON.stringify(favorites))
  //       }

  //     }
  //   }

  // }

  return (
    <>
      <div>
        <div
          id="detailsMain"
          ref={mainRef}
          class=" d-flex justify-content-center"
          style={{ backgroundColor: "#f5f5f5" }}
        >
          <div
            class="container border1 justify-content-center d-flex flex-row ps-3 pe-3 pt-5"
            // style={{ width: "80%" }}
          >
            <div class="row ">
              <div class="leftSide border1 col-md-8 d-flex flex-column p-2">
                <small class="text-start pb-2">
                  {" "}
                  <span
                    class="ps-1"
                    style={{ color: "gray", textTransform: "capitalize" }}
                  >
                    {productData.category}{" "}
                  </span>{" "}
                </small>
                <div class="leftSide1 border1 ">
                  <div
                    class="card pt-3 ps-1   p-3 mb-3 bg-body rounded"
                    style={{ width: "100%;" }}
                  >
                    <div class="" style={{ maxWidth: "540px;" }}>
                      <div class="row">
                        <div class="col-md-5">
                          <img
                            src={productData.imgurl}
                            class="img-fluid rounded-start pb-3 border-bottom"
                            alt="..."
                          />
                          <h6 class=" ps-2">
                            {" "}
                            {lang == "en"
                              ? "SHARE THIS PRODUCT"
                              : "مشاركة هذا المنتج"}
                          </h6>
                          <div class="text-start ps-2">
                            <a
                              href=""
                              style={{ color: "black", textDecoration: "none" }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                class="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                              </svg>{" "}
                            </a>
                          </div>
                        </div>
                        <div class="col-md-7">
                          {/* <span class="text-start" style={{ width: "80px", height: "30px", backgroundColor: "blue" }}>Official Store</span> */}
                          <div class="">
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              <p class="">
                                <small
                                  class=" rounded-1"
                                  style={{
                                    width: "80px",
                                    padding: "2px",
                                    backgroundColor: "#276076",
                                    color: "white",
                                    fontSize: "12px",
                                  }}
                                >
                                  {lang == "en"
                                    ? "Official Store"
                                    : "المتجر الرسمي"}
                                </small>
                              </p>
                            </div>
                            <h5 class="">
                              {lang == "en"
                                ? productData.engname
                                : productData.arname}{" "}
                            </h5>
                            <p class="" style={{ margin: "0" }}>
                              {lang == "en" ? "Brand:" : "الماركة:"}
                              <a
                                a
                                href=""
                                target=""
                                class="ms-1 text-decoration-none "
                                style={{ color: "#3872bc" }}
                              >
                                {productData.brand}
                              </a>{" "}
                            </p>
                            <span style={{ display: "flex" }}>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>

                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>

                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>

                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>

                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="14"
                                  height="14"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#c7c7cd" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span>
                                <a
                                  a
                                  href=""
                                  target=""
                                  class="ms-1 text-decoration-none "
                                  style={{ color: "#3872bc" }}
                                >
                                  {lang == "en"
                                    ? "(1 verified rating)"
                                    : "( 1 تقيمات موثوقه للمنتج)"}
                                </a>
                              </span>
                            </span>
                            <h3 class=" fw-bold ">
                              {" "}
                              {lang == "en"
                                ? `${Math.ceil(
                                    productData.price -
                                      (parseInt(productData.price) *
                                        parseInt(productData.offer)) /
                                        100
                                  ).toFixed(2)}EGP`
                                : `${Math.ceil(
                                    productData.price -
                                      (parseInt(productData.price) *
                                        parseInt(productData.offer)) /
                                        100
                                  ).toFixed(2)}جنيه`}{" "}
                            </h3>
                            <div class="d-flex">
                              <p
                                class=" text-start text-decoration-line-through"
                                style={{ color: "gray" }}
                              >
                                {" "}
                                {productData.price}
                              </p>{" "}
                            </div>

                            <p class="">
                              {" "}
                              <small
                                style={{
                                  color: "#4b873b",
                                  fontSize: "12px",
                                  fontWeight: "500",
                                }}
                              >
                                {lang == "en"
                                  ? "Free delivery (you are saving EGP 10.83) to 6th of October"
                                  : "توصيل مجاني لحد 6 اكتوبر"}
                              </small>
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => {
                              localStorage.setItem(
                                productID,
                                !localStorage.getItem(productID)
                                  ? "1"
                                  : (
                                      parseInt(
                                        localStorage.getItem(productID)
                                      ) + 1
                                    ).toString()
                              );
                              alert(productID + "was added");
                            }}
                            class="btn pb-2 mb-3"
                            style={{
                              visibility: "visible",
                              width: "100%",
                              height: "45px",
                              backgroundColor: "#f68b1e",
                              color: "white",
                            }}
                          >
                            <span class="fw-bold">
                              {" "}
                              {lang == "en"
                                ? "ADD TO CART"
                                : "اضافه لسله التسوق"}{" "}
                            </span>
                          </button>
                          <h6 class="border-top pt-1">
                            {lang == "en" ? "PROMOTIONS" : "عروض"}
                          </h6>
                          <div class=" pb-1">
                            {" "}
                            <a
                              href=""
                              class="text-decoration-none "
                              style={{ color: "#3872bc" }}
                            >
                              {" "}
                              {lang == "en"
                                ? "Enjoy instalments from 6 months to 60 months with valU"
                                : " تقسيط على مزاجك من 6 شهور الى 60 شهر مع فاليو"}{" "}
                            </a>{" "}
                          </div>
                          <div class="pb-1 ">
                            {" "}
                            <a
                              href=""
                              class="text-decoration-none"
                              style={{ color: "#3872bc" }}
                            >
                              {" "}
                              {lang == "en"
                                ? "Check our daily Flash Sales offers"
                                : "استمتع بعروض Flash Sales كل يوم"}{" "}
                            </a>{" "}
                          </div>
                          <div class=" pb-1 ">
                            {" "}
                            <a
                              href=""
                              class="text-decoration-none"
                              style={{ color: "#3872bc" }}
                            >
                              {" "}
                              {lang == "en"
                                ? "Your July landline bill is available now, pay it from here in seconds!"
                                : "!فاتورة يوليو لخط تليفونك الأرضي متاحة الأن، ادفعها من هنا في ثواني"}{" "}
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div id="details" style={{ display: "flex" }}>
                      <div
                        style={{
                          width: "50%",
                          height: "300px",
                          color: "black",
                          display: "flex",
                          alignItems: "flex-end",
                        }}
                      >
                        {" "}
                        <a
                          href="#"
                          class="text-decoration-none"
                          style={{ paddingLeft: "5px" }}
                        >
                          {" "}
                          {lang == "en"
                            ? "Report incorrect product information"
                            : "إبلاغ عن بيانات غير صحيحة في المنتج"}{" "}
                        </a>{" "}
                      </div>
                      <div style={{ width: "50%", color: "black" }}></div>
                    </div>
                  </div>
                </div>

                <div id="speci" class="">
                  <div
                    class="card   p-3 mb-3 bg-body rounded  ps-1"
                    style={{ width: "100%;" }}
                  >
                    <h5
                      style={{
                        textAlign: "start",
                        paddingLeft: "10px",
                        width: "100%",
                        paddingBottom: "10px",
                      }}
                      class="border-bottom"
                    >
                      {" "}
                      {lang == "en" ? "Product details" : "مواصفات المنتج"}
                    </h5>

                    <div
                      style={{
                        paddingLeft: "10px",
                        paddingTop: "18px",
                        paddingBottom: "18px",
                        width: "100%",
                      }}
                    >
                      {" "}
                      {lang == "en"
                        ? productData.engdetails
                        : productData.ardetails}{" "}
                    </div>
                  </div>
                </div>

                <div class="">
                  <div
                    class="card  p-3 mb-3 bg-body rounded "
                    style={{ width: "100%;" }}
                  >
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
                      {lang == "en" ? "Specifications" : "المواصفات"}{" "}
                    </h5>

                    <div
                      style={{
                        display: "flex",
                        paddingTop: "14px",
                        width: "100%",
                        justifyContent: "space-around",
                      }}
                    >
                      <div
                        style={{
                          border: "solid 2px #f0f0f0",
                          width: "47%",
                          height: "240px",
                          borderRadius: "6px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: ".875rem",
                            fontWeight: "500",
                            textAlign: "start",
                            paddingLeft: "10px",
                            width: "100%",
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          class="border-bottom"
                        >
                          {" "}
                          {lang == "en"
                            ? "KEY FEATURES"
                            : "المواصفات الرئيسية"}{" "}
                        </p>
                        <p>
                          {/* we should loop here when we get the details from firebase */}
                          <ul>
                            {productData["keyfeatures"]
                              ? productData["keyfeatures"].map(
                                  (keyf, index) => {
                                    if (index <= 3) {
                                      return (
                                        <li style={{ textAlign: "start" }}>
                                          {keyf}{" "}
                                        </li>
                                      );
                                    }
                                  }
                                )
                              : "N/A"}
                          </ul>
                        </p>
                      </div>
                      <div
                        style={{
                          border: "solid 2px #f0f0f0",
                          width: "47%",
                          height: "240px",
                          borderRadius: "6px",
                        }}
                      >
                        <p
                          style={{
                            fontSize: ".875rem",
                            fontWeight: "500",
                            textAlign: "start",
                            paddingLeft: "10px",
                            width: "100%",
                            paddingBottom: "15px",
                            paddingTop: "15px",
                          }}
                          class="border-bottom"
                        >
                          {" "}
                          {lang == "en" ? "Specifications" : "المواصفات"}{" "}
                        </p>
                        <div style={{ display: "flex", paddingLeft: "12px" }}>
                          <div style={{ fontWeight: "700" }}>
                            {lang == "en" ? "SKU" : "وحده حفظ المنتج"}{" "}
                          </div>
                          <div
                            style={{
                              paddingLeft: "4px",
                              wordBreak: "break-all",
                            }}
                          >
                            {productData.unicode !== ""
                              ? productData.unicode
                              : "N/A"}
                          </div>
                        </div>

                        <div style={{ display: "flex", paddingLeft: "12px" }}>
                          <div style={{ fontWeight: "700" }}>
                            {lang == "en" ? "Model:" : "الموديل:"}{" "}
                          </div>
                          <div style={{ paddingLeft: "4px" }}>
                            {productData.model !== ""
                              ? productData.model
                              : "N/A"}
                          </div>
                        </div>

                        <div style={{ display: "flex", paddingLeft: "12px" }}>
                          <div style={{ fontWeight: "700" }}>
                            {lang == "en" ? "Color:" : "اللون: "}{" "}
                          </div>
                          <div style={{ paddingLeft: "4px" }}>
                            {productData.color !== ""
                              ? productData.color
                              : "N/A"}
                          </div>
                        </div>

                        <div style={{ display: "flex", paddingLeft: "12px" }}>
                          <div style={{ fontWeight: "700" }}>
                            {lang == "en"
                              ? "Main Material: "
                              : "الخامه الرئيسية:"}{" "}
                          </div>
                          <div style={{ paddingLeft: "4px" }}>
                            {" "}
                            {productData.mainmaterial !== ""
                              ? productData.mainmaterial
                              : "N/A"}
                          </div>
                        </div>
                        <div style={{ display: "flex", paddingLeft: "12px" }}>
                          <div style={{ fontWeight: "700" }}>
                            {lang == "en" ? "Country" : "البلد"}{" "}
                          </div>
                          <div style={{ paddingLeft: "4px" }}>
                            {" "}
                            {productData.productioncountry !== ""
                              ? productData.productioncountry
                              : "N/A"}
                          </div>
                        </div>
                        {/* <div style={{ display: "flex", paddingLeft: "12px" }}>
                        <div style={{ textAlign: "start", fontWeight: "700" }}>
                          {" "}
                        </div>
                        <div style={{ paddingLeft: "4px" }}>
                          {" "}
                          {productData.productioncountry !== ""
                            ? productData.productioncountry
                            : "N/A"}
                        </div>
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>

                <div class="leftSide2 border1">
                  <div
                    class="card p-3  bg-body rounded  ps-1"
                    style={{ width: "100%;" }}
                  >
                    <h5
                      style={{
                        textAlign: "start",
                        paddingLeft: "10px",
                        width: "100%",
                      }}
                      class="border-bottom"
                    >
                      {" "}
                      {lang == "en"
                        ? "Customers who viewed this also viewed"
                        : "شاهد العملاء أيضًا"}
                    </h5>
                    <div> products scroller </div>
                  </div>
                </div>

                <div class="mt-3">
                  <div
                    class="card p-3  bg-body rounded  ps-1"
                    style={{ width: "100%;" }}
                  >
                    <h5
                      id="feedback"
                      style={{
                        textAlign: "start",
                        paddingLeft: "10px",
                        width: "100%",
                      }}
                      class="border-bottom"
                    >
                      {" "}
                      {lang == "en" ? "You may also like" : "قد يعجبك ايضا"}
                    </h5>
                    <div> products scroller </div>
                  </div>
                </div>

                <div class="mt-3">
                  <div
                    class="card   p-3 mb-3 bg-body rounded "
                    style={{ width: "100%;" }}
                  >
                    <div
                      class="border-bottom"
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingLeft: "10px",
                        width: "100%",
                      }}
                    >
                      <h5 id="feedback" style={{ textAlign: "start" }}>
                        {" "}
                        {lang == "en"
                          ? "Verified Customer Feedback"
                          : "اراء العملاء الموثقه"}{" "}
                      </h5>
                      <p
                        style={{
                          paddingRight: "5px",
                          color: "#f6b01e",
                          fontWeight: "500",
                        }}
                      >
                        {" "}
                        {lang == "en" ? "SEE ALL" : "عرض الكل"} &gt;{" "}
                      </p>
                    </div>
                    <div
                      class="container"
                      // style={{
                      //   display: "flex",
                      //   width: "100%",
                      //   justifyContent: "space-around",
                      //   padding: "8px",
                      // }}
                    >
                      <div
                        class="row"
                        style={{
                          display: "flex",
                          width: "100%",
                          justifyContent: "space-around",
                          padding: "8px",
                        }}
                      >
                        <div class="col-md-3 ">
                          <p
                            style={{
                              fontSize: ".875rem",
                              fontWeight: "500",
                              textAlign: "start",
                              paddingLeft: "10px",
                              width: "100%",
                              paddingBottom: "4px",
                              paddingTop: "15px",
                            }}
                          >
                            {" "}
                            {lang == "en"
                              ? "VERIFIED RATINGS (13)"
                              : " 13  تقييمات موثقة للمنتج"}{" "}
                          </p>
                          <div
                            style={{
                              backgroundColor: "#f5f5f5",
                              width: "85%",
                              height: "150px",
                              marginLeft: "8px",
                              padding: "10px",
                              borderRadius: "3px",
                            }}
                          >
                            <div
                              style={{
                                height: "40%",
                                fontSize: "1.8125rem",
                                fontWeight: "700",
                                paddingTop: "4px",
                                color: "#f6b01e",
                                textAlign: "center",
                              }}
                            >
                              4.5/5
                            </div>
                            <div style={{ height: "25%", textAlign: "center" }}>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "2px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "2px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "2px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "2px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#c7c7cd" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                            </div>
                            <div style={{ height: "25%", textAlign: "center" }}>
                              {lang == "en"
                                ? " 13 VERIFIED RATINGS"
                                : " 13 تقييمات موثقة للمنتج"}
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "85%",
                              paddingLeft: "10px",
                              paddingRight: "2px",
                              paddingTop: "10px",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div
                                style={{ fontWeight: "500", paddingTop: "2px" }}
                              >
                                {" "}
                                5{" "}
                              </div>
                              <div
                                style={{
                                  fontWeight: "500",
                                  paddingLeft: "5px",
                                }}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-star-fill"
                                    style={{ color: "#f6b01e" }}
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                </span>{" "}
                              </div>
                              <div
                                style={{
                                  color: "gray",
                                  paddingLeft: "5px",
                                  paddingTop: "2px",
                                }}
                              >
                                {" "}
                                (9){" "}
                              </div>
                            </div>
                            <div style={{ width: "90px", paddingTop: "10px" }}>
                              <div
                                class="progress"
                                style={{ width: "100px", height: "12px" }}
                              ></div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "85%",
                              paddingLeft: "10px",
                              paddingRight: "2px",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div
                                style={{ fontWeight: "500", paddingTop: "2px" }}
                              >
                                {" "}
                                4{" "}
                              </div>
                              <div
                                style={{
                                  fontWeight: "500",
                                  paddingLeft: "5px",
                                }}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-star-fill"
                                    style={{ color: "#f6b01e" }}
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                </span>{" "}
                              </div>
                              <div
                                style={{
                                  color: "gray",
                                  paddingLeft: "5px",
                                  paddingTop: "2px",
                                }}
                              >
                                {" "}
                                (9){" "}
                              </div>
                            </div>
                            <div style={{ width: "90px", paddingTop: "10px" }}>
                              <div
                                class="progress"
                                style={{ width: "100px", height: "12px" }}
                              ></div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "85%",
                              paddingLeft: "10px",
                              paddingRight: "2px",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div
                                style={{ fontWeight: "500", paddingTop: "2px" }}
                              >
                                {" "}
                                3{" "}
                              </div>
                              <div
                                style={{
                                  fontWeight: "500",
                                  paddingLeft: "5px",
                                }}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-star-fill"
                                    style={{ color: "#f6b01e" }}
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                </span>{" "}
                              </div>
                              <div
                                style={{
                                  color: "gray",
                                  paddingLeft: "5px",
                                  paddingTop: "2px",
                                }}
                              >
                                {" "}
                                (0){" "}
                              </div>
                            </div>
                            <div style={{ width: "90px", paddingTop: "10px" }}>
                              <div
                                class="progress"
                                style={{ width: "100px", height: "12px" }}
                              ></div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "85%",
                              paddingLeft: "10px",
                              paddingRight: "2px",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div
                                style={{ fontWeight: "500", paddingTop: "2px" }}
                              >
                                {" "}
                                2{" "}
                              </div>
                              <div
                                style={{
                                  fontWeight: "500",
                                  paddingLeft: "5px",
                                }}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-star-fill"
                                    style={{ color: "#f6b01e" }}
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                </span>{" "}
                              </div>
                              <div
                                style={{
                                  color: "gray",
                                  paddingLeft: "5px",
                                  paddingTop: "2px",
                                }}
                              >
                                {" "}
                                (1){" "}
                              </div>
                            </div>
                            <div style={{ width: "90px", paddingTop: "10px" }}>
                              <div
                                class="progress"
                                style={{ width: "100px", height: "12px" }}
                              ></div>
                            </div>
                          </div>

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              width: "85%",
                              paddingLeft: "10px",
                              paddingRight: "2px",
                            }}
                          >
                            <div style={{ display: "flex" }}>
                              <div
                                style={{ fontWeight: "500", paddingTop: "2px" }}
                              >
                                {" "}
                                1{" "}
                              </div>
                              <div
                                style={{
                                  fontWeight: "500",
                                  paddingLeft: "5px",
                                }}
                              >
                                {" "}
                                <span>
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    class="bi bi-star-fill"
                                    style={{ color: "#f6b01e" }}
                                    viewBox="0 0 16 16"
                                  >
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                  </svg>
                                </span>{" "}
                              </div>
                              <div
                                style={{
                                  color: "gray",
                                  paddingLeft: "5px",
                                  paddingTop: "2px",
                                }}
                              >
                                {" "}
                                (0){" "}
                              </div>
                            </div>
                            <div style={{ width: "90px", paddingTop: "10px" }}>
                              <div
                                class="progress"
                                style={{ width: "100px", height: "12px" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-9">
                          <p
                            style={{
                              fontSize: ".875rem",
                              fontWeight: "500",
                              textAlign: "start",
                              paddingLeft: "10px",
                              width: "100%",
                              paddingTop: "15px",
                            }}
                          >
                            {" "}
                            {lang == "en"
                              ? "PRODUCT REVIEWS (13)"
                              : "تعلييقات المنتج (13)"}{" "}
                          </p>

                          <div
                            class="border-bottom"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              textAlign: "start",
                              height: "100px",
                              paddingLeft: "8px",
                              paddingBottom: "5px",
                            }}
                          >
                            <div>
                              {" "}
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "start",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  textAlign: "start",
                                }}
                              >
                                <div style={{ paddingRight: "5px" }}>
                                  {" "}
                                  20-07-2022{" "}
                                </div>
                                <div>
                                  {" "}
                                  {lang == "en" ? "By" : "بواسطه"} Marwa{" "}
                                </div>
                              </div>
                              <div
                                style={{
                                  color: "#89c951",
                                  fontWeight: "400",
                                  fontSize: "16",
                                }}
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-check2-circle"
                                  style={{ fontWeight: "600" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>{" "}
                                {lang == "en"
                                  ? "Verified Purchase"
                                  : "شراء موثق"}
                              </div>
                            </div>
                          </div>

                          <div
                            class="border-bottom"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              textAlign: "start",
                              height: "150px",
                              paddingLeft: "8px",
                              paddingBottom: "5px",
                            }}
                          >
                            <div>
                              {" "}
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "start",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  textAlign: "start",
                                }}
                              >
                                <div style={{ paddingRight: "5px" }}>
                                  {" "}
                                  20-07-2022{" "}
                                </div>
                                <div>
                                  {" "}
                                  {lang == "en" ? "By" : "بواسطه"} Mariam{" "}
                                </div>
                              </div>
                              <div
                                style={{
                                  color: "#89c951",
                                  fontWeight: "400",
                                  fontSize: "16",
                                }}
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-check2-circle"
                                  style={{ fontWeight: "600" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>{" "}
                                {lang == "en"
                                  ? "Verified Purchase"
                                  : "شراء موثق"}
                              </div>
                            </div>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              textAlign: "start",
                              height: "150px",
                              paddingLeft: "8px",
                              paddingBottom: "5px",
                            }}
                          >
                            <div>
                              {" "}
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                              <span style={{ paddingRight: "5px" }}>
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-star-fill"
                                  style={{ color: "#f6b01e" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "start",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  textAlign: "start",
                                }}
                              >
                                <div style={{ paddingRight: "5px" }}>
                                  {" "}
                                  20-07-2022{" "}
                                </div>
                                <div>
                                  {" "}
                                  {lang == "en" ? "By" : "بواسطه"} Nadine Mounir{" "}
                                </div>
                              </div>
                              <div
                                style={{
                                  color: "#89c951",
                                  fontWeight: "400",
                                  fontSize: "16",
                                }}
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-check2-circle"
                                  style={{ fontWeight: "600" }}
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                </svg>{" "}
                                {lang == "en"
                                  ? "Verified Purchase"
                                  : "شراء موثق"}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="mt-3">
                  <div
                    class="card p-3  bg-body rounded  ps-1"
                    style={{ width: "100%;" }}
                  >
                    <h5
                      style={{
                        paddingLeft: "10px",
                        width: "100%",
                      }}
                      class="border-bottom"
                    >
                      {lang == "en"
                        ? "Sponsored products"
                        : "منتجات ذات دعايه مدفوعة"}
                    </h5>
                    <div> products scroller </div>
                  </div>
                </div>
              </div>

              <div
                class=" card border col-md-3 rounded"
                style={{
                  backgroundColor: "white",
                  marginTop: "37px",
                  // height: "29%",
                  marginLeft: "10px",
                }}
              >
                <div>
                  <div
                    style={{
                      paddingTop: "15px",
                      paddingLeft: "8px",
                      paddingRight: "8px",
                    }}
                  >
                    <div
                      class="container fw-bolder border-bottom pb-2"
                      style={{ fontSize: ".875rem", fontWeight: "500" }}
                    >
                      {" "}
                      {lang == "en"
                        ? "DELIVERY & RETURNS"
                        : "التوصيل والارجاع"}{" "}
                    </div>
                    <div class="">
                      Jumia{" "}
                      <span class="fst-italic" style={{ color: "#f68b1e" }}>
                        EXPRESS
                      </span>
                    </div>
                    <div
                      class=" fw-normal border-bottom pb-2"
                      style={{ fontSize: ".75rem" }}
                    >
                      {" "}
                      {lang == "en"
                        ? "Order from Jumia Express items and get free shipping."
                        : "توصيل مجاني عند شرائك من منتجات جوميا اكسبريس"}{" "}
                      <a
                        href=""
                        style={{
                          fontSize: ".875rem",
                          textDecoration: "none",
                          color: "#3872bc",
                        }}
                      >
                        {" "}
                        {lang == "en" ? "Details" : "تفاصيل"}{" "}
                      </a>{" "}
                    </div>
                    <div class=" fw-bolder p-1">
                      {" "}
                      {lang == "en"
                        ? "Choose your location"
                        : "اختار العنوان"}{" "}
                    </div>
                    {/* <div class="form-floating"> */}
                    <select
                      class="form-select mb-2"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>Giza</option>
                      <option value="1">Alexandria</option>
                      <option value="2">Cairo</option>
                      <option value="3">Qenna</option>
                    </select>
                    <select
                      class="form-select mb-2"
                      id="floatingSelect"
                      aria-label="Floating label select example"
                    >
                      <option selected>6th of October</option>
                      <option value="1">Dokki</option>
                      <option value="2">Maadi</option>
                      <option value="3">Sheikh Zayed</option>
                    </select>
                    {/* </div> */}
                    <div>
                      <div style={{ display: "flex", paddingTop: "10px" }}>
                        <div style={{ width: "20%", paddingTop: "5px" }}>
                          {" "}
                          <span
                            class="border rounded "
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              paddingTop: "4px",
                              paddingBottom: "7px",
                            }}
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              fill="currentColor"
                              class="bi bi-truck"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                            </svg>{" "}
                          </span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span
                              style={{ fontSize: ".875rem", fontWeight: "500" }}
                            >
                              {" "}
                              {lang == "en"
                                ? "Door Delivery"
                                : "توصيل إلى باب المنزل"}
                            </span>
                            <a
                              href=""
                              style={{ fontSize: ".75rem", color: "#3872bc" }}
                              class="text-decoration-none "
                            >
                              {lang == "en" ? "Details" : "تفاصيل"}
                            </a>
                          </div>
                          <p class="" style={{ margin: "0" }}>
                            {" "}
                            <small
                              class=""
                              style={{
                                color: "#4b873b",
                                fontSize: "12px",
                                fontWeight: "500",
                              }}
                            >
                              {lang == "en"
                                ? "Free delivery (you are saving EGP 22.23)"
                                : "توصل مجاني (هتوفر 22.23 جنيه"}
                            </small>
                          </p>
                          <p class="" style={{ fontSize: "12px" }}>
                            {" "}
                            {lang == "en"
                              ? "Delivery by"
                              : "يتم التوصيل من يوم"}{" "}
                            <span style={{ fontWeight: "500" }}>
                              {" "}
                              {lang == "en" ? "27 July" : "27 يوليو"}{" "}
                            </span>{" "}
                            {lang == "en"
                              ? "when you order within next "
                              : "عند الطلب خلال"}{" "}
                            <span style={{ fontWeight: "500" }}>
                              {" "}
                              {lang == "en"
                                ? "20hrs 53mins"
                                : "ساعتين و 53 دقيقه"}{" "}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", paddingTop: "10px" }}>
                        <div style={{ width: "20%", paddingTop: "5px" }}>
                          {" "}
                          <span
                            class="border rounded "
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              paddingTop: "4px",
                              paddingBottom: "7px",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              fill="currentColor"
                              class="bi bi-box2-heart"
                              viewBox="0 0 16 16"
                            >
                              <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z" />
                              <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z" />
                            </svg>
                          </span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span
                              style={{ fontSize: ".875rem", fontWeight: "500" }}
                            >
                              {" "}
                              {lang == "en" ? "Pickup Station" : "مركز التسليم"}
                            </span>
                            <a
                              href=""
                              style={{ fontSize: ".75rem", color: "#3872bc" }}
                              class="text-decoration-none "
                            >
                              {lang == "en" ? "Details" : "تفاصيل"}
                            </a>
                          </div>
                          <p class="" style={{ margin: "0" }}>
                            {" "}
                            <small
                              class=""
                              style={{
                                color: "#4b873b",
                                fontSize: "12px",
                                fontWeight: "500",
                              }}
                            >
                              {lang == "en"
                                ? "Free delivery (you are saving EGP 22.23)"
                                : "توصل مجاني (هتوفر 22.23 جنيه"}
                            </small>
                          </p>
                          <p class="" style={{ fontSize: "12px" }}>
                            {" "}
                            {lang == "en"
                              ? "Pickup by "
                              : "يتم التوصيل من يوم"}{" "}
                            <span style={{ fontWeight: "500" }}>
                              {" "}
                              {lang == "en" ? "27 July" : "٢٦ يوليو"}{" "}
                            </span>{" "}
                            {lang == "en"
                              ? "when you order within next "
                              : "عند الطلب خلال"}{" "}
                            <span style={{ fontWeight: "500" }}>
                              {" "}
                              {lang == "en"
                                ? "20hrs 53mins"
                                : "20 ساعه و 53 دقيقه"}{" "}
                            </span>
                          </p>
                        </div>
                      </div>

                      <div style={{ display: "flex", paddingTop: "10px" }}>
                        <div style={{ width: "20%", paddingTop: "5px" }}>
                          {" "}
                          <span
                            class="border rounded "
                            style={{
                              paddingRight: "10px",
                              paddingLeft: "10px",
                              paddingTop: "4px",
                              paddingBottom: "7px",
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="21"
                              height="21"
                              fill="currentColor"
                              class="bi bi-archive"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                          </span>
                        </div>
                        <div style={{ width: "80%" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <span
                              style={{ fontSize: ".875rem", fontWeight: "500" }}
                            >
                              {" "}
                              {lang == "en" ? "Return Policy" : "سياسة الارجاع"}
                            </span>
                            <a
                              style={{ fontSize: ".75rem" }}
                              class="text-decoration-none "
                            ></a>
                          </div>

                          <p
                            class=""
                            style={{ fontSize: "12px", paddingBottom: "10px" }}
                          >
                            {lang == "en"
                              ? "14 days free return (except for underwear and personal items) up to 30 days for defective products with necessity for requesting a return within 24 hours from the delivery date."
                              : "استرجاع المنتجات مجاناً لمدة 14 يوم (ماعدا الملابس الداخلية ومنتجات الإستخدام الشخصى) وحتي 30 يوم للمنتجات التالفة مع ضرورة الإبلاغ عنها فى غضون 24 ساعة من تاريخ الإستلام."}{" "}
                            <a
                              href="#"
                              class="text-decoration-none "
                              style={{ fontSize: ".75rem", color: "#3872bc" }}
                            >
                              {" "}
                              {lang == "en" ? "See more" : "عرض المزيد"}{" "}
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- <div style="height:70px; border:solid 1px blue;"> </div> --> */}
                </div>
                <div
                  class=" card p-3 mb-3 bg-body rounded"
                  style={{ width: "100%;", marginTop: "15px" }}
                >
                  <h5
                    style={{
                      textAlign: "start",
                      width: "100%",
                      paddingBottom: "3px",
                      fontSize: ".875rem",
                      fontWeight: "500",
                    }}
                    class="border-bottom"
                  >
                    {" "}
                    {lang == "en" ? "SELLER INFORMATION" : "بيانات البائع"}
                  </h5>

                  <div
                    style={{
                      textAlign: "start",
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: ".875rem", fontWeight: "500" }}>
                        {" "}
                        {lang == "en" ? "Jumia " : "جوميا"}
                      </div>
                      <div style={{ fontSize: ".75rem" }}>
                        {lang == "en"
                          ? "100% Seller Score"
                          : " 100%تقييم البائع"}
                      </div>
                    </div>
                    <a
                      href=""
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      {" "}
                      &gt;
                    </a>
                  </div>
                </div>
                <div
                  class=" card mb-3 bg-body rounded"
                  style={{ width: "100%;", padding: "8px" }}
                >
                  <div style={{ textAlign: "start", width: "100%" }}>
                    <div style={{ fontSize: ".875rem", fontWeight: "500" }}>
                      {" "}
                      {lang == "en"
                        ? "Have one to sell?"
                        : "هل لديك منتج للبيع"}
                    </div>
                    <div style={{ fontSize: ".75rem" }}>
                      {lang == "en"
                        ? "click here to list you product"
                        : "اضغط هنا لادراج منتجك"}
                    </div>
                  </div>
                </div>

                <div
                  class="  rounded-top border border-bottom-0 hoverEffect"
                  style={{ width: "100%;", padding: "15px" }}
                >
                  <div style={{ width: "100%" }}>
                    <div style={{ fontSize: ".875rem", fontWeight: "400" }}>
                      <span class="pe-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-list-ul"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                          />
                        </svg>
                      </span>
                      <a href="#details">
                        {lang == "en" ? "Product details" : "مواصفات المنتج"}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class="border border-bottom-0 hoverEffect"
                  style={{ width: "100%;", padding: "15px" }}
                >
                  <div style={{ width: "100%" }}>
                    <div style={{ fontSize: ".875rem", fontWeight: "400" }}>
                      <span class="pe-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-file-text"
                          viewBox="0 0 16 16"
                        >
                          <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                        </svg>
                      </span>
                      <a href="#speci">
                        {" "}
                        {lang == "en" ? "Specifications" : "المواصفات"}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class=" rounded-bottom border border-bottom-0 hoverEffect"
                  style={{ width: "100%;", padding: "15px" }}
                >
                  <div style={{ width: "100%" }}>
                    <div style={{ fontSize: ".875rem", fontWeight: "400" }}>
                      <span class="pe-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-chat-square-dots"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                        </svg>
                      </span>
                      <a href="#feedback">
                        {lang == "en"
                          ? "Verified Customer Feedback"
                          : "اراء العملاء الموثقه"}{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  class=" card mt-3 bg-body rounded"
                  style={{ width: "100%;", padding: "8px" }}
                >
                  <div style={{ width: "100%" }}>
                    <div style={{ fontSize: ".875rem", textAlign: "center" }}>
                      {" "}
                      {lang == "en"
                        ? "Questions about this product?"
                        : "أسئلة حول هذا المنتج؟"}
                    </div>
                    <button class="buttonHover" style={{ textAlign: "center" }}>
                      <span
                        style={{ paddingRight: "8px", textAlign: "center" }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          class="bi bi-chat-left-text"
                          viewBox="0 0 16 16"
                        >
                          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                          <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                      </span>
                      {lang == "en" ? "CHAT" : "محادثه فوريه"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="mt-3" style={{ width: "80%;", border: 'solid red 2px' }}>

                <div class="card p-3  bg-body rounded  ps-1" style={{ width: "100%;" }}>
                    <h5 style={{ textAlign: 'start', paddingLeft: '10px', width: '100%' }} class="border-bottom">Sponsored products</h5>
                    <div> products scroller </div>


                </div>
            </div> */}
      </div>
    </>
  );
}

export default ProductDetails;
