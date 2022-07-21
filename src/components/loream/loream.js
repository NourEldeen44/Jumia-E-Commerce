import React from "react";
import { useInViewport } from "react-in-viewport";
import { useRef } from "react";
import "./loream.css";
import Snapscroll from "../snapscroll/snapscroll";
const Loream = () => {
  const divRef = useRef(null);
  const ref = useRef();
  const isInPortView = useInViewport(divRef);
  // useScrollSnap({
  //   ref: divRef,
  //   duration: 100,
  //   delay: 50,
  // });
  // const el = document.getElementById("snap").style;
  const scroll = () => {
    console.log();
    divRef.current.scrollIntoView({ behavior: "smooth" });
  };
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
    </div>
  );
};

export default Loream;
