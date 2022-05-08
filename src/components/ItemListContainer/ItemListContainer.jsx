import ItemList from "./ItemList/ItemList";
import { getItem } from "../../data/data.js";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
	const { categoryId } = useParams()
	const [category, setCategory] = useState()

	useEffect(() => {
		if (categoryId === undefined) {
			getItem().then((resp) => setCategory(resp))
		} else {
			getItem().then((resp) =>
				setCategory(resp.filter((product) => product.category === categoryId))
			)
		}
	}, [categoryId])

	return (
		<>
			<div className="pt-5">
				<ItemList category={category} />
			</div>
		</>
	)
}

export default ItemListContainer

