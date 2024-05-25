import React, { useEffect, useRef, useState } from "react";

import { Wrapper , Filters} from "./main.style";
import { Ingredient } from "../home-page-ingredient";
import { Price } from "../home-page-price";
import { SearchField } from "../home-page-search-field";
import { Recipes } from '../home-page-recipes';
import { NavPage } from '../home-page-nav-page';
import { URLs } from "../../__data__/urls";


export const HomePageMain = () => {
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
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const searchInputRef = useRef<any>();
    const [searchValue, setSearchValue] = useState("");
    const [selectedTag, setSelectedTag] = useState("- Выберите категорию -");
    useEffect(() => {
        searchInputRef.current.focus();
    }, []);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(`${URLs.api.main}/main/recipes`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                const result = await response.json();

                if (response.ok) {
                    setData(result.data);
                } else {
                    setError(result.message);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRecipes();
    }, []);
    const [filteredCards, setFilteredCards] = useState([]);
    useEffect(() => {
        setFilteredCards(data);
    }, [data]);
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
                <Recipes cards={filteredCards} error={error}/>
            </div>
            <NavPage />
        </Wrapper>
    );
};