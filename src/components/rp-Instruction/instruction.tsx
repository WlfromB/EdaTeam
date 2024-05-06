import React from "react";

import { StagesCooking } from "../rp-stages-cooking";
import { TitleInstruction } from "../rp-title-instruction";

import { StyledInstruction } from "./instruction.styled";

export const Instruction = (props)=>{
    return   (
    <StyledInstruction className="instruction"> 
        <TitleInstruction/>
        <StagesCooking/>
    </StyledInstruction>
    );
}