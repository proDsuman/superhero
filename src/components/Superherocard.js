import React, { useState, useEffect } from 'react';
import imagehero from '../images/loading_hero.gif';
import { Link } from 'react-router-dom';
import SuperHero from './Superhero';
function Superherocard({data}) {
    const [imageLoading, setImageLoading] = useState(true);
  
    const hero = data["name"];
    
    return(
        <Link to ={`SuperHero/${hero}`} state={data}>
        <div className= 'superherocard' >
            <div className='imageContainer'>
              <img src= {!imageLoading ? imagehero : data.images.md} alt={data.id} />
            </div>
            <div className='information'>
            <h3>{data.name}</h3>

            </div>
        </div>
        </Link>
    )

}

export default Superherocard;