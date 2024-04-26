import React from "react";

import { StageCooking } from "../stage-cooking";

import { StyledStagesCooking } from "./stages-cooking.styled";

const cookingStagesList = [
    "Смешать муку, молоко, яйца, сахар и соль в миске",
    "Добавить вишню в тесто и перемешать",
    "Вылить тесто на разогретую сковороду и обжарить с двух сторон до золотистого цвета",
    "Подавать блинчики, украсив творожным сыром сверху"
];

export const StagesCooking = (props) => {
    return (
        <StyledStagesCooking className="stages">
            {cookingStagesList.map((stage, index) => (
                <StageCooking key={index} name={stage} />
            ))}
        </StyledStagesCooking>
    );
};