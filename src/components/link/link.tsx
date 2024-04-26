import React from "react";

// import './style.css';

export const Link = (props) => {
    return (
        <a className={props.ClassName} href={props.Href}>
            {props.children}
        </a>
    );
};