import React from "react";

import { Wrapper } from "./main.style";

import { Filters } from '../filters';
import { Recipes } from '../recipes';
import { NavPage } from '../nav-page';

export function HomePageMain() {
    return (
        <Wrapper>
            <div className="main-part">
                <Filters />
                <Recipes />
            </div>
            <NavPage />
        </Wrapper>
    )
}