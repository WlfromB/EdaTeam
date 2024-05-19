import React from "react";

import { FooterLink } from "../footer-link";
import { StyledAllFooterLinks } from "./footer-links.styled";

const names=[
    "Саша",
    "Аделина",
    "Надя"
]

const links=[
    "https://t.me/someoneswm",
    "https://t.me/AdelinaSattarova",
    "https://t.me/nadenka_b"
]

export const FooterLinks = () => {
    return (
      <StyledAllFooterLinks className="all-links-tg">
        {names.map((name, index) => (
          <FooterLink key={index} name={name} href={links[index]} />
        ))}
      </StyledAllFooterLinks>
    );
};
