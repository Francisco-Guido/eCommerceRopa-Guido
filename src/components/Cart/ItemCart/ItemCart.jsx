import React from "react";
import { useCartContext } from '../../context/CartContext'


const ItemCart = ({ producto }) => {

  const {deleteFromCart} = useCartContext()
  
  const totales = (producto.price)*(producto.quantity)

  return (
      <div className="flex justify-around w-50">   
        <img src={producto.urlPicture} className="inline object-cover h-48"></img>
        <p className="text-lg text-center font-semibold">{producto.name}</p>
        <strong>Cantidad:{producto.quantity}</strong>
        <strong className="text-lg mr-1">$ {producto.price}</strong>
        <h1>{totales}</h1>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded h-10" onClick={()=> deleteFromCart(producto)}>
          Remover
        </button>       
      </div>
  );
};

export default ItemCart;
