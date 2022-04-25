import React from "react";
import ItemCount from "./ItemCount";

const Item = ({ name, urlPicture, price, id, stock }) => {
  const onAdd = (qty) => {
    alert(`Has agregado ${qty} ${name} a tu carrito!`);
  };

  return (
    <div className="flex-col mb-6 mt-6">
      <a className="flex-col transition ease-in-out delay-10 text-gray-600 hover:opacity-80 hover:text-black cursor-pointer">
        <img src={urlPicture} className="inline object-cover h-80"></img>
        <p className="text-lg font-semibold">{name}</p>
        <strong className="text-lg mr-1">$ {price}</strong>
      </a>
      <ItemCount stock={stock} onAdd={onAdd} initial={1} />
    </div>
  );
};

export default Item;
