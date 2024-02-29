import React from "react";
import s from "./Main.module.css";
import textMain from "./imgMain/textMain.png";
import imgMainOne from './imgMain/imgMainOne.png'
import imgMainTwo from './imgMain/imgMainTwo.png'
export default function Main() {
  return (
    <main>
      <section className={s.textMain}>
          <h2>
            Digital Agency With sOlId DesiGN <img className={s.imgTexMain} src={textMain} alt="" />
          </h2>
          <p>
            An agency business is a company that provides a specialized service
            to their clients. Often, agencies act on behalf of{" "}
          </p>
          <button>Get Started</button>
      </section>
      <section className={s.imgMain}>
          <img className={s.imgMainOne} src={imgMainOne} alt="" />
          <img className={s.imgMainTwo} src={imgMainTwo} alt="" />
      </section>
    </main>
  );
}
