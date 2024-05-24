import React, { useEffect, useState } from "react";
import { UserPageLeftBlock } from "../user-page-left-block";
import { UserPageRightBlock } from "../user-page-right-block";
import { StyledMain,
    StyledSection
 } from "./user-page-main.styled";
import { URLs } from "../../__data__/urls";

export const UserPageMain = ()=>
    {
        const [login, setLogin] = useState([])
        useEffect(()=>{
            fetch(`${URLs.api.main}/userpage-data`)
            .then(response=>response.json())
            .then(data=>{setLogin(data.data.loginname)})
        },[])    
        const [date, setDate] = useState([])
        useEffect(()=>{
            fetch(`${URLs.api.main}/userpage-data`)
            .then(response=>response.json())
            .then(data=>{setDate(data.data.datesignin)})
        },[])    
        
        
        return <StyledMain>        
        <StyledSection>            
            <UserPageLeftBlock/>            
            <UserPageRightBlock  />  
        </StyledSection>       
    </StyledMain>
    }