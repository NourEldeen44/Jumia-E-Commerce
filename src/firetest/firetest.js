import { firestore } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "@firebase/firestore";
import { useEffect } from "react";
import React from "react";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
const element = <FontAwesomeIcon icon={faCoffee} size="5x" color="white" />;

const Firetest = () => {
  useEffect(() => {
    const colRef = collection(firestore, "users");
    //add doc
    addDoc(colRef, { username: "NourEldeen" }).then((res) => {
      alert(`user was added id is \n ${res.id}`);
      //get doc
      const docRef = doc(firestore, `users/${res.id}`);
      getDoc(docRef).then((res) => {
        alert(res.data().username);
      });
      //set a Document :: RESTS THE ENTIRE DOCUMENT DATA
      //   setDoc(docRef, { useremail: "neldeen8@gmail" })
      //     .then((res) => {
      //       alert("success");
      //       // console.log(res);
      //     })
      //     .catch((err) => console.log(err));

      //update a Document :: UPDATES SOME OF THE DOCUMENT DATA
      //   updateDoc(docRef, { username: "new Nour" })
      //     .then(() => console.log("data updated"))
      //     .catch((err) => console.log(err));

      //delete a Document :: Deletes THE DOCUMENT "PRODUCT"
      // deleteDoc(productDoc).then(()=>{console.log("document deleted!");})

      //queries
      //get ar name from each doc that have that eng name "Abu Auf Turkish Coffee Medium Plain– 200 gm"
      // const colRef = collection(this.fireStore,"products");
      // //must be imported from firebase/firestore
      // var namequery = query(colRef, where("engname", "==", "Abu Auf Turkish Coffee Medium Plain– 200 gm"));
      // getDocs(namequery).then((q)=>{
      //   //if query is not empty
      //   if (!q.empty) {
      //   q.forEach((res)=>{
      //       const docRef = doc(this.fireStore,`products/${res.id}`);
      //       getDoc(docRef).then((prdDoc)=>{
      //         if (prdDoc.exists()) {
      //           alert(prdDoc.data()['arname'])
      //         }
      //       })
      //   })}
      //   else{
      //     alert("no document found with that name")
      //   }
      // })
    }, []);
  });
  //bootstrap 5
  return <div className="bg-danger">{element}</div>;
};

export default Firetest;
