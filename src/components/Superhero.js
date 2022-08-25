import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';

/*...*/


// INstructions to follow;
    // 1. first change all p tags to input tags with disable
    // 2. Two Buttons edit and save. Edit will just enable input type text
    // 3. const [newname, setnewName] use State apply to all other attributes like weight, size, biography just need useState
    /// 4. put all input data to axios post . see comments 

function SuperHero(){
const location = useLocation();
const data = location.state;

function edit(){
    //First list the data in input text with disable 
    //onClick change all input to enabled.

    // GOOGLE 
}

const [newName, setnewName] = useState();
//do same for all other attributes
// if array useState([]);
function save(){
    try{
        axios.post(`https://akabab.github.io/superhero-api/api/${data.id}`,{
        name: newName,
        //repeat same for every all other steps,

        /// we are trying to update that list all at once
        
        }).then(res=>{
            console.log(res)
        })
    }
  catch(err){
console.log(err);
  }


}


return(
    <div className="superhero_description">
        <div className ="container">
            <div className="image_container">
                <img src={data.images.md} alt ={data.name}/>
            </div>
            <div className="results">
                <input type="text" value ={data.name} onChange={(e)=>setnewName(e.target.value)}/>
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
       <input type= "button" value ="Edit" onClick={edit}/>

       
       <input type ="button" value ="Save" style="display:none" onClick ={save}/>
    </div>
)
}

export default SuperHero;