import React, { useEffect, useState } from "react";
import {getDocs, getFirestore, collection} from 'firebase/firestore'

const ProductDetail = () => {

const [products, setProducts] = useState([])

useEffect(() => {
  const db = getFirestore();
  const itemsCollection = collection(db, 'items')
  getDocs(itemsCollection).then((snapshot)=>{
    setProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
  })

}, [])


  return (
    <div>
      {products.map( p => <li> { p.name } </li>)}
    </div>
  )
};

export default ProductDetail;

