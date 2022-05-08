import React from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getItem } from "../../data/data.js";
import { useEffect, useState } from "react";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
	const { articuloId } = useParams();

	useEffect(() => {
		if (articuloId === undefined) {
			getItem().then((resp) => setProduct(resp))
		} else {
			getItem().then((resp) => setProduct(resp[articuloId]))
		}
	}, [articuloId])

  return (
    <div className="flex justify-center mt-5">
        <ItemDetail producto={product}/>
    </div>
  )
}

export default ItemDetailContainer