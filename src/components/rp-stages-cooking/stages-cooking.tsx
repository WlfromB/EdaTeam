import React from "react";

import { StageCooking } from "../rp-stage-cooking";
import { StyledStagesCooking } from "./stages-cooking.styled";

export const StagesCooking = (data:any) => {
    console.log(data)
    return (
        <StyledStagesCooking className="stages">
            
                <StageCooking name={data.data.data} />
            
        </StyledStagesCooking>
        
    );
};