import React from 'react'
import "./RecipeTile.css"

export default function RecipeTile({ recipe }) {
    return (
   <div className="recipeTile">
    <img onClick={()=>  window.open(recipe["recipe"]["url"])} className="recipeTile___img" src={recipe["recipe"]["image"]} />
    <p className="recipeTile___name">{recipe["recipe"]["label"]}</p>
    </div>
  );
}
