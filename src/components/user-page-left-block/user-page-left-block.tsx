import React, { useState } from "react";

import { UserPageDishes } from "../user-page-dishes.ts/user-page-dishes";
import { Link } from "../link";
import {StyledLeftBlockes} from "./user-page-left-block.styled";
import { RecipeForm } from "../recipe-add-from/recipe-add-form";
import { Modal } from "../modal-add-recipe/modal-add-recipe";
import { URLs } from "../../__data__/urls";

export const UserPageLeftBlock = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

const handleOpenModal = () => {
    setIsModalOpen(true);
};

const handleCloseModal = () => {
    setIsModalOpen(false);
};

const handleAddRecipe = async (formData) => {
    try {
        const response = await fetch(`${URLs.api.main}/recipe/add-recept`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('Error adding recipe:', errorData.message);
        } else {
            const data = await response.json();
            console.log('Recipe added:', data);
            handleCloseModal(); // Закрыть модальное окно после успешного добавления рецепта
        }
    } catch (error) {
        console.error('Error adding recipe:', error);
    }
};

return (
    <StyledLeftBlockes className="left-block">
        <StyledLeftBlockes className="favorites-block">
            <UserPageDishes />
        </StyledLeftBlockes>
        <StyledLeftBlockes className="add-recept-block">
            <Link ClassName="add-recept-a" onClick={handleOpenModal}>
                Добавить рецепт
            </Link>
        </StyledLeftBlockes>
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
            <RecipeForm onSubmit={handleAddRecipe} />
        </Modal>
    </StyledLeftBlockes>
);
}