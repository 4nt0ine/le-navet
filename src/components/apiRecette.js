
import axios from 'axios';
import {  Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
 

function ApiRecette() {

  const [data, setData] = useState([]);
  console.log(data)

  const apiUrl = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772";

 

  useEffect(() => {

    // Effectuer la requête API lorsque le composant est monté

    axios.get(apiUrl)

      .then(response => {
        setData(response.data); // Stocker les données de la réponse dans votre state ou variable
        console.log(response.data);

      }).catch(error => {
        console.error("Erreur lors de la requête API : ", error);
        });
    }, []);

 

  return (

    <div className='carrer'>
      { data.meals && data.meals.map(meal  =>
      <div className='card'>
        <img className='card-img' src={meal.strMealThumb}/>     {/* image */}
        <h2 className='card-title'>{meal.strMeal}</h2>              {/* nom du plat */}
        <p>{meal.strInstructions}</p>                               {/* description */}
        <p>{meal.strIngredient1}</p>
      </div>
      )}
    </div>

  );

}

 
export default ApiRecette;