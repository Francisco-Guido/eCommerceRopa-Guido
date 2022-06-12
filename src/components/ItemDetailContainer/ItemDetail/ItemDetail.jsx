import React from 'react'
import ItemCount from './ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemDetail = ({items}) => {
  const {name, urlPicture, price, desc, stock, id} = items

  const [terminar, setTerminar] = useState(false)

  const onAdd = () => {
    setTerminar(true)
  };

  return (
    <div className="flex flex-col sm:flex-row sm:justify-center mt-5">
        <div className="flex justify-center">
        <img src={urlPicture} className="object-contain max-h-[34rem]"></img>
        </div>
        <div className="flex flex-col justify-between h-80 mt-4">
            <h1 className="sm:text-left text-4xl font-bold">{name}</h1>
            <h4 className="sm:text-left text-3xl font-semibold">${price}</h4>
            <p className="sm:text-left text-1xl font-semibold sm:w-96">{desc} </p>
            {terminar ? ( 
            <div className = "flex flex-col">
              <Link to="/cart"
            className="transition ease-in-out delay-10 duration-300 bg-transparent hover:bg-gray-300 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded mb-2">
               Ir al carrito
            </Link>
            <Link to="/"
            className="transition ease-in-out delay-10 duration-300 bg-transparent hover:bg-gray-300 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded">
              Ver catálogo
            </Link>
            </div>
            
                
          ) : (<ItemCount stock={stock} onAdd={onAdd} initial={1} id={id}/>)}
        </div>
    </div>
  )
}

export default ItemDetail


