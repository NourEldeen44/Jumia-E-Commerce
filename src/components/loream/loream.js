/* eslint-disable no-unused-vars */
import React from "react";
import { useInViewport } from "react-in-viewport";
import { useRef, useState, useEffect } from "react";
import "./loream.css";
import Snapscroll from "../snapscroll/snapscroll";
import ProductSnapscroll from "../products snapscroll/productsSnapscroll";
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
import loadingImage from "../../images/loading.png";
import { firestore } from "../../firebase";
const Loream = () => {
  const divRef = useRef(null);
  const ref = useRef();
  const isInPortView = useInViewport(divRef);
  const scroll = () => {
    console.log();
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const [loading, setloading] = useState(true);
  const imagesData = [
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
    "https://eg.jumia.is/cms/23-22/Thumbnails/AR/Flash_sales_AR.png",
  ];
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
  const [products, setproducts] = useState([]);
  const productRef = useRef();
  const productSnapInPortView = useInViewport(productRef);
  const prdIDS = [];
  useEffect(() => {
    //category
    if (productSnapInPortView.inViewport && products.length == 0) {
      console.log("****111111111111111!!!!!!!");
      console.log(productSnapInPortView);
      getProducts();
    }
  }, [productSnapInPortView.inViewport]);
  const getProducts = () => {
    // if (prdIDS.length == 0) {
    setproducts([]);
    const colRef = collection(firestore, "products");
    var catQuery = query(
      colRef,
      orderBy("category"),
      startAt("food".toLowerCase()),
      endAt("food".toLowerCase() + "\uf8ff"),
      limit(10)
    );
    //search by cat
    getDocs(catQuery)
      .then((q) => {
        if (!q.empty) {
          q.forEach((res) => {
            if (res.exists() && !prdIDS.includes(res.id)) {
              setproducts((products) => [...products, res.data()]);
              console.log(products);
              prdIDS.push(res.id);
            }
          });
          setloading(false);
        } else {
          alert("tag is empty");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // }
  };
  console.log(isInPortView);
  return (
    <div ref={ref} id="sn">
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error tempore
        voluptates sequi magnam! Rem aperiam voluptatum beatae quod explicabo
        architecto incidunt nulla! Assumenda quibusdam debitis expedita impedit,
        distinctio veniam vel. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Tenetur non accusamus in sit, ratione obcaecati
        ducimus ipsam veritatis corporis, maiores aut omnis eaque veniam natus
        consectetur reiciendis doloribus illum molestias. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Nam animi minima adipisci ipsa
        repellat corrupti pariatur voluptatibus natus, expedita, maxime fugit
        ullam facere velit. Numquam voluptate cum quibusdam repudiandae
        repellendus! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Error tempore voluptates sequi magnam! Rem aperiam voluptatum beatae
        quod explicabo architecto incidunt nulla! Assumenda quibusdam debitis
        expedita impedit, distinctio veniam vel. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Tenetur non accusamus in sit, ratione
        obcaecati ducimus ipsam veritatis corporis, maiores aut omnis eaque
        veniam natus consectetur reiciendis doloribus illum molestias. Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Nam animi minima
        adipisci ipsa repellat corrupti pariatur voluptatibus natus, expedita,
        maxime fugit ullam facere velit. Numquam voluptate cum quibusdam
        repudiandae repellendus! Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Error tempore voluptates sequi magnam! Rem aperiam
        voluptatum beatae quod explicabo architecto incidunt nulla! Assumenda
        quibusdam debitis expedita impedit, distinctio veniam vel. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Tenetur non accusamus in
        sit, ratione obcaecati ducimus ipsam veritatis corporis, maiores aut
        omnis eaque veniam natus consectetur reiciendis doloribus illum
        molestias. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
        animi minima adipisci ipsa repellat corrupti pariatur voluptatibus
        natus, expedita, maxime fugit ullam facere velit. Numquam voluptate cum
        quibusdam repudiandae repellendus! Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Error tempore voluptates sequi magnam! Rem
        aperiam voluptatum beatae quod explicabo architecto incidunt nulla!
        Assumenda quibusdam debitis expedita impedit, distinctio veniam vel.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur non
        accusamus in sit, ratione obcaecati ducimus ipsam veritatis corporis,
        maiores aut omnis eaque veniam natus consectetur reiciendis doloribus
        illum molestias. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Nam animi minima adipisci ipsa repellat corrupti pariatur
        voluptatibus natus, expedita, maxime fugit ullam facere velit. Numquam
        voluptate cum quibusdam repudiandae repellendus! Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Error tempore voluptates sequi
        magnam! Rem aperiam voluptatum beatae quod explicabo architecto incidunt
        nulla! Assumenda quibusdam debitis expedita impedit, distinctio veniam
        vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
        non accusamus in sit, ratione obcaecati ducimus ipsam veritatis
        corporis, maiores aut omnis eaque veniam natus consectetur reiciendis
        doloribus illum molestias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam animi minima adipisci ipsa repellat corrupti
        pariatur voluptatibus natus, expedita, maxime fugit ullam facere velit.
        Numquam voluptate cum quibusdam repudiandae repellendus! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Error tempore voluptates
        sequi magnam! Rem aperiam voluptatum beatae quod explicabo architecto
        incidunt nulla! Assumenda quibusdam debitis expedita impedit, distinctio
        veniam vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tenetur non accusamus in sit, ratione obcaecati ducimus ipsam veritatis
        corporis, maiores aut omnis eaque veniam natus consectetur reiciendis
        doloribus illum molestias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam animi minima adipisci ipsa repellat corrupti
        pariatur voluptatibus natus, expedita, maxime fugit ullam facere velit.
        Numquam voluptate cum quibusdam repudiandae repellendus! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Error tempore voluptates
        sequi magnam! Rem aperiam voluptatum beatae quod explicabo architecto
        incidunt nulla! Assumenda quibusdam debitis expedita impedit, distinctio
        veniam vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tenetur non accusamus in sit, ratione obcaecati ducimus ipsam veritatis
        corporis, maiores aut omnis eaque veniam natus consectetur reiciendis
        doloribus illum molestias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam animi minima adipisci ipsa repellat corrupti
        pariatur voluptatibus natus, expedita, maxime fugit ullam facere velit.
        Numquam voluptate cum quibusdam repudiandae repellendus! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Error tempore voluptates
        sequi magnam! Rem aperiam voluptatum beatae quod explicabo architecto
        incidunt nulla! Assumenda quibusdam debitis expedita impedit, distinctio
        veniam vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tenetur non accusamus in sit, ratione obcaecati ducimus ipsam veritatis
        corporis, maiores aut omnis eaque veniam natus consectetur reiciendis
        doloribus illum molestias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam animi minima adipisci ipsa repellat corrupti
        pariatur voluptatibus natus, expedita, maxime fugit ullam facere velit.
        Numquam voluptate cum quibusdam repudiandae repellendus! Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Error tempore voluptates
        sequi magnam! Rem aperiam voluptatum beatae quod explicabo architecto
        incidunt nulla! Assumenda quibusdam debitis expedita impedit, distinctio
        veniam vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Tenetur non accusamus in sit, ratione obcaecati ducimus ipsam veritatis
        corporis, maiores aut omnis eaque veniam natus consectetur reiciendis
        doloribus illum molestias. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Nam animi minima adipisci ipsa repellat corrupti
        pariatur voluptatibus natus, expedita, maxime fugit ullam facere velit.
        Numquam voluptate cum quibusdam repudiandae repellendus!
      </div>
      {/* <button onClick={scroll}>click ti scroll</button>
      <div
        className="snap"
        id="snap"
        style={{
          width: "500px",
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          scrollSnapType: "x mandatory",
        }}
        // ref={divRef}
      >
        <div style={{ width: "200px", margin: "20px" }}>
          {isInPortView ? "ELEMENT IS IN PORT VIEW" : "NOT IN PORTVIEW"}
        </div>
        <div style={{ width: "200px", margin: "20px" }}>
          {isInPortView ? "ELEMENT IS IN PORT VIEW" : "NOT IN PORTVIEW"}
        </div>
        <div style={{ width: "200px", margin: "20px" }}>
          {isInPortView ? "ELEMENT IS IN PORT VIEW" : "NOT IN PORTVIEW"}
        </div>
        <div style={{ width: "200px", margin: "20px" }}>
          {isInPortView ? "ELEMENT IS IN PORT VIEW" : "NOT IN PORTVIEW"}
        </div>
        <div style={{ width: "200px", margin: "20px" }}>
          {isInPortView ? "ELEMENT IS IN PORT VIEW" : "NOT IN PORTVIEW"}
        </div>
        <div style={{ width: "200px", margin: "20px" }}>
          {isInPortView ? "ELEMENT IS IN PORT VIEW" : "NOT IN PORTVIEW"}
        </div>
        <div style={{ width: "200px", margin: "20px" }} ref={divRef}>
          {isInPortView ? "ELEMENT IS IN PORT VIEW" : "NOT IN PORTVIEW"}
        </div>
      </div> */}
      <Snapscroll images={imagesData}></Snapscroll>
      <ProductSnapscroll
        refrence={productRef}
        products={!loading ? products : placeholderImages}
      ></ProductSnapscroll>
    </div>
  );
};

export default Loream;
