import React from "react";

import { StyledNav } from "./nav-page.style";
import { NavLink } from "../home-page-nav-page-link";

const navList = [
    { line: false, href: "", Title: "⬅" },
    { line: false, href: "", Title: "1" },
    { line: true, href: "#2", Title: "2" },
    { line: true, href: "#3", Title: "3" },
    { line: true, href: "#4", Title: "4" },
    { line: true, href: "#5", Title: "5" },
    { line: false, href: "#2", Title: "⮕" },
];

export function NavPage() {
    return (
        <StyledNav>
            <ul className="nav-list">
                {navList.map((element, index) => (
                    <li key={index}>
                        <NavLink line={element.line} Href={element.href}>{element.Title}</NavLink>
                    </li>
                ))}
            </ul>
        </StyledNav>
    )
}