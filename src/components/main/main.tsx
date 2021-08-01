import './main.scss';
import actionImg from './images/action.jpg';
import swimJpg from './images/swim.jpg';
import animalA from './images/animalA.jpg';
import animalB from './images/animalB.jpg';
import clothes from './images/clothes.jpg'
import emothions from './images/smile.jpg';
import fruits from './images/fruits.jpg';
import transport from './images/transport.png'
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

interface ICatch {
  toggle: boolean;
}

const cardList = [
  {
    photo: actionImg,
    name: 'Action (set A)',
    link: '/action'
  },
  {
    photo: swimJpg,
    name: 'Action (set B)',
    link: '/action-b'
  },
  {
    photo: animalA,
    name: 'Animal (set A)',
    link: '/animal-a'
  },
  {
    photo: animalB,
    name: 'Animal (set B)',
    link: '/animal-b'
  },
  {
    photo: clothes,
    name: 'Clothes',
    link: '/clothes'
  },
  {
    photo: emothions,
    name: 'Emotions',
    link: '/emotions'
  },
  {
    photo: fruits,
    name: 'Fruits',
    link: '/fruits'
  },
  {
    photo: transport,
    name: 'Transport',
    link: '/transport'
  }
]

export default function Main({ toggle }:ICatch) {
  return (
    <main className="main">
        {cardList.map((item) => {
          return (
            <div className={toggle ? "card__wrapper-main active" : "card__wrapper-main"}>
              <Link to={item.link} className="card__link-main "/>
              <div className="card-main ">
                <img src={item.photo} alt="action" className="card__img-main "/>
                <span className="card__span-main ">{item.name}</span>
              </div>
            </div>
          );
        })}
    </main>
  );
}