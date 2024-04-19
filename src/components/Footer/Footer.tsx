import React from "react";
import { Link } from "../Link";
import { logo_img } from "./index";
import { logo_tg } from "../../assets";
import './style.css';
export const Footer = (props)=>{
    return <footer> 
    <div className="all-links-tg"> 
      <Link Href="https://t.me/someoneswm" ClassName="link-tg"> 
        <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
        <span className="link-tg-text">Саша</span> 
      </Link> 
      <Link Href="https://t.me/AdelinaSattarova" ClassName="link-tg"> 
        <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
        <span className="link-tg-text">Аделина</span> 
      </Link> 
      <Link Href="https://t.me/nadenka_b" ClassName="link-tg"> 
        <img className="logo-tg" src={logo_tg} alt="Логотип телеграма"/> 
        <span className="link-tg-text">Надя</span> 
      </Link> 
    </div> 
    <Link Href="#"> 
      <img className="logo-footer" src={logo_img} alt="Логотип сайта"/> 
    </Link> 
  </footer>      
}