import Item from "./Item/Item";

const ItemList = ({ category }) => {
	return (
		<>
			<div className="flex justify-around grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
				{category &&
					category.map((producto) => (
						<Item
							key={producto.id} producto={producto}
						/>
					))}
			</div>
		</>
	)
}

export default ItemList


