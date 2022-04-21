import { useEffect, useState } from "react";

const ItemCount = () => {
  const [count, setCount] = useState(1);

  const addHandler = () => {
    setCount(count + 1);
  };

  const resHandler = () => {
    if (count == 1) {
      return false;
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div class="flex-column space-y-2 h-32">
      <div class="inline-flex">
        <button
          onClick={resHandler}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-l border-y-2 border-x-2 border-black"
        >
          -
        </button>
        <strong class="bg-gray-300 text-gray-800 font-bold border-y-2 border-black py-2 px-2">
          {count}
        </strong>
        <button
          onClick={addHandler}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-2 rounded-r border-y-2 border-x-2 border-black transition ease-in-out delay-10 duration-250"
        >
          +
        </button>
      </div>
      <div>
        <button class="transition ease-in-out delay-10 duration-300 bg-transparent hover:bg-gray-300 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded">
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
