/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faBars,
  faBarsStaggered,
  faBox,
  faCircleQuestion,
  faComment,
  faComputer,
  faEarth,
  faEarthAfrica,
  faEarthAmerica,
  faGamepad,
  faHeart,
  faMagnifyingGlass,
  faShirt,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import jumialogo from "../../images/Jumia-Logo.png";
import { NavDropdown } from "react-bootstrap";
import "./header.css";
// import { useHistory } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { langContext } from "../../contexts/langContext";
const Header = () => {
  const [cartCount, setcartCount] = useState(0);
  useEffect(() => {
    var myCartCount = 0;
    for (var i = 0; i < localStorage.length; i++) {
      myCartCount =
        myCartCount + parseInt(localStorage.getItem(localStorage.key(i)));
      // console.log(myCartCount);
    }
    setcartCount(myCartCount);
  }, [localStorage.length]);
  const his = useHistory();
  const { lang, setlang } = useContext(langContext);
  return (
    <div
      className="header-main"
      style={{
        position: "sticky",
        top: "0px",
        zIndex: "10",
      }}
    >
      <div className="lang-header" style={{ backgroundColor: "whitesmoke" }}>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "16px",
            marginLeft: "10px",
          }}
          disabled={lang == "ar"}
          onClick={() => {
            setlang("ar");
          }}
        >
          Ar{" "}
        </button>
        <button
          style={{
            border: "none",
            backgroundColor: "transparent",
            fontSize: "16px",
          }}
          disabled={lang == "en"}
          onClick={() => {
            setlang("en");
          }}
        >
          En{"   "}
        </button>
        <button
          style={{ border: "none", backgroundColor: "transparent" }}
          onClick={() => {
            lang == "ar" ? setlang("en") : setlang("ar");
          }}
        >
          <FontAwesomeIcon
            color="orange"
            icon={lang == "en" ? faEarthAmerica : faEarthAfrica}
            style={{ marginLeft: "10px" }}
          />
        </button>
      </div>
      <div style={{}}>
        <nav
          className="navbar navbar-expand-lg  bg-white d-flex justify-content-center mb-3"
          style={{
            height: "75px",
            backgroundColor: "white",
            alignContent: "center",
          }}
        >
          <div
            className="container-fluid nav-container jumia-container"
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            {/* <button
              style={{ border: "none", backgroundColor: "transparent" }}
              className="navbar-brand"
              onClick={() => his.push(`/loream`)}
            > */}
            {/* <img
                src={jumialogo}
                alt="jumia Svg"
                height={"80px"}
                className="jumialogo"
              /> */}
            {/* </button> */}
            <Link to="/loream" className="nav-link logoHolder">
              <img
                src={jumialogo}
                alt="jumia Svg"
                height={"80px"}
                className="jumialogo"
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={faBars} />
            </button>

            <form
              className="d-flex search "
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                // !his.location.pathname.includes("search")
                //   ? e.preventDefault()
                //   : console.log("no default");
                if (document.getElementById("searchInput").value) {
                  his.push(
                    `/search=${document.getElementById("searchInput").value}`
                  );
                } else {
                  alert("write product name to search");
                }
              }}
            >
              <div className="d-flex flex-row border border-1 border-Secondary flex-grow-1 mx-2">
                <input
                  id="searchInput"
                  className="search-input m-2 border-0 flex-grow-1"
                  type="text"
                  placeholder={
                    lang == "en"
                      ? "Search products, brands and categories"
                      : " البحث عن منتجات, ماركات, أو أقسام"
                  }
                  aria-label="Search"
                  style={{
                    width: "32vw",
                    borderColor: "#c7c7cd",
                    borderRadius: "8px",
                  }}
                />
                <div className="my-auto mx-2">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    size="lg"
                    color="grey"
                  />
                </div>
              </div>
              <button
                className="btn search-button text-white"
                type="submit"
                style={{
                  fontWeight: "600",
                  boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
                }}
              >
                {lang == "en" ? "Search" : "ابحث"}
              </button>
            </form>
            <div
              className="collapse navbar-collapse flex-grow-0"
              // id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link nav-main dropdown-toggle text-dark"
                    href="#"
                    id="AccountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} color="black" size="2x" />
                    <span
                      style={
                        lang == "en"
                          ? { marginLeft: "15px" }
                          : { marginRight: "15px" }
                      }
                    >
                      {lang == "en" ? "Account" : "الحساب"}
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="AccountDropdown"
                  >
                    <li className="d-flex align-items-center mt-2">
                      <button className="sign btn search-button  text-white mx-auto w-75">
                        {lang == "en" ? "Sign In" : "تسجيل الدخول"}
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faUser} color="black" />
                        <span style={{ padding: "5px" }}>
                          {lang == "en" ? "My Account" : "حسابي"}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faBox} color="black" />
                        <span style={{ padding: "5px" }}>
                          {" "}
                          {lang == "en" ? "Orders" : "الطلبات"}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-heart"></i>
                        <FontAwesomeIcon icon={faHeart} color="red" />
                        <span style={{ padding: "5px" }}>
                          {lang == "en" ? "Saved Items" : "المنتجات المحفوطة"}
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link nav-main dropdown-toggle text-dark"
                    href="#"
                    id="HelpDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      color="black"
                      size="2x"
                    />
                    <span
                      style={
                        lang == "en"
                          ? { marginLeft: "15px" }
                          : { marginRight: "15px" }
                      }
                    >
                      {lang == "en" ? "Help" : "المساعدة"}
                    </span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="HelpDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en" ? "Help Center" : "مركز المساعدة"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en"
                          ? "Place & Track Order"
                          : "المساعدة في طلبي"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en" ? "Order Cancellation" : "الغاء طلبي"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en"
                          ? "Returns & Refounds"
                          : "اللإرجاع والاسترداد"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en" ? "Paymant & Jumia Account" : "طرق الدفع"}
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <a className="btn search-button  text-white mx-auto w-75">
                        <FontAwesomeIcon
                          icon={faComment}
                          color="white"
                          size="lg"
                        />
                        <span
                          style={
                            lang == "en"
                              ? { marginLeft: "15px" }
                              : { marginRight: "15px" }
                          }
                        >
                          {lang == "en" ? "LiveChat" : "تحدث معنا"}
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link nav-main active text-dark"
                    aria-current="page"
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      position: "relative",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      size="2x"
                      color="black"
                    />
                    <div
                      className="cart-count"
                      style={
                        cartCount != 0 && lang == "en"
                          ? { visibility: "visible", left: "30%", right: "0%" }
                          : cartCount != 0 && lang == "ar"
                          ? { visibility: "visible", left: "0%", right: "5%" }
                          : cartCount == 0
                          ? { visibility: "hidden" }
                          : {}
                      }
                    >
                      {cartCount}
                    </div>
                    <span
                      style={
                        lang == "en"
                          ? {
                              marginLeft: "15px",
                              display: "flex",
                              flexWrap: "nowrap",
                            }
                          : {
                              marginRight: "15px",
                              display: "flex",
                              flexWrap: "nowrap",
                            }
                      }
                    >
                      {lang == "en" ? "Cart" : "السلة"}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* drop down menu */}
            <div
              className="collapse navbar-collapse-sm d-lg-none dropmenu"
              id="navbarSupportedContent"
            >
              <ul
                className=""
                style={{
                  display: "flex",
                  listStyle: "none",
                  justifyContent: "center",
                  alignItems: "center",
                  transitionTimingFunction: "ease-out",
                }}
              >
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="AccountDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon icon={faUser} color="white" size="2x" />
                    <span
                      style={
                        lang == "en"
                          ? { marginLeft: "15px" }
                          : { marginRight: "15px" }
                      }
                    >
                      {lang == "en" ? "Account" : "الحساب"}
                    </span>
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="AccountDropdown"
                  >
                    <li className="d-flex align-items-center mt-2">
                      <button className="sign btn search-button  text-white mx-auto w-75">
                        {lang == "en" ? "Sign In" : "تسجيل الدخول"}
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faUser} color="black" />
                        <span> {lang == "en" ? "My Account" : "حسابي"}</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <FontAwesomeIcon icon={faBox} color="black" />
                        <span> {lang == "en" ? "Orders" : "الطلبات"}</span>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        <i className="fa-regular fa-heart"></i>
                        <FontAwesomeIcon icon={faHeart} color="red" />
                        <span>
                          {" "}
                          {lang == "en" ? "Saved Items" : "المنتجات المحفوطة"}
                        </span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown ">
                  <a
                    className="nav-link dropdown-toggle text-dark"
                    href="#"
                    id="HelpDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FontAwesomeIcon
                      icon={faCircleQuestion}
                      color="white"
                      size="2x"
                    />
                    <span
                      style={
                        lang == "en"
                          ? { marginLeft: "15px" }
                          : { marginRight: "15px" }
                      }
                    >
                      {lang == "en" ? "Help" : "المساعدة"}
                    </span>
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="HelpDropdown">
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en" ? "Help Center" : "مركز المساعدة"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en"
                          ? "Place & Track Order"
                          : "المساعدة في طلبي"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en" ? "Order Cancellation" : "الغاء طلبي"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en"
                          ? "Returns & Refounds"
                          : "اللإرجاع والاسترداد"}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        {lang == "en" ? "Paymant & Jumia Account" : "طرق الدفع"}
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <a className="btn search-button  text-white mx-auto w-75">
                        <FontAwesomeIcon
                          icon={faComment}
                          color="white"
                          size="lg"
                        />
                        <span>{lang == "en" ? "LiveChat" : "تحدث معنا"}</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active text-dark"
                    aria-current="page"
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      size="2x"
                      color="white"
                    />
                    <span
                      style={
                        lang == "en"
                          ? { marginLeft: "15px" }
                          : { marginRight: "15px" }
                      }
                    >
                      {lang == "en" ? "Cart" : "السلة"}
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <NavDropdown
              id="nav-dropdown"
              title={
                <div className="d-flex flex-column" style={{ color: "orange" }}>
                  <FontAwesomeIcon
                    className="caticon"
                    icon={faBarsStaggered}
                    color="black"
                    size="2x"
                  />
                  <span className="cattitle">
                    {lang == "en" ? "Categories" : "الأقسام"}
                  </span>
                </div>
              }
              className="catdrop"
              menuVariant="light"
            >
              <NavDropdown.Item
                href="Supermarket"
                style={{ textAlign: "initial" }}
              >
                <FontAwesomeIcon icon={faAppleWhole} />{" "}
                <span>{lang == "en" ? "Supermarket" : "سوبر ماركت"}</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="Fashion" style={{ textAlign: "initial" }}>
                <FontAwesomeIcon icon={faShirt} />{" "}
                <span>{lang == "en" ? "Fashion" : "أزياء"}</span>
              </NavDropdown.Item>
              <NavDropdown.Item
                href="Electronics"
                style={{ textAlign: "initial" }}
              >
                <FontAwesomeIcon icon={faComputer} />{" "}
                <span>{lang == "en" ? "Electronics" : "إلكترونيات"}</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="Gaming" style={{ textAlign: "initial" }}>
                <FontAwesomeIcon icon={faGamepad} />{" "}
                <span>{lang == "en" ? "Gaming" : "ألعاب"}</span>
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
