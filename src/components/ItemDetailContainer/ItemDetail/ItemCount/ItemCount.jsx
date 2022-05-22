import { useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import { useCartContext } from "../../../context/CartContext";

const ItemCount = ({ stock, onAdd, id}) => {
  const [count, setCount] = useState(0)

  const {addToCart} = useCartContext()
  const {products} = useAppContext()

	const handleAdd = () => {
		if (count < stock) {
			setCount(count + 1)
		}
	}
 
	const handleRemove = () => {
		if (count > 0) {
			setCount(count - 1)
		}
	}

  const handleClick = (id, cantidad) => {
		const findProduct = products.find((producto) => producto.id === id)

    console.log(findProduct)
    console.log(id)
		if (!findProduct) {
			alert("Error en la base de datos")
			return
		}

		addToCart(findProduct, cantidad)
		onAdd(count)
	}
  
  return (
    <div className="flex-column space-y-2 h-24 sm:text-left sm:w-40">
      <div className="flex justify-center sm:justify-start">
        <button
          onClick={handleRemove}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1/2 px-2 rounded-l border-y-2 border-x-2 border-black"
        >
          -
        </button>
        <strong className="bg-gray-300 text-gray-800 font-bold border-y-2 border-black py-1/2 px-2">
          {count}
        </strong>
        <button
          onClick={handleAdd}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-1/2 px-2 rounded-r border-y-2 border-x-2 border-black transition ease-in-out delay-10 duration-250"
        >
          +
        </button>
      </div>
      <div>
        <button
          className="transition ease-in-out delay-10 duration-300 bg-transparent hover:bg-gray-300 text-black font-semibold hover:text-black py-2 px-4 border border-black hover:border-transparent rounded"
          onClick={() => handleClick(id, count)}
          disabled={count === 0 ? true : null}
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
