import React from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
import {getDocs, getFirestore, collection} from 'firebase/firestore'

const ItemDetailContainer = () => {

	const { articulo } = useParams()

	const [items, setItems] = useState([]);

	useEffect(()=>{
		const db = getFirestore();
		const itemCollection = collection(db, 'items');

		getDocs(itemCollection).then((snapshot)=> {
			const result = snapshot.docs.find(x => x.id === articulo);
			setItems({ id: result.id, ...result.data()  });
		})
	}, [articulo])


  return (
    <div className="flex justify-center mt-5">
        <ItemDetail items={items}/>
    </div>
  )
}

export default ItemDetailContainer