import { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [qty, setQty] = useState(initial);

  const addProduct = (num) => {
    setQty(qty + num);
  };

  return (
    <div className="flex-column space-y-2 h-24 sm:text-left sm:w-40">
      <div className="flex justify-center sm:justify-start">
        <button
          onClick={() => addProduct(-1)}
          disabled={qty === initial ? true : null}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1/2 px-2 rounded-l border-y-2 border-x-2 border-black"
        >
          -
        </button>
        <strong className="bg-gray-300 text-gray-800 font-bold border-y-2 border-black py-1/2 px-2">
          {qty}
        </strong>
        <button
          onClick={() => addProduct(+1)}
          disabled={qty === stock ? true : null}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1/2 px-2 rounded-r border-y-2 border-x-2 border-black transition ease-in-out delay-10 duration-250"
        >
          +
        </button>
      </div>
      <div>
        <button
          className="transition ease-in-out delay-10 duration-300 bg-transparent hover:bg-gray-300 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded"
          onClick={() => onAdd(qty)}
          disabled={stock === 0 ? true : null}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
