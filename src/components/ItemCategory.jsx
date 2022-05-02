import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item.jsx';
import { productList } from "../data/data.js";
import { useEffect, useState } from "react";
import "../App.css";

const ItemCategory = () => {

    const {consola} = useParams()
    const [juegosCons, setjuegosCons] = useState([])

    const getJuegos = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productList)
        }, 1000)
    })

    const getJuegosFromDB = async() => {
        try{
            const result = await getJuegos
            setjuegosCons(result.filter(m=>m.consola== consola))
        } catch(error){
            console.log(error)
            alert("No se pueden")
        }
    }

    return (
        <div className="flex justify-around grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {
            
            juegosCons.length ? ( 
              <>
                {
                  
                  juegosCons.map((article) => {
                   
                    return (
                      <div key={article.category}>
                        <Item
                          name={article.name}
                          urlPicture={article.urlPicture}
                          price={article.price}
                          stock={article.stock}
                          id={article.id}
                          category={article.category}
                        />
                      </div>
                    );
                  })
                }
              </>
            ) : (
              <p>Cargando productos...</p>
            ) 
          }
        </div>
      );
}

export default ItemCategory



