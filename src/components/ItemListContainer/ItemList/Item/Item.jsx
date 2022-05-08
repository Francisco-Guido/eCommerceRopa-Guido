import React from "react";
import {Link} from "react-router-dom"


const Item = ({ producto }) => {
  
  return (
    <Link to={`/articulo/${producto.id}`}>
    <div className="flex-col mb-6 mt-6">
      <div className="flex-col transition ease-in-out delay-10 text-gray-600 hover:opacity-80 hover:text-black cursor-pointer">
        <img src={producto.urlPicture} className="inline object-cover h-80"></img>
        <p className="text-lg font-semibold">{producto.name}</p>
        <strong className="text-lg mr-1">$ {producto.price}</strong>
      </div>
      
      
    </div>
    </Link> 
  );
};

export default Item;
