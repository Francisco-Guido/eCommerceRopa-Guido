import React, { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ProductDetail = () => {

const [item, setItem] = useState({})

useEffect(() => {
  const db = getFirestore();

  const iphone = doc(db, 'items', 'DlLmmlZpmNbk20UAMWOh')
  getDoc(iphone).then( res => { 
    if(res.exists()){
      console.log(res)
      console.log(res.id)
      console.log(res.data())

      setItem(res.data())
    }
   })

}, [])


  return (
    <>
    <div>Firebase</div>
    <div>{item.title}</div>
    <div>{item.description}</div>
    <div>{item.price}</div>
    <div>{item.stock}</div>
    </>
  )
};

export default ProductDetail;
