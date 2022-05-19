import ItemList from "./ItemList/ItemList";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import {getDocs, getFirestore, collection, query, where} from 'firebase/firestore'

const ItemListContainer = () => {

	const {category} = useParams()

	const [items, setItems] = useState([]);

	const getItems = () => {
		const db = getFirestore();
		const items = [];
		if(category == undefined){
			const ref = collection(db, 'items');
			getDocs(ref).then((snapshot)=>{
				snapshot.docs.map(doc => items.push({'id': doc.id, ...doc.data()}));
				setItems(items);
			})
		} else {
			const ref = query(collection(db,'items'), where('category', '==', category));;
			getDocs(ref).then((snapshot)  => {
				snapshot.docs.map(doc => items.push({'id': doc.id, ...doc.data()}));
				setItems(items);
			})
		}
	}

	useEffect(()=>{
		getItems();
	}, [category])

	return (
		<>
			<div className="pt-5">
				<ItemList items={items} />
			</div>
		</>
	)
}

export default ItemListContainer

