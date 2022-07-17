/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleAlt,
  faAppleWhole,
  faBars,
  faBarsStaggered,
  faBox,
  faCircleQuestion,
  faCoffee,
  faComment,
  faComputer,
  faGamepad,
  faHeart,
  faMagnifyingGlass,
  faShirt,
  faShoppingBasket,
  faShoppingCart,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import jumialogo from "../../images/Jumia-Logo.png";
import { NavDropdown } from "react-bootstrap";
import "./header.css";

const Header = () => {
  return (
    <div style={{ marginBottom: "90px" }}>
      <nav
        class="navbar navbar-expand-lg  bg-white d-flex justify-content-center mb-3"
        style={{
          height: "75px",
          position: "fixed",
          backgroundColor: "white",
          width: "100vw",
          alignContent: "center",
        }}
      >
        <div
          class="container-fluid nav-container jumia-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a class="navbar-brand" href="#">
            <img
              src={jumialogo}
              alt="jumia Svg"
              height={"90px"}
              className="jumialogo"
            />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>

          <form class="d-flex search " role="search">
            <div class="d-flex flex-row border border-1 border-Secondary flex-grow-1 mx-2">
              <input
                class="search-input m-2 border-0 flex-grow-1"
                type="text"
                placeholder="Search products, brands and categories"
                aria-label="Search"
                style={{
                  width: "32vw",
                  borderColor: "#c7c7cd",
                  borderRadius: "8px",
                }}
              />
              <div class="my-auto mx-2">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  size="lg"
                  color="grey"
                />
              </div>
            </div>
            <button
              class="btn search-button text-white"
              type="submit"
              style={{
                fontWeight: "600",
                boxShadow: "0 4px 8px 0 rgb(0 0 0 / 20%)",
              }}
            >
              Search
            </button>
          </form>
          <div
            class="collapse navbar-collapse flex-grow-0"
            // id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a
                  class="nav-link nav-main dropdown-toggle text-dark"
                  href="#"
                  id="AccountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} color="black" size="2x" />
                  <span style={{ marginLeft: "15px" }}>Account</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="AccountDropdown">
                  <li class="d-flex align-items-center mt-2">
                    <button className="sign btn search-button  text-white mx-auto w-75">
                      Sign In
                    </button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <FontAwesomeIcon icon={faUser} color="black" />
                      <span> My Account</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <FontAwesomeIcon icon={faBox} color="black" />
                      <span> Orders</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa-regular fa-heart"></i>
                      <FontAwesomeIcon icon={faHeart} color="red" />
                      <span> Saved Items</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown ">
                <a
                  class="nav-link nav-main dropdown-toggle text-dark"
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
                  <span style={{ marginLeft: "15px" }}>Help</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="HelpDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Place & Track Order
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Order Cancellation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Returns & Refounds
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Paymant & Jumia Account
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <a class="btn search-button  text-white mx-auto w-75">
                      <FontAwesomeIcon
                        icon={faComment}
                        color="white"
                        size="lg"
                      />
                      <span style={{ marginLeft: "15px" }}>LiveChat</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link nav-main active text-dark"
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
                    color="black"
                  />
                  <span
                    style={{
                      marginLeft: "15px",
                      display: "flex",
                      flexWrap: "nowrap",
                    }}
                  >
                    Cart
                  </span>
                </a>
              </li>
            </ul>
          </div>
          {/* drop down menu */}
          <div
            class="collapse navbar-collapse-sm d-lg-none dropmenu"
            id="navbarSupportedContent"
          >
            <ul
              class=""
              style={{
                display: "flex",
                listStyle: "none",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
                transitionTimingFunction: "ease-out",
              }}
            >
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle text-dark"
                  href="#"
                  id="AccountDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <FontAwesomeIcon icon={faUser} color="white" size="2x" />
                  <span style={{ marginLeft: "15px" }}>Account</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="AccountDropdown">
                  <li class="d-flex align-items-center mt-2">
                    <button className="sign btn search-button  text-white mx-auto w-75">
                      Sign In
                    </button>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <FontAwesomeIcon icon={faUser} color="black" />
                      <span> My Account</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <FontAwesomeIcon icon={faBox} color="black" />
                      <span> Orders</span>
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <i class="fa-regular fa-heart"></i>
                      <FontAwesomeIcon icon={faHeart} color="red" />
                      <span> Saved Items</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle text-dark"
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
                  <span style={{ marginLeft: "15px" }}>Help</span>
                </a>
                <ul class="dropdown-menu" aria-labelledby="HelpDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Place & Track Order
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Order Cancellation
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Returns & Refounds
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Paymant & Jumia Account
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li class="d-flex align-items-center mb-2">
                    <a class="btn search-button  text-white mx-auto w-75">
                      <FontAwesomeIcon
                        icon={faComment}
                        color="white"
                        size="lg"
                      />
                      <span>LiveChat</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active text-dark"
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
                  <span style={{ marginLeft: "15px" }}>Cart</span>
                </a>
              </li>
            </ul>
          </div>
          <NavDropdown
            id="nav-dropdown"
            title={
              <div class="d-flex flex-column" style={{ color: "orange" }}>
                <FontAwesomeIcon
                  className="caticon"
                  icon={faBarsStaggered}
                  color="black"
                  size="2x"
                />
                <span className="cattitle">Categories</span>
              </div>
            }
            className="catdrop"
            menuVariant="light"
          >
            <NavDropdown.Item href="Supermarket">
              <FontAwesomeIcon icon={faAppleWhole} /> <span>Supermarket</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="Fashion">
              <FontAwesomeIcon icon={faShirt} /> <span>Fashion</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="Electronics">
              <FontAwesomeIcon icon={faComputer} 
              onClick={() => {this.props.history.push("/category");}} /><span>Electronics</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="Gaming">
              <FontAwesomeIcon icon={faGamepad} /> <span>Gaming</span>
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </nav>
    </div>
  );
};

export default Header;
