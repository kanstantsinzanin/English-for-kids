import "./Menu.scss";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

interface flag {
  active: boolean;
  setActive: (active: boolean) => void;
  setCheckReset: (active: boolean) => void;
}

export default function Menu({ active, setActive, setCheckReset }: flag) {
  return (
    <div className={active ? "menu__wrap active" : "menu__wrap"}>
      <span className="menu__cross" onClick={() => setActive(false)}></span>
      <nav className="header__nav">
        <ul className="header__ul">
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/" className="header__link">
              Main
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/action" className="header__link">
              Action A
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/action-b" className="header__link">
              Action B
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/animal-a" className="header__link">
              Animal A
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/animal-b" className="header__link">
              Animal B
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/clothes" className="header__link">
              Clothes
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/emotions" className="header__link">
              Emotions
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/fruits" className="header__link">
              Fruits
            </Link>
          </li>
          <li className="header__li" onClick={() => {
            setActive(false)
            setCheckReset(false)
            }}>
            <Link to="/transport" className="header__link">
              Transport
            </Link>
          </li>
        </ul>
      </nav>
      <div className="close__menu" onClick={() => setActive(false)}></div>
    </div>
  );
}
