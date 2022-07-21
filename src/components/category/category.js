import React from "react";
 //import { firestore } from "../../../@firebase";
 import { firestore } from "./../../firebase";



import {collection,doc,getDoc,} from "@firebase/firestore";
import { useHistory, useParams } from "react-router-dom";
import { useContext } from "react";
import { langContext } from "../../contexts/langContext";
import { SplitButton } from "react-bootstrap";
import {where} from "@firebase/firestore";
import {query} from "@firebase/firestore";

const Category = () => {
 //console.log(category);
  const { lang } = useContext(langContext);
  const history = useHistory();
  //console.log(history.location.pathname);

 var cat=history.location.pathname.split("/")[2];
  console.log(cat.toLowerCase());
 



     //queries
      //get all products in same category
      // const products = query(collection(fireStore,"products"))
      // .where("category", "==", cat.toLowerCase())
      // .get()
      // .then(snapshot => {
      //   const products = snapshot.docs.map(doc => {
      //     return { id: doc.id, ...doc.data() };
      //   });
      //   console.log(products);
      //   return products;
      // }
      // )
      // .catch(error => {
      //   console.log("Error getting documents: ", error);
      // }
      // );


      const colRef = collection(firestore,"products");
      // const queryRef = colRef.where("category", "==", cat.toLowerCase());
      // const query = queryRef.get();
      // query.then(snapshot => {
      //   if (snapshot.empty) {
      //     console.log("No matching documents.");
      //     return;
      //   }
      //   snapshot.forEach(doc => {
      //     console.log(doc.id, "=>", doc.data());
      //   }
      //   );
      // }
      // );

      //must be imported from firebase/firestore
      var categoryquery = query(colRef, where("category", "==", "electronics-tablet"));
      getDoc(categoryquery).then((q)=>{
        if (!q.empty) {
        q.forEach((res)=>{
            const docRef = doc(this.fireStore,`products/${res.id}`);
            getDoc(docRef).then((prdDoc)=>{
              if (prdDoc.exists()) {
                alert(prdDoc.data()['category'])
              }
            })
        })}
        else{
          alert("no category found with that name")
        }
      })

  return (
    <div className="category">
      <h1>category</h1>
      {/* <div className="category__title">{category.title}</div>
      <div className="category__description">{category.description}</div> */}
    </div>
  );
}
export default Category;