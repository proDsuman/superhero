import React, { useState, useEffect } from 'react';
import '../css/Home.css';
import axios from 'axios';
import Superherocard from './Superherocard';




function Home() {
  var url = 'https://akabab.github.io/superhero-api/api/';
  const [Hero, setHero] = useState([]);
  const [Loading, setLoading] =useState('');
  const [inputData, setInputData] = useState();

  function HandleChange(event){
     setInputData(event.target.value);

  }

  const fetchHeroes= async(setData) =>{
    try{
    await axios.get(`${url}/all.json`).then(res=>{
      if(setData == ''){
        setHero(res.data);
      }
      else{
        let  results = res.data['name'].includes(setData);
        setHero([results]);
      }
      setLoading(false);
    })
    }catch(error){
        console.log(error);
    }
  
}
  
  useEffect(()=>{
   fetchHeroes(inputData ? inputData : '')
   let results = Hero.filter(hero => hero["name"].includes(inputData));
   setInputData(inputData);
   setHero(results);
   console.log(Hero);
  },[inputData])
  return (
    <div className="App">
      <h1>SuperHeroes</h1>
      <div className="inputWrapper">
        <input type="text" className='search' placeholder='Search Your Favourite Superhero' onChange={HandleChange} value={inputData}/>
        <input type ="button" value ='Search' className='search_button'/>
      </div>
         {!Loading ? <><div className='wrapper'>
                {Hero.map(hero =>
                    <Superherocard key={hero.id}  data={hero}/>
                )}
            </div>
            </>

                : (<h1> Superhero is Loading</h1>)}
    </div>

   
  );
}

export default Home;
