import React from "react";
import card from "../assets/card.png";
import money from "../assets/money.png";
import moewAudio from "../assets/cats/moew.mp3";

export default function Card({ item }) {
  const handleClick = (e) => {
    const parent = e.target;
    const audioEl = parent.querySelector("audio");
    audioEl.play();
    parent.classList.add("flip");
  };

  return (
    <div className="card" onClick={handleClick}>
      <audio>
        <source src={moewAudio} type="audio/mp3" />
      </audio>
      <div className="card_front">
        <img src={card} className="card_front_bg" />
        <h2>{item.catText}</h2>
        <img className="card_front_cat" src={item.catImg} />
      </div>
      <div className="card_back">
        <img src={money} className="card_back_img" />
        <p>{item.message}</p>
        <h2>{item.money}k</h2>
      </div>
    </div>
  );
}
