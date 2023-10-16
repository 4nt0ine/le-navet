import axios from 'axios';
import {  Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './styles/CardHome.css'

 

function ApiHome() {

  const [data, setData] = useState([]);
  console.log(data)

  const apiUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

 

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
          <img className='card-img' src={meal.strMealThumb}/>
          <div className='card-body'>
            <h2 className='card-title'>{meal.strMeal}</h2>
            <Link to={'/Recette/'} className='a'><div role='button' className='card-btn'>Recette</div></Link>
          </div>
        </div>
      )}
    </div>

  );

}

 
export default ApiHome;