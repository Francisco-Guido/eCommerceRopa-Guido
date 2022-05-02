import React from 'react'
import { useParams } from 'react-router-dom'
import ItemCount from './ItemCount'
import { productList } from "../data/data.js";
import { useEffect, useState } from "react";
import "../App.css";

const ItemDetail = () => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} ${article.name} a tu carrito!`);
  };

  const {articuloId}= useParams()
  const [article, setArticle] = useState({})

  useEffect(() => {
    setArticle(productList.find(m => m.id == articuloId) )
  }, [articuloId])
  

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center mt-5">
        <div className="flex justify-center">
        <img src={article.urlPicture} className="object-contain max-h-[34rem]"></img>
        </div>
        <div className="flex flex-col justify-between h-80 mt-4">
            <h1 className="sm:text-left text-4xl font-bold">{article.name}</h1>
            <h4 className="sm:text-left text-3xl font-semibold">${article.price}</h4>
            <p className="sm:text-left text-1xl font-semibold sm:w-96">{article.desc} </p>
            <ItemCount stock={article.stock} onAdd={onAdd} initial={1} />
        </div>
    </div>
  )
}

export default ItemDetail


