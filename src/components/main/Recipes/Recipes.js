import React from "react";
import { RecipesWrapper } from "../../../styles/styles";
import RecipesCard from "./RecipesCard";
import broccoli from "../../../assets/comida_1.svg"
import burger from "../../../assets/comida_2.svg"
import potato from "../../../assets/comida_3.svg"
import cobbler from "../../../assets/comida_4.svg"

const Recipes = () => {
    return (
        <RecipesWrapper>
            <div className="title-wrapp" id="recipes">
                <h2>Our Best Recipes</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="cards-generic-wrapp">
                <div className="cards-wrapp">
                    <RecipesCard img={broccoli} food="Broccoli Salad with Bacon" />
                    <RecipesCard img={burger} food="Classic Beef Burgers" />
                    <RecipesCard img={potato} food="Classic Potato Salad"  />
                    <RecipesCard img={cobbler} food="Cherry Cobbler on The Grill"  />
                </div>
            </div>
        </RecipesWrapper>
    );
};

export default Recipes;
