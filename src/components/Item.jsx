import React from "react";
import {Link} from "react-router-dom"


const Item = ({ name, urlPicture, price, id,  desc, stock, category, key}) => {
  
  return (
    <Link to={`/articulo/${id}`}>
    <div className="flex-col mb-6 mt-6">
      <a className="flex-col transition ease-in-out delay-10 text-gray-600 hover:opacity-80 hover:text-black cursor-pointer">
        <img src={urlPicture} className="inline object-cover h-80"></img>
        <p className="text-lg font-semibold">{name}</p>
        <strong className="text-lg mr-1">$ {price}</strong>
        <p>{desc}</p>
      </a>
      
      
    </div>
    </Link> 
  );
};

export default Item;
