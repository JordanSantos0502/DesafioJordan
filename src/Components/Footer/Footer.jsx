import React from "react";
import s from "./Footer.module.css";
import imgTextFooter from "./imgFooter/imgTextFooter.png";
export default function Footer() {
  return (
    <footer>
      <section className={s.textFooter}>
        <span>
          <h2>#1</h2>
          <h3>An agency business is a company that provides...</h3>
        </span>
        <img src={imgTextFooter} alt="" />
      </section>
      <section className={s.textFooterTwo}>
        <h4>
          An agency business is a company that provides a specialized service to
          their clients. Often, agencies act on behalf of another company,
        </h4>
        <p>Read More</p>
      </section>
    </footer>
  );
}
