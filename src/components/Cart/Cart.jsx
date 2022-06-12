import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart/ItemCart'
import Wait from './ItemCart/Wait'
import { generateOrder, updateStock } from '../firebase/firebaseService'
import Fincompra from './Fincompra'


const initialBuyer = {
	name: "",
	phone: "",
	email: ""
}

const Cart = () => {
	
    const {cart, deleteCart} = useCartContext()

    const emptyListHandler = () => {deleteCart()}

	const [buyer, setBuyer] = useState(initialBuyer)

	const handlerSubmit = (e) => {
		e.preventDefault()
		if (buyer.name !== "" && buyer.phone !== "" && buyer.email !== "" ){
			generateOrder(order)
				.then((res)=>{
					alert('Tu orden ha sido enviada con exito! Tu numero es: ' + res.id)
					
				})
				.then(()=> cart.forEach( item => updateStock(item.id, item.quantity)))
				.then(()=> deleteCart())
				.catch (
					(err) => console.log("error")
				)

		} else {
			alert("Debe ingresar sus datos para poder finalizar la compra")
		}
	}

	const handlerChange = (e) => {
		setBuyer({
			...buyer,
			[e.target.name]: e.target.value,
		})
	}

	const sumall = cart.map(item => item.price * item.quantity).reduce((prev, curr) => prev + curr, 0);

	const order = {
		buyer,
		item: cart,
		sumall,
	}


	if(cart.length ===  0){
		return <Wait/>
	}


	
	


  return (
    (
		<>
			<div className="flex flex-col justify-around">
			
				{
					cart.map((producto) => (
						
						<ItemCart
							key={producto.id} producto={producto}
						/>
						
					))}
					<div className="flex flex-col justify-center items-center">
							
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded h-10 w-36 content-center mt-5" onClick={emptyListHandler}>
								Remover todo
							</button>
							<form
							class="flex flex-col"
							onSubmit = {handlerSubmit}
							onChange = {handlerChange}
							>
								<h1 className="text-2xl mt-5">Total a pagar: {sumall}</h1>
								<input type="text" placeholder="Nombre" name="name" value={order.name} class="input input-bordered input-info w-full max-w-xs mt-3" />
								<input type="number" placeholder="Telefono" name="phone" value={order.phone} class="input input-bordered input-info w-full max-w-xs mt-3" />
								<input type="email" placeholder="Email" name="email" value={order.email} class="input input-bordered input-info w-full max-w-xs mt-3" />
								<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">Finalizar compra</button>
							</form>
					
					</div>
                    
			</div>

		</>
	)
  )
}

export default Cart