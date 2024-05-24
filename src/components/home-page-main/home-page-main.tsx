import React, { useEffect, useState } from "react";

import { Wrapper } from "./main.style";

import { Filters } from '../home-page-filters';
import { Recipes } from '../home-page-recipes';
import { NavPage } from '../home-page-nav-page';
import { URLs } from "../../__data__/urls";

// export const HomePageMain = ()=>  {
//     return (
//         <Wrapper>
//             <div className="main-part">
//                 <Filters />
//                 <Recipes />
//             </div>
//             <NavPage />
//         </Wrapper>
//     )
// }

export const HomePageMain = () => {
    const [recipes, setRecipes] = useState([]);
    const [error, setError] = useState(null);

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
                    setRecipes(result.data);
                } else {
                    setError(result.message);
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <Wrapper>
            <div className="main-part">
                <Filters />
                <Recipes recipes={recipes} error={error} />
            </div>
            <NavPage />
        </Wrapper>
    );
};