import React, { useState, useEffect, useRef } from "react";

import { Wrapper, Filters } from "./main.style";


import { Ingredient } from "../home-page-ingredient";
import { Price } from "../home-page-price";
import { SearchField } from "../home-page-search-field";
import { Recipes } from '../home-page-recipes';
import { NavPage } from '../home-page-nav-page';
import { URLs } from "../../__data__/urls";


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

export function HomePageMain() {
    const [searchValue, setSearchValue] = useState("");
    const [selectedTag, setSelectedTag] = useState("- Выберите категорию -");
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${URLs.api.main}/homepage-data`)
            .then(response => response.json())
            .then(data => {
                setData(data.data)
            })
    }, [])

    const [filteredCards, setFilteredCards] = useState([]);
    useEffect(() => {
        setFilteredCards(data);
    }, [data]);

    const searchInputRef = useRef<any>();
    useEffect(() => {
        searchInputRef.current.focus();
    }, []);
    const handleSearchChange = (e) => {
        const value = e.currentTarget.value;
        setSearchValue(value);
    };

    const handleTagChange = (e) => {
        const value = e.currentTarget.value;
        setSelectedTag(value);
    }

    useEffect(() => {
        setFilteredCards(
            data.filter((item) => {
                return (
                    item.name.toLowerCase().includes(searchValue.toLowerCase()) && (selectedTag === "- Выберите категорию -" || item.category.find((cat) => cat === selectedTag))
                );
            })
        )
    }, [searchValue, selectedTag]);
    return (
        <Wrapper>
            <div className="main-part">
                <Filters>
                    <SearchField
                        value={searchValue}
                        onChange={handleSearchChange}
                        inputRef={searchInputRef}
                    />
                    <Ingredient Title="Добавить ингредиент:" />
                    <Ingredient Title="Исключить ингредиент:" />
                    <label className="input-label">
                        <select className="select-category" onChange={handleTagChange} value={selectedTag}>
                            {selectList.map((item, index) => (
                                <option key={index} value={item.Name}>{item.Name}</option>
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
                </Filters>
                <Recipes cards={filteredCards} />
            </div>
            <NavPage />
        </Wrapper>
    )
}