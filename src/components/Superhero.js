import React from 'react';
import { useLocation } from 'react-router-dom';

/*...*/



function SuperHero(){
const location = useLocation();
const data = location.state;
return(
    <div className="superhero_description">
        <div className ="container">
            <div className="image_container">
                <img src={data.images.md} alt ={data.name}/>
            </div>
            <div className="results">
                <h3>{data.name}</h3>
                <div className="appearance">
                    <h1>Appearance</h1>
                <p>Eyecolor : {data.appearance.eyeColor}</p>
                <p>Gender : {data.appearance.gender}</p>
                <p>HairColor : {data.appearance.hairColor}</p>
                <p>Height : {data.appearance.height[0]}</p>
                <p>Race : {data.appearance.race}</p>
                <p>Weight : {data.appearance.weight[0]} </p>
                </div>
                <div className="biography">
                    <p>Alias: {data.biography.aliases.map(alias=><span>{alias}</span>)}</p>
                    <p>Alignment : {data.biography.alignment}</p>
                    <p>AlterEgos: {data.biography.alterEgos}</p>
                    <p>First Appearance: {data.biography.firstAppearance}</p>
                    <p>Full Name : {data.biography.fullName}</p>
                    <p>Place of Birth: {data.biography.placeOfBirth}</p>
                </div>
                <div className="connections">

                </div>
                <div className="powerstats">

                </div>
                <div className="slug">

                </div>
                <div className="work"></div>
            </div>
        </div>
        ${JSON.stringify(data)}
    </div>
)
}

export default SuperHero;