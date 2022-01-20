import { useState, useEffect } from "react";
import React from "react";
import RickMortyService from "../../services/rick&morty.service"
import "./Cards.css"

const Card = () => {

  const rickMortyService = new RickMortyService()
  const [characters, setCharacters] = useState([])

  const allCharacters = () => {
    
    rickMortyService
    .getAllCharacter()
    .then((characters) => {setCharacters(characters.data.results)})
    .catch((err) => console.error(err))
  };

  useEffect(() => {
      allCharacters() 
      
  }, []);  

  return (
    <>
      <h1>Our characters!</h1>
      <div className="cards">
        {characters?.map(elm => 
        <div key={elm.id} className="cardsItem">
            <h3>{elm.name}</h3>
            {elm.status}<br></br>
            {elm.species}<br></br>
            <img src={elm.image} alt={elm.name}/>
        </div>
        )}
       </div>
    </>
  );
}

export default Card;
