import React from "react";
import { RecipesCardWrapper } from "../../../styles/styles";

const RecipesCard = (props) => {
    return(
        <RecipesCardWrapper>
            <img src={props.img} alt={props.food}/>
            <div>
                <h3>{props.food}</h3>
                <button>See Recipe</button>
            </div>
        </RecipesCardWrapper>
    )
};

export default RecipesCard;
