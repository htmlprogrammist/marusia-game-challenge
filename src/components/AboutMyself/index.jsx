import React from 'react'
import './style.css'
import img from "../../images/logo-grad.png";

function AboutMyself() {
  return (
    <section className="logo">
      <img className="logo-img" src={img} alt="logo-white"/>
      <h1>Егор Бадмаев</h1>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a className="link" target="_blank" href="https://github.com/htmlprogrammist">GitHub |</a>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a className="link" target="_blank" href="https://vk.com/htmlprogrammist"> ВКонтакте |</a>
      <a className="link"> Telegram: @htmlprogrammist</a>
      <p className="description-about__myself">Меня зовут Бадмаев Егор. Мне 16 лет, проживаю в городе Элиста,
        Республика Калмыкия.</p>
      <p className="description-about__myself">Я учусь в МБОУ "Элистинский лицей", которое входит в ТОП-100 лучших
        школ России.</p>
      <p className="description-about__myself">Занимаюсь программированием уже 1 год.</p>
    </section>
  )
}

export default AboutMyself;
