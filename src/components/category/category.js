import React from "react";
// import { firestore } from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "@firebase/firestore";

const Category = ({ category }) => {
    console.log(category);

     //queries
      //get all category
      // const colRef = collection(this.fireStore,"products");
      // //must be imported from firebase/firestore
      // var categoryquery = query(colRef, where("category", "==", "category"));
      // getDocs(categoryquery).then((q)=>{
      //   //if query is not empty
      //   if (!q.empty) {
      //   q.forEach((res)=>{
      //       const docRef = doc(this.fireStore,`products/${res.id}`);
      //       getDoc(docRef).then((prdDoc)=>{
      //         if (prdDoc.exists()) {
      //           alert(prdDoc.data()['category'])

      //         }
      //       })
      //   })}
      //   else{
      //     alert("no category found with that name")
      //   }
      // })

  return (
    <div className="category">
      <h1>category</h1>
      {/* <div className="category__title">{category.title}</div>
      <div className="category__description">{category.description}</div> */}
    </div>
  );
}
export default Category;