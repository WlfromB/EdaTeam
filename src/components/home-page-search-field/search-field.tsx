import React from "react";

import { FieldInput, FieldImg, FieldWrapper } from './serch-field.style'
import { SearchIcon } from "./index";


export const SearchField = ({ value, onChange, inputRef }) => {
    return (
        <FieldWrapper>
            <FieldImg src={SearchIcon} alt="Иконка лупы" />
            <FieldInput ref={inputRef} type="text" value={value} onChange={onChange} />
        </FieldWrapper>
    );
};