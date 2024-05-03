import React from "react";

import { StyledRecipes } from "./recipes.style";

import { CardRecipe } from "../home-page-card-recipe";
import { recipes } from "../../assets"


const recipeList = [
    { src: recipes["pancakes_meat"], alt: "Фотография блинчиков с мясом, сыром и луком", href: "#01", name: "Блинчики с мясом, сыром и лучком" },
    { src: recipes["cheesecakes"], alt: "Фотография сырников из творога", href: "#02", name: "Сырники из творога" },
    { src: recipes["borsch"], alt: "Фотография борща", href: "#03", name: "Борщ" },
    { src: recipes["vareniki"], alt: "Фотография вареников", href: "#04", name: "Ленивые вареники" },
    { src: recipes["rice_porridge"], alt: "Фотография рисовой каши", href: "#05", name: "Рисовая каша" },
    { src: recipes["cutlets"], alt: "Фотография котлет по-киевски", href: "#06", name: "Котлеты по-киевски" },
    { src: recipes["draniki"], alt: "Фотография драников", href: "#07", name: "Драники" },
    { src: recipes["meringue"], alt: "Фотография безе", href: "#08", name: "Безе" },
    { src: recipes["goulash"], alt: "Фотография гуляша", href: "#09", name: "Гуляш" },
    { src: recipes["pancakes_cherries"], alt: "Фотография блинчиков с вишней и творожным сыром", href: "#10", name: "Блинчики с вишней и творожным сыром" },
    { src: recipes["canned_soup"], alt: "Фотография супа из рыбных консервов", href: "#11", name: "Суп из рыбных консервов" },
    { src: recipes["salad"], alt: "Фотография салата", href: "#12", name: 'Салат "Весенний"' }
];


export function Recipes() {
    return (
        <StyledRecipes>
            {recipeList.map((recipe, index) => (
                <CardRecipe key={index} srcImg={recipe.src} altImg={recipe.alt} Href={recipe.href} nameRecipe={recipe.name} />
            ))}
        </StyledRecipes>
    )
}