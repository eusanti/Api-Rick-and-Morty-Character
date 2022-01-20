import React, { useEffect } from "react";
import { useState } from "react";
import Cards from "../Pages/Cards"
import img01 from "../../assets/img01.jpg"
import "./Home.css"

const Home = () => {

  const [showCards, setShow] = useState(false)

  const showClick = () =>{
    setShow(!showCards)
  }

  return (
    <div>
      <header className="home">
        <h1>Welcome! Let's draw Rick and Morty story</h1>
        <p><img src={img01} alt="rick&morty"/></p>
    
        {showCards?(
          <div>
          <button className="button" onClick={showClick} >Close</button>
          <Cards/>
          
         </div>
        ) 
         : 
        (<button className="button" onClick={showClick} >List Characters</button>) }
        
      </header>
    </div>
  );
}

export default Home;
