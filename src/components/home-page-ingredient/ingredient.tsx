import React from "react";

import { Wrapper } from "./ingredient.style";

export const Ingredient = (props: any) => {
    return (
        <Wrapper>
            <span className="input-title">{props.Title}</span>
            <input type="text" className="input-ingredient" />
        </Wrapper>
    );
};
