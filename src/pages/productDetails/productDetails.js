import React from 'react';
// import Details from './Details';
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
import { useLocation, useRouteMatch } from 'react-router-dom';
import './productDetails.css'
function ProductDetails(props) {
    const { lang, setlang } = useContext(langContext);
    const [productData, setProductData] = useState({});
    const productID = useRouteMatch().params.id


    useEffect(() => {
        const docRef = doc(firestore, `products/${productID}`);
        getDoc(docRef).then((res) => {
            setProductData(res.data())
        });
    }, []);

    return (
        <>

            <div class="d-flex justify-content-center" style={{ backgroundColor: "#f5f5f5" }}>
                <div class="border1 justify-content-center d-flex flex-row ps-3 pe-3 pt-5" style={{ width: "80%" }}>






                    <div class="leftSide border1 col-9 d-flex flex-column p-2">
                        <small class="text-start pb-2">  <span class="ps-1" style={{ color: "gray", textTransform: "capitalize" }} >{productData.category} </span> </small>
                        <div class="leftSide1 border1 ">

                            <div class="card pt-3 ps-1   p-3 mb-3 bg-body rounded" style={{ width: "100%;" }}>
                                <div class="" style={{ maxWidth: "540px;" }}>
                                    <div class="row">
                                        <div class="col-md-5">
                                            <img src={productData.imgurl} class="img-fluid rounded-start pb-3 border-bottom" alt="..." />
                                            <h6 class="text-start ps-2">SHARE THIS PRODUCT</h6>
                                            <div class="text-start ps-2">
                                                <a href='' style={{ color: 'black', textDecoration: 'none' }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                                                    </svg> </a>

                                            </div>
                                        </div>
                                        <div class="col-md-7">

                                            {/* <span class="text-start" style={{ width: "80px", height: "30px", backgroundColor: "blue" }}>Official Store</span> */}
                                            <div class="">
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <p class="text-start "><small class=" rounded-1" style={{ width: "80px", padding: "2px", backgroundColor: "#276076", color: "white", fontSize: '12px' }}>Offical Store</small></p>

                                                    <span class="iconHoverSpan">
                                                        <div class="iconHover"> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-suit-heart" viewBox="0 0 16 16">
                                                            <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
                                                        </svg>
                                                        </div>
                                                    </span>
                                                </div>
                                                <h5 class="text-start">{lang == "en" ? productData.engname : productData.arname} </h5>
                                                <p class="text-start" style={{ margin: '0' }}>Brand:<a a href="" target="" class="ms-1 text-decoration-none " style={{ color: '#3872bc' }}>{productData.brand}</a> </p>
                                                <span style={{ display: 'flex', }}>
                                                    <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></span>

                                                    <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></span>

                                                    <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></span>

                                                    <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></span>

                                                    <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill" style={{ color: '#c7c7cd' }} viewBox="0 0 16 16">
                                                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                    </svg></span>
                                                    <span><a a href="" target="" class="ms-1 text-decoration-none " style={{ color: '#3872bc' }}>(12 verified ratings)</a></span>
                                                </span>
                                                <h3 class="text-start fw-bold " >  {lang == "en"
                                                    ? `${Math.ceil(
                                                        productData.price -
                                                        (parseInt(productData.price) * parseInt(productData.offer)) /
                                                        100
                                                    ).toFixed(2)}EGP`
                                                    : `${Math.ceil(
                                                        productData.price -
                                                        (parseInt(productData.price) * parseInt(productData.offer)) /
                                                        100
                                                    ).toFixed(2)}جنيه`}  </h3>
                                                <div class="d-flex"><p class=" text-start text-decoration-line-through" style={{ color: "gray" }} > {productData.price}</p> <span class="ms-1" style={{
                                                    height: "25px", backgroundColor: "#feefde", color: "#f68d26"
                                                }}> - 10%</span> </div>

                                                < p class="text-start" > <small style={{
                                                    color: "#4b873b", fontSize: '12px', fontWeight: '500'
                                                }} >Free delivery (you are saving EGP 10.83) to 6th of October</small></p>

                                            </div>
                                            <button type="button" class="btn pb-2 mb-3" style={{ width: "100%", height: "45px", backgroundColor: "#f68b1e", color: "white" }}>

                                                <span class="fw-bold"> ADD TO CART</span></button>
                                            <h6 class="text-start border-top pt-1">PROMOTIONS</h6>
                                            <div class="text-start pb-1"> <a href="" class="text-decoration-none text-start" style={{ color: '#3872bc' }}> Enjoy instalments from 6 months to 60 months with valU </a> </div>
                                            <div class="text-start pb-1 "> <a href="" class="text-decoration-none text-start" style={{ color: '#3872bc' }}> You can now donate Saq El Odhya through Dar El Orman </a> </div>
                                            <div class="text-start pb-1 "> <a href="" class="text-decoration-none text-start" style={{ color: '#3872bc' }}> 10 Years Together - Celebrate With Us Until July 3 </a> </div>

                                        </div>


                                    </div>

                                </div>
                                <div style={{ display: 'flex' }}>
                                    <div style={{ width: '50%', height: "300px", color: "black", display: 'flex', alignItems: 'flex-end' }} > <a href="#" class="text-decoration-none text-start" style={{ paddingLeft: '5px' }}> Report incorrect product information </a> </div>
                                    <div style={{ width: '50%', color: "black" }}></div>


                                </div>


                            </div>
                        </div>

                        <div class="">

                            <div class="card   p-3 mb-3 bg-body rounded  ps-1" style={{ width: "100%;" }}>
                                <h5 style={{ textAlign: 'start', paddingLeft: '10px', width: '100%', paddingBottom: '10px' }} class="border-bottom"> Product details</h5>

                                <div style={{ textAlign: 'start', paddingLeft: '10px', paddingTop: '18px', paddingBottom: '18px', width: '100%' }}> {lang == "en" ? productData.engdetails : productData.ardetails} </div>

                            </div>
                        </div>

                        <div class="">

                            <div class="card  p-3 mb-3 bg-body rounded " style={{ width: "100%;" }}>
                                <h5 style={{ textAlign: 'start', paddingLeft: '10px', width: '100%', paddingBottom: '8px' }} class="border-bottom"> Specifications </h5>

                                <div style={{ display: 'flex', paddingTop: '14px', width: '100%', justifyContent: 'space-around' }}>
                                    <div style={{ border: 'solid 2px #f0f0f0', width: '47%', height: '240px', borderRadius: '6px' }}>
                                        <p style={{
                                            fontSize: '.875rem', fontWeight: '500', textAlign: 'start',
                                            paddingLeft: '10px', width: '100%', paddingBottom: '15px', paddingTop: '15px'
                                        }}
                                            class="border-bottom"> KEY FEATURES </p>
                                        <p>
                                            {/* we should loop here when we get the details from firebase
                                            <ul>

                                                {productData.length !== 0 ? productData.keyfeatures.map((keyf) => {
                                                    return (
                                                        <li style={{ textAlign: 'start' }}>{keyf} </li>)


                                                }) : "N/A"}
                                            </ul> */}
                                            <p class='ps-1'>N/A</p>
                                        </p>
                                    </div>

                                    <div style={{ border: 'solid 2px #f0f0f0', width: '47%', height: '240px', borderRadius: '6px' }}>
                                        <p style={{
                                            fontSize: '.875rem', fontWeight: '500', textAlign: 'start', paddingLeft: '10px',
                                            width: '100%', paddingBottom: '15px', paddingTop: '15px'
                                        }}
                                            class="border-bottom"> SPECIFICATIONS </p>
                                        <div style={{ display: 'flex', paddingLeft: '12px' }}>
                                            <div style={{ textAlign: 'start', fontWeight: '700' }}>SKU:  </div>
                                            <div style={{ paddingLeft: '4px' }}>{productData.unicode !== "" ? productData.unicode : "N/A"}</div>
                                        </div>

                                        <div style={{ display: 'flex', paddingLeft: '12px' }}>
                                            <div style={{ textAlign: 'start', fontWeight: '700' }}>Model:  </div>
                                            <div style={{ paddingLeft: '4px' }}>{productData.model !== "" ? productData.model : "N/A"}</div>
                                        </div>

                                        <div style={{ display: 'flex', paddingLeft: '12px' }}>
                                            <div style={{ textAlign: 'start', fontWeight: '700' }}>Color: </div>
                                            <div style={{ paddingLeft: '4px' }}>{productData.color !== "" ? productData.color : "N/A"}</div>
                                        </div>

                                        <div style={{ display: 'flex', paddingLeft: '12px' }}>
                                            <div style={{ textAlign: 'start', fontWeight: '700' }}>Main Material:  </div>
                                            <div style={{ paddingLeft: '4px' }}> {productData.mainmaterial !== "" ? productData.mainmaterial : "N/A"}</div>
                                        </div>
                                        <div style={{ display: 'flex', paddingLeft: '12px' }}>
                                            <div style={{ textAlign: 'start', fontWeight: '700' }}>Country:   </div>
                                            <div style={{ paddingLeft: '4px' }}> {productData.productioncountry !== "" ? productData.productioncountry : "N/A"}</div>
                                        </div>
                                        <div style={{ display: 'flex', paddingLeft: '12px' }}>
                                            <div style={{ textAlign: 'start', fontWeight: '700' }}>Country:   </div>
                                            <div style={{ paddingLeft: '4px' }}> {productData.productioncountry !== "" ? productData.productioncountry : "N/A"}</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div class="leftSide2 border1">

                            <div class="card p-3  bg-body rounded  ps-1" style={{ width: "100%;" }}>
                                <h5 style={{ textAlign: 'start', paddingLeft: '10px', width: '100%' }} class="border-bottom"> Customers who viewed this also viewed</h5>
                                <div> products scroller </div>


                            </div>
                        </div>

                        <div class="mt-3">

                            <div class="card p-3  bg-body rounded  ps-1" style={{ width: "100%;" }}>
                                <h5 style={{ textAlign: 'start', paddingLeft: '10px', width: '100%' }} class="border-bottom"> Customers who viewed this also viewed</h5>
                                <div> products scroller </div>


                            </div>
                        </div>

                        <div class="mt-3">

                            <div class="card   p-3 mb-3 bg-body rounded " style={{ width: "100%;" }}>
                                <div class="border-bottom" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '10px', width: '100%' }}>
                                    <h5 style={{ textAlign: 'start' }}> Verified Customer Feedback </h5>
                                    <p style={{ paddingRight: '5px', color: '#f6b01e', fontWeight: '500' }}> SEE ALL &gt; </p>
                                </div>
                                <div style={{ display: 'flex', width: '100%', justifyContent: 'space-around', padding: '8px' }}>
                                    <div style={{ width: '25%', height: '210px' }}>
                                        <p style={{
                                            fontSize: '.875rem', fontWeight: '500', textAlign: 'start',
                                            paddingLeft: '10px', width: '100%', paddingBottom: '4px', paddingTop: '15px'
                                        }}
                                        > VERIFIED RATINGS (12) </p>
                                        <div style={{ backgroundColor: '#f5f5f5', width: '85%', height: '150px', marginLeft: '8px', padding: '10px', borderRadius: '3px' }}>
                                            <div style={{ height: '40%', fontSize: '1.8125rem', fontWeight: '700', paddingTop: '4px', color: '#f6b01e', textAlign: "center" }}>4.5/5</div>
                                            <div style={{ height: '25%', textAlign: "center" }}><span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></span>
                                                <span style={{ paddingRight: '2px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '2px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '2px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '2px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-star-fill" style={{ color: '#c7c7cd' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span></div>
                                            <div style={{ height: '25%', textAlign: "center" }}>12 verified ratings</div>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%', paddingLeft: '10px', paddingRight: '2px', paddingTop: '10px' }} >
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ fontWeight: '500', paddingTop: '2px' }}> 5 </div>
                                                <div style={{ fontWeight: '500', paddingLeft: '5px' }}> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span> </div>
                                                <div style={{ color: 'gray', paddingLeft: '5px', paddingTop: '2px' }}> (9) </div>
                                            </div>
                                            <div style={{ width: '90px', paddingTop: '10px' }}>
                                                <div class="progress" style={{ width: '100px', height: '12px' }}>
                                                </div>
                                            </div>


                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%', paddingLeft: '10px', paddingRight: '2px' }} >
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ fontWeight: '500', paddingTop: '2px' }}> 4 </div>
                                                <div style={{ fontWeight: '500', paddingLeft: '5px' }}> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span> </div>
                                                <div style={{ color: 'gray', paddingLeft: '5px', paddingTop: '2px' }}> (9) </div>
                                            </div>
                                            <div style={{ width: '90px', paddingTop: '10px' }}>
                                                <div class="progress" style={{ width: '100px', height: '12px' }}>
                                                </div>
                                            </div>


                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%', paddingLeft: '10px', paddingRight: '2px' }} >
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ fontWeight: '500', paddingTop: '2px' }}> 3 </div>
                                                <div style={{ fontWeight: '500', paddingLeft: '5px' }}> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span> </div>
                                                <div style={{ color: 'gray', paddingLeft: '5px', paddingTop: '2px' }}> (0) </div>
                                            </div>
                                            <div style={{ width: '90px', paddingTop: '10px' }}>
                                                <div class="progress" style={{ width: '100px', height: '12px' }}>
                                                </div>
                                            </div>


                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%', paddingLeft: '10px', paddingRight: '2px' }} >
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ fontWeight: '500', paddingTop: '2px' }}> 2 </div>
                                                <div style={{ fontWeight: '500', paddingLeft: '5px' }}> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span> </div>
                                                <div style={{ color: 'gray', paddingLeft: '5px', paddingTop: '2px' }}> (1) </div>
                                            </div>
                                            <div style={{ width: '90px', paddingTop: '10px' }}>
                                                <div class="progress" style={{ width: '100px', height: '12px' }}>
                                                </div>
                                            </div>


                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', width: '85%', paddingLeft: '10px', paddingRight: '2px' }} >
                                            <div style={{ display: 'flex' }}>
                                                <div style={{ fontWeight: '500', paddingTop: '2px' }}> 1 </div>
                                                <div style={{ fontWeight: '500', paddingLeft: '5px' }}> <span> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span> </div>
                                                <div style={{ color: 'gray', paddingLeft: '5px', paddingTop: '2px' }}> (0) </div>
                                            </div>
                                            <div style={{ width: '90px', paddingTop: '10px' }}>
                                                <div class="progress" style={{ width: '100px', height: '12px' }}>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div style={{ width: '75%', }}>
                                        <p style={{
                                            fontSize: '.875rem', fontWeight: '500', textAlign: 'start', paddingLeft: '10px',
                                            width: '100%', paddingTop: '15px'
                                        }}
                                        > PRODUCT REVIEWS (6) </p>

                                        <div class="border-bottom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'start', height: '100px', paddingLeft: '8px', paddingBottom: '5px' }}>
                                            <div> <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span></div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'start' }} >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'start' }}>
                                                    <div style={{ paddingRight: '5px' }} > 20-07-2022 </div>
                                                    <div> by Marwa </div>
                                                </div>
                                                <div style={{ color: "#89c951", fontWeight: '400', fontSize: '16' }}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle" style={{ fontWeight: '600' }} viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                                </svg> Verified Purchase</div>
                                            </div>
                                        </div>


                                        <div class="border-bottom" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'start', height: '150px', paddingLeft: '8px', paddingBottom: '5px' }}>
                                            <div> <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span></div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'start' }} >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'start' }}>
                                                    <div style={{ paddingRight: '5px' }} > 20-07-2022 </div>
                                                    <div> by Mariam </div>
                                                </div>
                                                <div style={{ color: "#89c951", fontWeight: '400', fontSize: '16' }}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle" style={{ fontWeight: '600' }} viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                                </svg> Verified Purchase</div>
                                            </div>
                                        </div><div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'start', height: '150px', paddingLeft: '8px', paddingBottom: '5px' }}>
                                            <div> <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                            </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span>
                                                <span style={{ paddingRight: '5px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" style={{ color: '#f6b01e' }} viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg></span></div>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'start' }} >
                                                <div style={{ display: 'flex', justifyContent: 'space-between', textAlign: 'start' }}>
                                                    <div style={{ paddingRight: '5px' }} > 20-07-2022 </div>
                                                    <div> by Nadine Mounir </div>
                                                </div>
                                                <div style={{ color: "#89c951", fontWeight: '400', fontSize: '16' }}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle" style={{ fontWeight: '600' }} viewBox="0 0 16 16">
                                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z" />
                                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z" />
                                                </svg> Verified Purchase</div>
                                            </div>
                                        </div>




                                    </div>
                                </div>

                            </div>

                        </div>







                        <div class="mt-3">

                            <div class="card p-3  bg-body rounded  ps-1" style={{ width: "100%;" }}>
                                <h5 style={{ textAlign: 'start', paddingLeft: '10px', width: '100%' }} class="border-bottom">Sponsored products</h5>
                                <div> products scroller </div>


                            </div>
                        </div>

                    </div>


                    <div class=" card border col-3 rounded" style={{ backgroundColor: "white", marginTop: "37px", height: '29%', marginLeft: '10px' }}>
                        <div >
                            <div style={{ paddingTop: '15px', paddingLeft: '8px', paddingRight: '8px' }}>
                                <div class="text-start fw-bolder border-bottom pb-2" style={{ fontSize: '.875rem', fontWeight: '500' }} >  DELIVERY & RETURNS </div>
                                <div class="text-start">Jumia <span class="fst-italic" style={{ color: "#f68b1e" }}>EXPRESS</span></div>
                                <div class="text-start fw-normal border-bottom pb-2" style={{ fontSize: '.75rem' }} > Order from Jumia Express items and get free shipping. <a href="" style={{ fontSize: '.875rem', textDecoration: 'none', color: '#3872bc' }}> Details </a> </div>
                                <div class="text-start fw-bolder p-1" >  Choose your location </div>
                                {/* <div class="form-floating"> */}
                                <select class="form-select mb-2" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Giza</option>
                                    <option value="1">Alexandria</option>
                                    <option value="2">Cairo</option>
                                    <option value="3">Qenna</option>
                                </select>
                                <select class="form-select mb-2" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>6th of October</option>
                                    <option value="1">Dokki</option>
                                    <option value="2">Maadi</option>
                                    <option value="3">Sheikh Zayed</option>
                                </select>
                                {/* </div> */}
                                <div >




                                    <div style={{ display: 'flex', paddingTop: '10px' }}>
                                        <div style={{ width: '20%', paddingTop: '5px' }}> <span class="border rounded " style={{ paddingRight: '10px', paddingLeft: '10px', paddingTop: '4px', paddingBottom: '7px' }}> <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16" >
                                            <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg> </span></div>
                                        <div style={{ width: '80%' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ fontSize: '.875rem', fontWeight: '500' }}> Door Delivery</span>
                                                <a href="" style={{ fontSize: '.75rem', color: '#3872bc' }} class="text-decoration-none " >Details</a>
                                            </div>
                                            <p class="text-start" style={{ margin: '0' }} > <small class="text-start" style={{
                                                color: "#4b873b", fontSize: '12px', fontWeight: '500'
                                            }} >Free delivery (you are saving EGP 10.83) to 6th of October</small></p>
                                            <p class="text-start" style={{ fontSize: '12px' }}> Delivery by <span style={{ fontWeight: '500' }}> 26 July </span> when you order within next  <span style={{ fontWeight: '500' }}> 18hrs 29mins </span></p>




                                        </div>

                                    </div>


                                    <div style={{ display: 'flex', paddingTop: '10px' }}>
                                        <div style={{ width: '20%', paddingTop: '5px' }}> <span class="border rounded " style={{ paddingRight: '10px', paddingLeft: '10px', paddingTop: '4px', paddingBottom: '7px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-box2-heart" viewBox="0 0 16 16">
                                                <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z" />
                                                <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z" />
                                            </svg>
                                        </span></div>
                                        <div style={{ width: '80%' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ fontSize: '.875rem', fontWeight: '500' }}> Pickup Station</span>
                                                <a href="" style={{ fontSize: '.75rem', color: '#3872bc' }} class="text-decoration-none " >Details</a>
                                            </div>
                                            <p class="text-start" style={{ margin: '0' }} > <small class="text-start" style={{
                                                color: "#4b873b", fontSize: '12px', fontWeight: '500'
                                            }} >Free delivery (you are saving EGP 10.83)</small></p>
                                            <p class="text-start" style={{ fontSize: '12px' }}> Pickup by <span style={{ fontWeight: '500' }}> 26 July </span> when you order within next  <span style={{ fontWeight: '500' }}> 18hrs 29mins </span></p>




                                        </div>

                                    </div>



                                    <div style={{ display: 'flex', paddingTop: '10px' }}>
                                        <div style={{ width: '20%', paddingTop: '5px' }}> <span class="border rounded " style={{ paddingRight: '10px', paddingLeft: '10px', paddingTop: '4px', paddingBottom: '7px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="currentColor" class="bi bi-archive" viewBox="0 0 16 16">
                                                <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                            </svg>
                                        </span></div>
                                        <div style={{ width: '80%' }}>
                                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                <span style={{ fontSize: '.875rem', fontWeight: '500' }}> Return Policy</span>
                                                <a style={{ fontSize: '.75rem' }} class="text-decoration-none " ></a>
                                            </div>

                                            <p class="text-start" style={{ fontSize: '12px', paddingBottom: '10px' }}>14 days free return (except for underwear and personal items) up to 30 days for defective products with necessity for requesting a return within 24 hours from the delivery date. <a href='#' class="text-decoration-none " style={{ fontSize: '.75rem', color: '#3872bc' }}> See more </a></p>




                                        </div>

                                    </div>

                                </div>



                            </div>

                            {/* <!-- <div style="height:70px; border:solid 1px blue;"> </div> --> */}
                        </div>
                        <div class=" card p-3 mb-3 bg-body rounded" style={{ width: "100%;", marginTop: '15px' }}>
                            <h5 style={{ textAlign: 'start', width: '100%', paddingBottom: '3px', fontSize: '.875rem', fontWeight: '500' }} class="border-bottom"> SELLER INFORMATION</h5>

                            <div style={{ textAlign: 'start', width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                                <div >
                                    <div style={{ fontSize: '.875rem', fontWeight: '500' }}> Jumia</div>
                                    <div style={{ fontSize: '.75rem' }}>Click here to list your product</div>

                                </div>
                                <a href="" style={{ color: 'black', textDecoration: 'none' }}> &gt;
                                </a>
                            </div>

                        </div>
                        <div class=" card mb-3 bg-body rounded" style={{ width: "100%;", padding: '8px', }}>
                            <div style={{ textAlign: 'start', width: '100%' }}>
                                <div style={{ fontSize: '.875rem', fontWeight: '500' }}> Have one to sell?</div>
                                <div style={{ fontSize: '.75rem' }}><span style={{ fontWeight: '500' }} > 100% </span>Seller Score</div>

                            </div>
                        </div>

                        <div class="  rounded-top border border-bottom-0 hoverEffect" style={{ width: "100%;", padding: '15px', }}>
                            <div style={{ textAlign: 'start', width: '100%' }}>
                                <div style={{ fontSize: '.875rem', fontWeight: '400' }}>
                                    <span class="pe-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                    </span>
                                    Product Details </div>


                            </div>
                        </div>
                        <div class="border border-bottom-0 hoverEffect" style={{ width: "100%;", padding: '15px', }} >
                            <div style={{ textAlign: 'start', width: '100%' }}>
                                <div style={{ fontSize: '.875rem', fontWeight: '400' }}>
                                    <span class="pe-3" >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-text" viewBox="0 0 16 16">
                                            <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                                            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                                        </svg>
                                    </span>
                                    Specifications </div>


                            </div>
                        </div>
                        <div class=" rounded-bottom border border-bottom-0 hoverEffect" style={{ width: "100%;", padding: '15px', }}>
                            <div style={{ textAlign: 'start', width: '100%' }}>
                                <div style={{ fontSize: '.875rem', fontWeight: '400' }}>
                                    <span class="pe-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-dots" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                        </svg>
                                    </span>
                                    Verified Customers Feedback</div>


                            </div>
                        </div>
                        <div class=" card mt-3 bg-body rounded" style={{ width: "100%;", padding: '8px', }}>
                            <div style={{ width: '100%' }}>
                                <div style={{ fontSize: '.875rem', textAlign: "center" }}> Questions about this product?</div>
                                <button class="buttonHover" style={{ textAlign: "center" }} >
                                    <span style={{ paddingRight: '8px', textAlign: "center" }}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-left-text" viewBox="0 0 16 16">
                                            <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                                            <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                                        </svg>
                                    </span>
                                    CHAT</button>

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

            <footer class="d-flex justify-content-center align-items-center flex-column" style={{
                height: "150px;", backgroundColor:

                    "gray", color: "white;"
            }}>
                <h6 style={{ color: "white;" }}> Find Us on Social Media </h6>
                <div>
                    <i class="bi bi-calendar-event pe-2" style={{ color: "white;" }}></i>
                    <i class="bi bi-calendar-event pe-2" style={{ color: "white;" }}></i>
                    <i class="bi bi-calendar-event pe-2" style={{ color: "white;" }}></i>
                    <i class="bi bi-calendar-event pe-2" style={{ color: "white;" }}></i>

                </div>
                <h6 style={{ color: "white;" }}> Powered By w3.css </h6>
            </footer>
        </>

    );
}

export default ProductDetails;