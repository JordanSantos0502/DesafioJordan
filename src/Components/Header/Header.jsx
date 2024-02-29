import React from "react";
import s from "./Header.module.css";
import logoHeader from "./imgHeader/logoHeader.png";
export default function Header() {
  return (
    <header>
      <div className={s.logo}>
        <img src={logoHeader} alt="" />
        <p>Golin</p>
      </div>
      <ul className={s.menuHeader}>
        <li>Home</li>
        <li>About Us</li>
        <li>How it Work</li>
        <li>Pricing</li>
      </ul>
      <button className={s.buttonHeader}>Sign up</button>
    </header>
  );
}
