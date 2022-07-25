/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect, useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { Link } from "react-router-dom";
import SaleCarousel from "../../components/salescarousel/saleCarousel";
import Snapscroll from "../../components/snapscroll/snapscroll";
import { firestore } from "../../firebase";
import "./home.css";
import loadingImage from "../../images/loading.png";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
import Homecatbar from "../../components/homecatbar/homecatbar";
import flashSalesImage from "../../images/flashsales.png";
import jumiaLogo from "../../images/Jumia-Logo.png";
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
  limit,
} from "@firebase/firestore";
import ProductSnapscroll from "../../components/products snapscroll/productsSnapscroll";
const Home = () => {
  //initializer
  const { lang, setlang } = useContext(langContext);
  //last products init
  const [lastProducts, setlastProducts] = useState([]);
  const lastProductsRef = useRef();
  const lastProductsInviewPort = useInViewport(lastProductsRef);
  const [lastProductsLoading, setlastProductsLoading] = useState(true);
  const lastProductsIDS = [];
  //
  //best offers initializer
  const [bestOfferProducts, setbestOfferProducts] = useState([]);
  const bestOffersProductsRef = useRef();
  const bestOffersProductsInviewPort = useInViewport(bestOffersProductsRef);
  const [bestOffersProductsLoading, setbestOffersProductsLoading] =
    useState(true);
  const bestProductOffersIDS = [];
  //
  //supermarker initializer
  const [supermarketProducts, setsupermarketProducts] = useState([]);
  const supermarketProductsRef = useRef();
  const supermarketProductsRefInViewPort = useInViewport(
    supermarketProductsRef
  );
  const [superMarketProductsLoading, setsuperMarketProductsLoading] =
    useState(true);
  const supermarketProductIDS = [];
  //
  //fashion initializer
  const [fashionProducts, setfashionProducts] = useState([]);
  const fashionProductsRef = useRef();
  const fashionProductsInViewPort = useInViewport(fashionProductsRef);
  const [fashionProductsLoading, setfashionProductsLoading] = useState(true);
  const fashionProductsIDS = [];
  //
  //electronics initializer
  const [electronicProducts, setelectronicProducts] = useState([]);
  const electronicProductsRef = useRef();
  const electronicProductsInViewPort = useInViewport(electronicProductsRef);
  const [electronicProductsLoading, setelectronicProductsLoading] =
    useState(true);
  const electronicProductsIDS = [];
  //
  //Gaming initializer
  const [gamingProducts, setgamingProducts] = useState([]);
  const gamingProductsRef = useRef();
  const gamingProductsInViewPort = useInViewport(gamingProductsRef);
  const [gamingProductsLoading, setelgamingProductsLoading] = useState(true);
  const gamingProductsIDS = [];
  //

  const [loaded, setloaded] = useState(false);
  const [snapscrollData, setsnapscrollData] = useState([
    "https://eg.jumia.is/cms/23-22/Thumbnails/EN/Flash_sales_EN.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/EN/Free_shipping_EN.png",
    "https://eg.jumia.is/cms/ja-22/quicklinks/EN/games_(General)_en.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/EN/1_day_offers_EN.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/EN/JPAy_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/EN/Orange_Points_EN.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/EN/Food_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/EN/Global_EN_copy.png",
    "https://eg.jumia.is/cms/29-22/Thumbnail/TVs,_Gaming_&_Electronics-3.png",
    "https://eg.jumia.is/cms/29-22/Thumbnail/Floats,_Pools_&Water_Fun-3.png",
    "https://eg.jumia.is/cms/29-22/Thumbnail/Hair_Care-3.png",
    "https://eg.jumia.is/cms/29-22/Thumbnail/Pet_Supplies-3.png",
  ]);
  const placeholderImages = [
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
    { imgurl: loadingImage },
  ];
  //Rendering
  const prdIDS = [];
  useEffect(() => {
    //last added products Render
    if (lastProductsInviewPort.inViewport && lastProducts.length == 0) {
      //console.log("last function achieved");
      getProducts(
        lastProducts,
        setlastProducts,
        setlastProductsLoading,
        lastProductsIDS,
        10,
        "date"
      );
    }
    //best offers products Render
    if (
      bestOffersProductsInviewPort.inViewport &&
      bestOfferProducts.length == 0
    ) {
      //console.log("best offers function achieved");
      getProducts(
        bestOfferProducts,
        setbestOfferProducts,
        setbestOffersProductsLoading,
        bestProductOffersIDS,
        10,
        "offer"
      );
    }
    //supermarket products Render
    if (
      supermarketProductsRefInViewPort.inViewport &&
      supermarketProducts.length == 0
    ) {
      //console.log("best offers function achieved");
      getProducts(
        supermarketProducts,
        setsupermarketProducts,
        setsuperMarketProductsLoading,
        supermarketProductIDS,
        10,
        "category",
        "food",
        "food"
      );
    }
    //fashion products Render
    if (fashionProductsInViewPort.inViewport && fashionProducts.length == 0) {
      //console.log("best offers function achieved");
      getProducts(
        fashionProducts,
        setfashionProducts,
        setfashionProductsLoading,
        fashionProductsIDS,
        10,
        "category",
        "fashion",
        "fasion"
      );
    }
    //electronics products Render
    if (
      electronicProductsInViewPort.inViewport &&
      electronicProducts.length == 0
    ) {
      //console.log("best offers function achieved");
      getProducts(
        electronicProducts,
        setelectronicProducts,
        setelectronicProductsLoading,
        electronicProductsIDS,
        10,
        "category",
        "electronics",
        "electronics"
      );
    }
    //gaming products Render
    if (gamingProductsInViewPort.inViewport && gamingProducts.length == 0) {
      //console.log("best offers function achieved");
      getProducts(
        gamingProducts,
        setgamingProducts,
        setelgamingProductsLoading,
        gamingProductsIDS,
        10,
        "category",
        "gamming",
        "gamming"
      );
    }
    // //console.log(lastProductsInviewPort.inViewport);
  }, [
    lastProductsInviewPort.inViewport,
    bestOffersProductsInviewPort.inViewport,
    supermarketProductsRefInViewPort.inViewport,
    fashionProductsInViewPort.inViewport,
    electronicProductsInViewPort.inViewport,
    gamingProductsInViewPort.inViewport,
  ]);
  // //// GET PRODUCTS FUNCTION //// //
  const getProducts = (
    products = [],
    setproducts,
    setLoading,
    productsIDS = [],
    limitation = 0,
    orderby = "",
    startat = "",
    endat = ""
  ) => {
    setproducts([]);
    const colRef = collection(firestore, "products");
    var catQuery =
      startat && endat
        ? query(
            colRef,
            orderBy(orderby),
            startAt(startat.toLowerCase()),
            endAt(endat.toLowerCase() + "\uf8ff"),
            limit(limitation)
          )
        : query(colRef, orderBy(orderby, "desc"), limit(limitation));
    //search by cat
    const myPrds = [];
    getDocs(catQuery)
      .then((q) => {
        if (!q.empty) {
          q.forEach((res) => {
            if (
              res.exists() &&
              !productsIDS.includes(res.id) &&
              products.length < 10
            ) {
              myPrds.push({ ...res.data(), productID: res.id });
              // setproducts((products) => [
              //   ...products,
              //   { ...res.data(), productID: res.id },
              // ]); Note Dont Use Causing render issue
              setproducts(myPrds);
              console.log(lastProducts);
              productsIDS.push(res.id);
            }
          });
          setLoading(false);
        } else {
          alert("tag is empty");
        }
      })
      .catch((err) => {
        //console.log(err);
      });
  };

  /////// Return //////
  return (
    <div
      className="home-page-parent"
      style={{
        padding: ".5rem",
        paddingTop: "0",
        width: "85vw",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="home-navigation" style={{ height: "100%" }}>
        <Homecatbar></Homecatbar>
        <SaleCarousel></SaleCarousel>
        <div
          className="side-nav-sales"
          style={
            lang == "en"
              ? {
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "15px",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  marginRight: "15px",
                }
          }
        >
          <Link to="/loream">
            <img
              key={"1"}
              onLoad={() => setloaded(true)}
              style={{
                marginBottom: "14px",
                borderRadius: "4px",
                maxWidth: "220px",
              }}
              src={
                loaded
                  ? "https://eg.jumia.is/cms/27-22/Teasers/Artboard_1_copy.jpg"
                  : loadingImage
              }
              alt=""
            />
          </Link>
          <Link to="/loream">
            <img
              key={"2"}
              style={{ borderRadius: "4px", maxWidth: "220px" }}
              onLoad={() => setloaded(true)}
              src={
                loaded
                  ? "https://eg.jumia.is/cms/27-22/Teasers/Artboard_1-(3).jpg"
                  : loadingImage
              }
              alt=""
            />
          </Link>
        </div>
      </div>
      {/* <Loream></Loream> */}
      <div
        className="head-snap-parent"
        style={{
          marginTop: "1rem",
          marginBottom: ".5rem",
          padding: ".5rem",
          backgroundColor: "white",
          maxWidth: "100%",
          borderRadius: "4px",
        }}
      >
        <Snapscroll images={snapscrollData}></Snapscroll>
      </div>
      <div
        className="last-products-parent"
        style={{
          padding: ".5rem",
          paddingBottom: "0",
          backgroundColor: "white",
          marginTop: "1rem",
          borderRadius: "4px",
        }}
      >
        <div
          className="home-new-products"
          style={{
            marginBottom: "10px",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          {lang == "en" ? "Recently Added" : "منتجات حديثة"}
        </div>
        <ProductSnapscroll
          refrence={lastProductsRef}
          products={!lastProductsLoading ? lastProducts : placeholderImages}
        ></ProductSnapscroll>
      </div>
      <div
        className="home-free-shipping"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem",
          backgroundColor: "white",
          marginTop: "1rem",
          borderRadius: "4px",
        }}
      >
        <Link to="/loream">
          <img
            className="home-free-shipping-image"
            style={{ borderRadius: "4px", maxWidth: "100%" }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/ja-22/intiatives/sub-initiatives/freeshipping/new-theme/1152x252_-EN-(19).jpg"
                : "https://eg.jumia.is/cms/ja-22/intiatives/sub-initiatives/freeshipping/new-theme/1152x252_AR-(38).jpg"
            }
            alt=""
          />
        </Link>
      </div>
      <div
        className="home-bestoffer-products"
        style={{
          fontSize: "20px",
          fontWeight: "500",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "red",
          color: "white",
          marginTop: "1rem",
          padding: ".5rem",
        }}
      >
        <img src={flashSalesImage} style={{ width: "75px" }} alt="" />
        {lang == "en" ? "Best Offers EVERY DAY!" : "  أفضل العروض كل يوم!"}
      </div>
      <div
        className="bestoffers-products-parent"
        style={{
          padding: ".5rem",
          paddingBottom: "0",
          backgroundColor: "white",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <ProductSnapscroll
          refrence={bestOffersProductsRef}
          products={
            !bestOffersProductsLoading ? bestOfferProducts : placeholderImages
          }
        ></ProductSnapscroll>
      </div>
      <div
        className="amazingdeals-products"
        style={{
          fontSize: "20px",
          fontWeight: "500",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#FEE2CC",
          color: "black",
          marginTop: "1rem",
          padding: ".5rem",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        {lang == "en" ? "Amazing Deals!" : "أقوى العروض!"}
      </div>
      <div
        className="amazingdeals-parent-one"
        style={{
          padding: ".5rem",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <Link to="/loream">
          <img
            className="amazingdeals-parent-image"
            style={{
              marginRight: ".25rem",
              marginLeft: ".25rem",
              borderRadius: "4px",
              maxWidth: "100%",
            }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/29-22/UNs-Deals/Tv-Gaming-Electronics/Floor/Xiaomi-Floor-Desktop_-EN__copy_4.jpg"
                : "https://eg.jumia.is/cms/29-22/UNs-Deals/Tv-Gaming-Electronics/Floor/Xiaomi-Floor_Desktop_-AR__copy_4.jpg"
            }
            alt=""
          />
        </Link>
        <Link to="/loream">
          <img
            className="amazingdeals-parent-image"
            style={{
              marginLeft: ".25rem",
              marginRight: ".25rem",
              borderRadius: "4px",
              maxWidth: "100%",
            }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/29-22/Deals-20-7/Tv/Skyline_-Floor-Desktop_-EN__copy_4.jpg"
                : "https://eg.jumia.is/cms/29-22/Deals-20-7/Tv/Skyline_-Floor_Desktop_-AR__copy_4.jpg"
            }
            alt=""
          />
        </Link>
      </div>
      {/* two */}
      <div
        className="amazingdeals-parent-two"
        style={{
          marginTop: "1rem",
          padding: ".5rem",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "4px",
        }}
      >
        <Link to="/loream">
          <img
            className="amazingdeals-parent-image"
            style={{
              marginLeft: ".25rem",
              marginRight: ".25rem",
              borderRadius: "4px",
              maxWidth: "100%",
            }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/29-22/Deals-20-7/Hair-Care/Water-Floor-Desktop_-EN__copy_4.jpg"
                : "https://eg.jumia.is/cms/29-22/Deals-20-7/Hair-Care/Water-Floor_Desktop_-AR__copy_4.jpg"
            }
            alt=""
          />
        </Link>
        <Link to="/loream">
          <img
            className="amazingdeals-parent-image"
            style={{
              marginLeft: ".25rem",
              marginRight: ".25rem",
              borderRadius: "4px",
              maxWidth: "100%",
            }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/29-22/JE/Desert-Floor-Desktop_-EN__copy_4.jpg"
                : "https://eg.jumia.is/cms/29-22/JE/Samsung-Floor_Desktop_-AR__copy_4.jpg"
            }
            alt=""
          />
        </Link>
      </div>
      {/* super market */}
      <div
        className="home-supermarket-products"
        style={{
          fontSize: "20px",
          fontWeight: "400",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#FEE2CC",
          marginTop: "1rem",
          padding: ".5rem",
          textTransform: "uppercase",
        }}
      >
        {lang == "en" ? (
          <span>
            <span style={{ fontWeight: "500" }}>Supermarket | </span> Up To 20%
            Off!
          </span>
        ) : (
          <span>
            <span style={{ fontWeight: "500" }}>أقوى العروض | </span>{" "}
            <span>خصم حتى 20%</span>
          </span>
        )}
      </div>
      <div
        className="supermarket-products-parent"
        style={{
          padding: ".5rem",
          paddingBottom: "0",
          backgroundColor: "white",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <ProductSnapscroll
          refrence={supermarketProductsRef}
          products={
            !superMarketProductsLoading
              ? supermarketProducts
              : placeholderImages
          }
        ></ProductSnapscroll>
      </div>
      <div
        className="amazingdeals-parent-one"
        style={{
          marginTop: "1rem",
          padding: ".5rem",
          backgroundColor: "white",
          display: "flex",
          borderRadius: "4px",
        }}
      >
        <Link to="/loream">
          <img
            className="amazingdeals-parent-image"
            style={{
              marginRight: ".25rem",
              marginLeft: ".25rem",
              borderRadius: "4px",
              maxWidth: "100%",
            }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/29-22/Deals-20-7/Beachwear/women/Women's-Swimsuits--Floor-Desktop--EN--copy-4.png"
                : "https://eg.jumia.is/cms/29-22/Deals-20-7/Beachwear/women/Women's-Swimsuits--Floor-Desktop--AR--copy-4.png"
            }
            alt=""
          />
        </Link>
        <Link to="/loream">
          <img
            className="amazingdeals-parent-image"
            style={{
              marginLeft: ".25rem",
              marginRight: ".25rem",
              borderRadius: "4px",
              maxWidth: "100%",
            }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/29-22/Deals-20-7/Beachwear/men/New/men_s_Swimsuits_-Floor-Desktop_-EN__copy_4.jpg"
                : "https://eg.jumia.is/cms/29-22/Deals-20-7/Beachwear/men/New/men_s_Swimsuits-Floor_Desktop_-AR__copy_4.jpg"
            }
            alt=""
          />
        </Link>
      </div>
      {/* Fashion */}
      <div
        className="home-fashion-products"
        style={{
          fontSize: "20px",
          fontWeight: "400",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#FEE2CC",
          marginTop: "1rem",
          padding: ".5rem",
          textTransform: "uppercase",
        }}
      >
        {lang == "en" ? (
          <span>
            <span style={{ fontWeight: "500" }}>Fashion | </span>{" "}
            {"Up To 50% Off!"}
          </span>
        ) : (
          <span>
            <span style={{ fontWeight: "500" }}>أقوى العروض | </span>{" "}
            <span>خصم حتى 50%</span>
          </span>
        )}
      </div>
      <div
        className="fashion-products-parent"
        style={{
          padding: ".5rem",
          paddingBottom: "0",
          backgroundColor: "white",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <ProductSnapscroll
          refrence={fashionProductsRef}
          products={
            !fashionProductsLoading ? fashionProducts : placeholderImages
          }
        ></ProductSnapscroll>
      </div>
      <div
        className="home-fashion-products"
        style={{
          fontSize: "20px",
          fontWeight: "400",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#FEE2CC",
          marginTop: "1rem",
          padding: ".5rem",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        {lang == "eng"
          ? "NEW OFFERS EVERYDAY ON EVERYTHING"
          : "عروض كل يوم، على كل حاجة"}
      </div>
      {/* home cats */}
      <div
        className="home-cats-parent"
        style={{
          padding: ".5rem",
          paddingBottom: ".5rem",
          backgroundColor: "white",
          borderRadius: "0 0 4px 4px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Link style={{ textDecoration: "none" }}>
          <div
            className="home-cats-card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: ".5rem",
            }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/-General/Artboard_1_copy.png"
              alt=""
              srcset=""
            />
            <div style={{ textAlign: "center" }}>SuperMarket</div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <div
            className="home-cats-card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: ".5rem",
            }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/-General/Artboard_1_copy_11.png"
              alt=""
              srcset=""
            />
            <div style={{ textAlign: "center" }}>Men's Fashion</div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <div
            className="home-cats-card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: ".5rem",
            }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/-General/Artboard_1_copy_10.png"
              alt=""
              srcset=""
            />
            <div style={{ textAlign: "center" }}>Women's Fashion</div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <div
            className="home-cats-card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: ".5rem",
            }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/-General/Artboard_1_copy_5.png"
              alt=""
              srcset=""
            />
            <div style={{ textAlign: "center" }}>Electronics</div>
          </div>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <div
            className="home-cats-card"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              paddingBottom: ".5rem",
            }}
          >
            <img
              style={{ maxWidth: "100%" }}
              src="https://eg.jumia.is/cms/JA-2022/UNs-Icons/-General/Artboard_1_copy_8.png"
              alt=""
              srcset=""
            />
            <div style={{ textAlign: "center" }}>Gaming</div>
          </div>
        </Link>
      </div>
      {/* electronics */}
      <div
        className="home-electronics-products"
        style={{
          fontSize: "20px",
          fontWeight: "400",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#FEE2CC",
          marginTop: "1rem",
          padding: ".5rem",
          textTransform: "uppercase",
        }}
      >
        {lang == "en" ? (
          <span>
            <span style={{ fontWeight: "500" }}>Electronics | </span>{" "}
            <span>Up To 20% Off!</span>
          </span>
        ) : (
          <span>
            <span style={{ fontWeight: "500" }}>أقوى العروض | </span>{" "}
            <span>خصم حتى 20%</span>
          </span>
        )}
      </div>
      <div
        className="home-electronics-parent"
        style={{
          padding: ".5rem",
          paddingBottom: "0",
          backgroundColor: "white",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <ProductSnapscroll
          refrence={electronicProductsRef}
          products={
            !electronicProductsLoading ? electronicProducts : placeholderImages
          }
        ></ProductSnapscroll>
      </div>
      <div
        className="home-elecs-sale"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".5rem",
          backgroundColor: "white",
          marginTop: "1rem",
          borderRadius: "4px",
        }}
      >
        <Link to="/loream">
          <img
            className="home-elecs-sale-image"
            style={{ borderRadius: "4px", maxWidth: "100%" }}
            src={
              lang == "en"
                ? "https://eg.jumia.is/cms/29-22/UNs/Tv-Gaming-Electronics/1152x252_-EN-(1).jpg"
                : "https://eg.jumia.is/cms/29-22/UNs/Tv-Gaming-Electronics/1152x252_AR-(1).jpg"
            }
            alt=""
          />
        </Link>
      </div>
      {/* gaming */}
      <div
        className="home-gaming-products"
        style={{
          fontSize: "20px",
          fontWeight: "400",
          borderRadius: "4px 4px 0 0",
          backgroundColor: "#FEE2CC",
          marginTop: "1rem",
          padding: ".5rem",
          textTransform: "uppercase",
        }}
      >
        {lang == "en" ? (
          <span>
            <span style={{ fontWeight: "500" }}>Gaming | </span>{" "}
            <span>Up To 63% Off!</span>
          </span>
        ) : (
          <span>
            <span style={{ fontWeight: "500" }}>أقوى العروض | </span>{" "}
            <span>خصم حتى 18%</span>
          </span>
        )}
      </div>
      <div
        className="home-gaming-parent"
        style={{
          padding: ".5rem",
          paddingBottom: "0",
          backgroundColor: "white",
          borderRadius: "0 0 4px 4px",
        }}
      >
        <ProductSnapscroll
          refrence={gamingProductsRef}
          products={!gamingProductsLoading ? gamingProducts : placeholderImages}
        ></ProductSnapscroll>
      </div>
      <div
        className="home-elecs-sale"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: "white",
          marginTop: "1rem",
          borderRadius: "4px",
        }}
      >
        <h5>
          {lang == "en"
            ? "Jumia Egypt – Biggest Online Shopping Website"
            : "جوميا مصر - أكبر موقع للتسوق عبر الإنترنت"}
        </h5>
        <span>
          {lang == "en"
            ? "Online shopping sites are now part of our everyday lives, because everyone enjoys the possibility of being able to buy whatever they need, whether it’s clothing or electronics, without having to move an inch. It’s even better when you can buy everything you’re looking for, all from the same store. This is what Jumia Egypt offers and that’s what makes it one of the best online shopping websites in Egypt."
            : "أصبحت مواقع التسوق عبر الإنترنت الآن جزء من حياتنا اليومية، لأن الجميع يتمتع بإمكانية شراء كل ما يحتاجه، سواء كانت ملابس أو إلكترونيات، دون الحاجة إلى الانتقال من المنزل. هذا ما تقدمه جوميا مصر، والأفضل من هذا أن جوميا مصر توفر لك امكانية العثور علي كل المنتجات التي تبحث عنها في متجر واحد. هذا ما يجعل جوميا أحد أفضل مواقع تسوق عبر الإنترنت في مصر."}
        </span>
        <br />
        <br />
        <h5>
          {lang == "en"
            ? "Enjoy Endless Deals & Discounts"
            : "استمتع بعروض وخصومات من جوميا لا تنتهي"}
        </h5>
        <span>
          {lang == "en"
            ? "Jumia is an easy platform to use when you’re online shopping for any type of products you’re looking for. Even if you’re just browsing, we assure you that you will find something you like in our catalog. Our clothing store provides you with over one million products and variations to choose from! You can shop for anything you need from women fashion to baby clothes and get the latest fashion. Jumia Egypt is one of the biggest online shopping sites because we always try to expand our catalog to provide any possible products or gadgets our customer could be searching to buy online!"
            : "جوميا هي موقع تسوق الكتروني ممتع وسهل الاستخدام عند الحاجة إلي شراء أي نوع من المنتجات والأجهزة. نؤكد لك أنك ستعثر على شيء يعجبك في الكتالوج الخاص بنا عند التصفح عبر الانترنت في جوميا مصر. نوفر لكم كتالوج ملابس اون لاين يحتوي علي أكثر من مليون منتج للاختيار من بينهم! يمكنك التسوق لأي شيء تحتاجه سواء كنت تبحث عن ملابس محجبات او ملابس الأطفال واستمتع بالحصول علي احدث الازياء في مصر. جوميا مصر هي واحدة من أكبر مواقع تسوق اون لاين لأننا نسعى دائمًا إلى توسيع الكتالوج الخاص بنا لتقديم جميع المنتجات والاجهزة التي يمكن لعملائنا أن يبحثوا عن شرائها عبر الإنترنت."}
        </span>
      </div>
      {/* Footer */}
      <div
        className="home-footer"
        style={{
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          backgroundColor: "#282828",
          marginTop: "1rem",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img style={{ width: "100px" }} src={jumiaLogo} alt="" />{" "}
        <span style={{ color: "white", marginBottom: "25px" }}>
          {lang == "en"
            ? "Are You New To jumia? SignUp Now"
            : "هل أنت جديد؟ سجل دخولك الان "}
        </span>
        <div className="email-form">
          <input
            type="text"
            placeholder="enter your email"
            style={{ borderRadius: "4px", borderColor: "transparent" }}
          />
          <input
            type="submit"
            value={"male"}
            style={{
              marginLeft: "1rem",
              marginRight: "1rem",
              borderRadius: "4px",
              borderColor: "white",
              background: "none",
              borderWidth: "1px",
              color: "white",
              width: "50px",
              height: "30px",
            }}
          />
          <input
            type="submit"
            value={"female"}
            style={{
              borderRadius: "4px",
              borderColor: "white",
              background: "none",
              borderWidth: "1px",
              color: "white",
              width: "60px",
              height: "30px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
