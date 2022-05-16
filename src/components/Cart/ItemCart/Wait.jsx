import React from 'react'
import { Link } from 'react-router-dom'

const Wait = () => {
  return (
    <div className="flex flex-col justify-center content-center">
        <h1 className="text-2xl font-semibold">El carrito está vacio</h1>
        <div>

        </div>
        <div className="flex justify-center">    
        <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded h-10 w-36 mt-5" to={`/`}>
            Ver catálogo
        </Link> 
		</div>
    </div>
  )
}

export default Wait