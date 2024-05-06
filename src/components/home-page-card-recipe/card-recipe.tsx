import React from "react";

import { Wrapper } from "./card-recipe.style";
import { Link } from "../link";

export const CardRecipe = (props) => {
    return (
        <Wrapper>
            <img className="img-recipe" src={props.srcImg}
                alt={props.altImg} />
            <div className="for-name-recipe">
                <Link ClassName="name-recipe" Href={props.Href}>{props.nameRecipe}</Link>
            </div>
        </Wrapper>
    );
};
