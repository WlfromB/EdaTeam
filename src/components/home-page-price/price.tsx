import React from "react";

import { StyledPrice } from "./price.style";

export const Price = (props: any) => {
    return (
        <StyledPrice>
            <p className="text-price">{props.Title}</p>
            <input type="number" className="input-price" />
        </StyledPrice>
    );
};
