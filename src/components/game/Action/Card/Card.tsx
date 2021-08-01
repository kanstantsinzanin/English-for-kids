import React, { FC, useState } from "react";
import ICard from "../../../Interfaces/ICard";
import { Howl } from "howler";
import "./Card.scss";

type CardProps = {
  item: ICard;
  toggle: boolean;
  check?: string;
  clickCheck?: string;
  setClickCheck?: (active: string) => void;
  setCheckStars?: (active: string) => void;
};

export const Card: FC<CardProps> = ({
  item,
  toggle,
  check,
  clickCheck,
  setClickCheck,
  setCheckStars
}) => {
  const [isActive, setActive] = useState(false);
  const [isTrue, setIsTrue] = useState(false);
  const checkSong = () => {
    if (check !== "") {
      if (check == `../assets/${item.audioSrc}`) {
        setIsTrue(true);
        SoundPlay('../assets/audio/correct.mp3')
        setCheckStars!('true');
        setTimeout(() => setClickCheck!("true"), 500)
      } else {
        SoundPlay('../assets/audio/error.mp3');
        setCheckStars!('false');
        setTimeout(() => setClickCheck!("none"), 500)
      }
    } else {
      console.log("Nachni");
    }
  };

  const SoundPlay = (src: string) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };
  const handleToggle = () => {
    setActive(!isActive);
  };

  if (toggle == false) {
    return (
      <div className={isActive ? "card active" : "card"}>
        <div className="card__inner">
          <div className="card__front">
            <img
              src={`../assets/${item.image}`}
              alt="actionA"
              className="card__img"
            />
            <span className="card__span">{item.word}</span>
            <div className="card__activity">
              <img
                src="../assets/img/flip.png"
                alt=""
                onClick={handleToggle}
                className="card__flip"
              />
              <img
                src="../assets/img/sound.png"
                alt=""
                onClick={() => SoundPlay(`../assets/${item.audioSrc}`)}
                className="card__sound"
              />
            </div>
          </div>
          <div className="card__back">
            <img
              src={`../assets/${item.image}`}
              alt="actionA"
              className="card__img"
            />
            <span className="card__span">{item.translation}</span>
            <div className="card__activity">
              <img
                src="../assets/img/flip.png"
                alt=""
                onClick={handleToggle}
                className="card__flip"
              />
              <img
                src="../assets/img/sound.png"
                alt=""
                onClick={() => SoundPlay(`../assets/${item.audioSrc}`)}
                className="card__sound"
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card__inner">
          <div
            className={
              isTrue ? "card__front active false" : "card__front active" 
            } onClick={checkSong}
          >
            <img
              src={`../assets/${item.image}`}
              alt="actionA"
              className="card__img"
            />
          </div>
        </div>
      </div>
    );
  }
};
