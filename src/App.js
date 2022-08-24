import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Superherocard from "./components/Superherocard";

function App() {
  var url = "https://akabab.github.io/superhero-api/api/";
  const [Hero, setHero] = useState([]);
  const [Loading, setLoading] = useState("");
  const [inputData, setInputData] = useState();
  const [renderComponent, setrenderComponent] = useState(false);

  function HandleChange(event) {
    setInputData(event.target.value);
  }
  function loadSuperhero(name) {}
  const fetchHeroes = async () => {
    try {
      await axios.get(`${url}/all.json`).then((res) => {
        setHero(res.data);
        setLoading(false);
        console.log(Hero);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHeroes();
  }, []);
  return (
    <div className="App">
      <h1>SuperHeroes</h1>
      <div className="inputWrapper">
        <input
          type="text"
          className="search"
          placeholder="Search Your Favourite Superhero"
          onChange={HandleChange}
          value={inputData}
        />
        <input
          type="button"
          value="Search"
          className="search_button"
          onClick={loadSuperhero(inputData)}
        />
      </div>
      {!Loading ? (
        <>
          <div class="wrapper">
            {Hero.map((hero) => (
              <Superherocard key={hero.id} data={hero} />
            ))}
          </div>
        </>
      ) : (
        <h1> Superhero is Loading</h1>
      )}
    </div>
  );
}

export default App;
