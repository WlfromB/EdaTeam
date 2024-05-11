import React, { useEffect, useState } from "react";

import { StageCooking } from "../rp-stage-cooking";

import { StyledStagesCooking } from "./stages-cooking.styled";

// const cookingStagesList = [
//     "Смешать муку, молоко, яйца, сахар и соль в миске",
//     "Добавить вишню в тесто и перемешать",
//     "Вылить тесто на разогретую сковороду и обжарить с двух сторон до золотистого цвета",
//     "Подавать блинчики, украсив творожным сыром сверху"
// ];

export const StagesCooking = (props) => {
    const [data, setData] = useState([])
    useEffect(() => {
    fetch('/api/recipe-data')
    .then(response => response.json())
    .then(data => {
      setData(data.stages)
    })
  }, [])

    return (
        <StyledStagesCooking className="stages">
            {data.map((stage, index) => (
                <StageCooking key={index} name={stage} />
            ))}
        </StyledStagesCooking>
        
    );
};