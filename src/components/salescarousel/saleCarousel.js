import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import loadingImage from "../../images/loading.png";
import "./salesCarousel.css";

const SaleCarousel = () => {
  const [loaded, setloaded] = useState(false);
  return (
    <div
      className="navigation-and-sales"
      style={
        {
          // maxHeight: "384px", maxWidth: "715px"
        }
      }
    >
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          maxHeight: "382px",
          maxWidth: "712px",
        }}
        id="salesCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="true"
      >
        <div className="carousel-indicators" style={{ bottom: "-20px" }}>
          <button
            style={{
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "4px",
            }}
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            style={{
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "4px",
            }}
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            style={{
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "4px",
            }}
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            style={{
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "4px",
            }}
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            style={{
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "4px",
            }}
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            style={{
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "4px",
            }}
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            style={{
              borderRadius: "50%",
              width: "8px",
              height: "8px",
              margin: "4px",
            }}
            type="button"
            data-bs-target="#salesCarousel"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
        </div>
        <div className="carousel-inner" style={{ borderRadius: "4px" }}>
          <div className="carousel-item active">
            <Link to="/loream">
              <img
                onLoad={() => {
                  setloaded(true);
                }}
                src={
                  loaded
                    ? "https://eg.jumia.is/cms/29-22/UNs/Tv-Gaming-Electronics/GIF/Slider-Desktop-EN_.gif"
                    : loadingImage
                }
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/loream">
              <img
                onLoad={() => {
                  setloaded(true);
                }}
                src={
                  loaded
                    ? "https://eg.jumia.is/cms/29-22/UNs/Floats/Slider-Desktop-EN_-(1).jpg"
                    : loadingImage
                }
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/loream">
              <img
                onLoad={() => {
                  setloaded(true);
                }}
                src={
                  loaded
                    ? "https://eg.jumia.is/cms/29-22/UNs/Hair-Care/Slider-Desktop-EN_.jpg"
                    : loadingImage
                }
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="loream">
              <img
                onLoad={() => {
                  setloaded(true);
                }}
                src={
                  loaded
                    ? "https://eg.jumia.is/cms/29-22/UNs/Pet-Supplies/Slider-Desktop-EN_-(2).jpg"
                    : loadingImage
                }
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/loream">
              <img
                onLoad={() => {
                  setloaded(true);
                }}
                src={
                  loaded
                    ? "https://eg.jumia.is/cms/29-22/UNs-Deals/Hair-Care/Slider/Braun-Slider-Desktop-EN__copy_6.jpg"
                    : loadingImage
                }
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/loream">
              <img
                onLoad={() => {
                  setloaded(true);
                }}
                src={
                  loaded
                    ? "https://eg.jumia.is/cms/ja-22/games/2.gif"
                    : loadingImage
                }
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/loream">
              onLoad=
              {() => {
                setloaded(true);
              }}
              <img
                src={
                  loaded
                    ? "https://eg.jumia.is/cms/27-22/Banks/ValU/Slider-Desktop-EN__copy_2-(3).jpg"
                    : loadingImage
                }
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#salesCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#salesCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default SaleCarousel;
