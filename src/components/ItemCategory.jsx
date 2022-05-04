import React from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item.jsx';
import { productList } from "../data/data.js";
import { useEffect, useState } from "react";
import "../App.css";

const ItemCategory = () => {

    /* const {categoria} = useParams()
    const [ArticlesByC, setArticlesCons] = useState([])

    const getArticles = new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(productList)
        }, 1000)
    })

    const getArticlesFromDB = async() => {
        try{
            const result = await getArticles
            setArticlesCons(result.filter(m=> m.category == categoria))
            
        } catch(error){
            console.log(error)
            alert("No se pueden")
        }
    }

    console.log(useParams())


    
    useEffect(() => {
        getArticlesFromDB();
      }, []);  */

      const { categoryId } = useParams()
	const [category, setCategory] = useState()

	useEffect(() => {
		if (categoryId === undefined) {
			productList().then((resp) => setCategory(resp))
		} else {
			productList().then((resp) =>
				setCategory(resp.filter((product) => product.category === categoryId))
			)
		}
	}, [categoryId])


    return (
        <div className="flex justify-around grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          {
            
            category.length ? ( 
              
              <>
                {
                  
                  category.map((article) => {
                    
                    return (
                      <div key={article.id}>
                        <Item
                          name={article.name}
                          urlPicture={article.urlPicture}
                          price={article.price}
                          stock={article.stock}
                          id={article.id}
                          category={article.category}
                        />
                      </div>
                    );
                  })
                }
              </>
            ) : (
              <p>Cargando productos...</p>
            ) 
          }
        </div>
      );
}

export default ItemCategory



