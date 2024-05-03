import React from "react";

import { Wrapper } from "./card-recipe.style";


export const CardRecipe = (props) => {
    return (
        <Wrapper>
            <img className="img-recipe" src={props.srcImg}
                alt={props.altImg} />
            <div className="for-name-recipe">
                <a className="name-recipe" href={props.Href}>{props.nameRecipe}</a>
            </div>
        </Wrapper>
    );
};
