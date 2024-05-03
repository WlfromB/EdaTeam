import React from "react";

import { Wrapper } from "./filters.style";

import { Ingredient } from "../home-page-ingredient";
import { Price } from "../home-page-price";

import { SearchIcon } from "./index";


const selectList = [
    { value: "", Name: "- Выберите категорию -" },
    { value: "breakfast", Name: "Завтраки" },
    { value: "lunches", Name: "Обеды" },
    { value: "dinners", Name: "Ужины" },
    { value: "soups", Name: "Супы" },
    { value: "main-dishes", Name: "Гарниры" },
    { value: "meat", Name: "Мясо" },
    { value: "fish", Name: "Рыба" },
    { value: "salads", Name: "Салаты" },
    { value: "pastries-&-desserts", Name: "Выпечка и десерты" }
];


export function Filters() {
    return (
        <Wrapper>
            <div className="search-bar">
                <img src={SearchIcon} alt="Иконка лупы" className="search-icon" />
                <input type="search" className="search-field" />
            </div>
            <Ingredient Title="Добавить ингредиент:" />
            <Ingredient Title="Исключить ингредиент:" />
            <label className="input-label">
                <select className="select-category">
                    {selectList.map((item, index) => (
                        <option key={index} value={item.value}>{item.Name}</option>
                    ))}
                </select>
            </label>
            <label className="input-label">
                <span className="input-title">Цена:</span>
                <div className="price-range">
                    <Price Title="от" />
                    <Price Title="до" />
                </div>
            </label>
        </Wrapper>)
}









