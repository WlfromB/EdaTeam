import React from "react";

import { Wrapper } from "./main.style";

import { Filters } from '../home-page-filters';
import { Recipes } from '../home-page-recipes';
import { NavPage } from '../home-page-nav-page';

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