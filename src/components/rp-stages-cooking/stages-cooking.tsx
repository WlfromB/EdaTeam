import React, { useEffect, useState } from "react";

import { StageCooking } from "../rp-stage-cooking";
import { StyledStagesCooking } from "./stages-cooking.styled";

export const StagesCooking = () => {
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