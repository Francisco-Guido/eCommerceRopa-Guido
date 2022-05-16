import React, { useState } from 'react'
import { useEffect } from 'react'
import { useCartContext } from '../context/CartContext'
import ItemCart from './ItemCart/ItemCart'
import Wait from './ItemCart/Wait'

const Cart = () => {
	
    const {cart, deleteCart} = useCartContext()

    const emptyListHandler = () => {deleteCart()}


	if(cart.length ===  0){
		return <Wait/>
	}


	const sumall = cart.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
	console.log(sumall);

	

  return (
    (
		<>
			<div className="flex flex-col justify-around ">
				
				{
					cart.map((producto) => (
						
						<ItemCart
							key={producto.id} producto={producto}
						/>
						
					))}
					<div className="flex justify-center">
					<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded h-10 w-36" onClick={emptyListHandler}>
          				Remover todo
        			</button>
					<h1></h1>
					</div>
                    
			</div>
		</>
	)
  )
}

export default Cart