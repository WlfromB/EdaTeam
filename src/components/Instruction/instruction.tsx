import React from "react";

import { StagesCooking } from "../stages-cooking";
import { TitleInstruction } from "../title-instruction";

import { StyledInstruction } from "./instruction.styled";

export const Instruction = (props)=>{
    return   <StyledInstruction className="instruction"> 
                <TitleInstruction/>
                <StagesCooking/>
            </StyledInstruction>
  
}