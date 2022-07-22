import './App.css';
import Axios from "axios";
import { useState } from "react";
import RecipeTile from './RecipeTile';

function App() {
const [query, setquery] = useState("");
const [recipes, setrecipes] = useState([]);
const [healthLabel, sethealthLabel] = useState("vegan");
const YOUR_APP_ID = "7f161bc2";
const YOUR_APP_KEY = "88ef491b3497edf11b1c2257192cd098";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  }
  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1>Recipe Finder</h1>
      <form className="app___searchForm" onSubmit={submit}>
      <input type="text" className="app___input" placeholder="Enter Ingredient"
      value={query} onChange={(e) => setquery(e.target.value)}
      />
      <input type="submit" className="app___searchButton" value="Search" />
      <select className="app_healthLabels">
      <option onClick={()=> sethealthLabel("alcohol-free")}>Alcohol-Free</option>
        <option onClick={()=> sethealthLabel("vegan")}>Vegan</option>
        <option onClick={()=> sethealthLabel("vegetarian")}>Vegetarian</option>
        <option onClick={()=> sethealthLabel("diary-free")}>Diary-Free</option>
        <option onClick={()=> sethealthLabel("low-sugar")}>Low-Sugar</option> 
        <option onClick={()=> sethealthLabel("egg-free")}>Egg-free</option>
      </select>
      </form>
      <div className='app___recipes'>
        {recipes.map(recipe => {
         return <RecipeTile recipe={recipe} />;
         })}
      </div>
    </div>
  );
}

export default App;
