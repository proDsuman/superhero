import React, { useState, useEffect } from 'react';
import imagehero from '../images/loading_hero.gif';


function Superherocard({data}) {
    const [imageLoading, setImageLoading] = useState(true);
    const [inputData, setInputData] = useState();

    function HandleChange(event){
       setInputData(event.target.value)
    }


    return(
        <div className= 'superherocard' >
            <div className='imageContainer'>
              <img src= {!imageLoading ? imagehero : data.images.md} alt={data.id} value={inputData} onChange={HandleChange}/>
            </div>
            <div className='information'>
            <h3>{data.name}</h3>

            </div>
        </div>
    )

}

export default Superherocard;