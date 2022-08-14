import React from "react";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { getDoc, doc } from "@firebase/firestore";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
import { useLocation, useRouteMatch } from "react-router-dom";
import { useRef } from "react";


function Favorites(props) {


    //     // const favoriteItems = JSON.parse(localStorage.getItem("favoriteItems"))
    //     // const [cart, setcart] = useState([])

    //     const [userInfo, setUserInfo] = useState({});
    //     // const userID = useRouteMatch().params.UID
    //     const userID = localStorage.getItem("UID");
    //     const [favorites, setFavorites] = useState();
    //     // const [user, setUser] = useState({ userEmail: "", Password: "" });
    //     const history = useHistory();
    //     useEffect(() => {
    //         getAuth();
    //         const docRef = doc(firestore, `users/${userID}`);
    //         getDoc(docRef).then((res) => {
    //             setUserInfo(res.data());
    //             console.log(userID)
    //             console.log(res.data())
    //             // console.log(docRef)
    //             // console.log(localStorage.key("UID"));
    //             // console.log(user)


    //         });

    //     }, []);



    //     const editInfo = async (e) => {
    //         e.preventDefault()

    //         if (useremail === undefined || password === undefined) {
    //             alert(" You Have to Fill All Fields!")
    //         }


    //         // alert(auth.currentUser.email)
    //         const docReff = doc(firestore, `users/${userID}`);
    //         getDoc(docReff).then((res) => {
    //             signInWithEmailAndPassword(auth, res.data()['useremail'], res.data()['password']).then((cred) => {
    //                 updateEmail(cred.user, useremail).then(() => {
    //                     // Email updated!
    //                     // ...
    //                     alert("email changed")
    //                     updatePassword(cred.user, password).then(() => {
    //                         // Email updated!
    //                         // ...
    //                         alert("password changed")
    //                         const docRef = doc(firestore, `users/${userID}`);
    //                         updateDoc(docRef, { password: password, useremail: useremail, username: username })
    //                             .then((res) => {
    //                                 console.log(res)
    //                                 // updateCurrentUser(firebase.getAuth(), useremail)
    //                                 // console.log(firebase)
    //                                 // const user = User()
    //                                 alert("Changed successfully!")
    //                                 window.location.reload();

    //                             })
    //                     })
    //                 })

    //             })
    //         })

    //         // window.location.reload();


    //     }

    //     // const handleCart = () => {
    //     //     const myCart = [];
    //     //     if (localStorage.getItem("favoriteItems")) {
    //     //         for (var i = 0; i < favoriteItems.length; i++) {
    //     //             {
    //     //                 // myCart.push(`${localStorage.key(i)}`);
    //     //                 // myCart = [...myCart, `${localStorage.key(i)}`]; Note: Render Problem Cant use this state!!!!!!!!!!!!!!!!!
    //     //                 // setcart((cart) => [...cart, localStorage.getItem(localStorage.key(i))]);
    //     //                 // console.log(localStorage.key(i));
    //     //                 const docRef = doc(firestore, `products/${favoriteItems[i]}`);
    //     //                 getDoc(docRef).then((res) => {
    //     //                     myCart.push({
    //     //                         ...res.data(),
    //     //                         productID: res.id,
    //     //                         cartCounter: localStorage.getItem(res.id),
    //     //                     });

    //     //                     setcart(myCart);
    //     //                     // console.log(cart);
    //     //                     console.log(cart);

    //     //                 });
    //     //             }
    //     //         }
    //     //     } else {
    //     //         setcart(myCart)
    //     //     }

    //     // };


    //     return (
    //         <>
    //             Hello
    //             {cart.length < 1 && <div> empty </div>}
    //             {cart.length > 0 && <div>
    //                 {cart.map((product, i) => {
    //                     return (
    //                         <>
    //                             <p>hello {product.engname}</p>
    //                         </>
    //                     )
    //                 })}

    //             </div>}

    //         </>
    //     );
    // }
}
export default Favorites;
