import React, { useEffect, useState } from 'react'
import starshipsDetail from "./starshipsDetail"

const StarshipsContainer = () => {

const [starships, setStarships] = useState ([])

useEffect(()=>{
    getStarships()
}, [])

const getStarships = (second) => {
    const URL = 'https://swapi.dev/api/starships'

    fetch(URL)
        .then(response => 
             response.json() //Si saco las {} puedo sacar el return
        )
        .then(data => {
            /* console.log(data.results) */
            setStarships(data.results)
           /*  data.results.forEach(e => {
                console.log(e.name)
            }) */
        })
}

  return (
    <div> {starships.map (s=><starshipsDetail starship={s} />)} </div>
  )
}

export default StarshipsContainer