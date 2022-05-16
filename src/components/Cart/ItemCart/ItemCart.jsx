import React from "react";
import { useCartContext } from '../../context/CartContext'


const ItemCart = ({ producto }) => {

  const {deleteFromCart} = useCartContext()
  
  return (
    
      <div className="flex flex-wrap justify-around mt-5 ">   
        <img src={producto.urlPicture} className="inline object-cover h-48"></img>
        <strong className="flex flex-col justify-center items-center text-lg mr-1">{producto.name}</strong>
        <strong className="flex flex-col justify-center items-center text-lg mr-1">Cantidad: {producto.quantity}</strong>
        <strong className="flex flex-col justify-center items-center text-lg mr-1">{(producto.price)*(producto.quantity)}</strong>
        <div className="flex flex-col justify-center items-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded h-10" onClick={()=> deleteFromCart(producto)}>
              Remover
            </button>
        </div>          
      </div>
  );
};

export default ItemCart;
