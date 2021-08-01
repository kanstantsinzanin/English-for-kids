import "./Header.scss";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import React, { FC, useState } from 'react';
import { Switch } from 'antd';
import 'antd/dist/antd.css';



interface flag {
  active: boolean;
  setActive: (active: boolean) => void;
  toggle: boolean;
  setToggle: (active: boolean) => void;
  setCheckReset: (active: boolean) => void;
}

function Header({ active, setActive, toggle, setToggle, setCheckReset }: flag) {
  return (
    <header className="header">
      <div className="burger__wrap" onClick={() => setActive(!active)}>
        <span className="header__burger"></span>
      </div>
      <div className="back" onClick={() => {
        setActive(false)
        setCheckReset(false);
      }}>
        <img src="../assets/img/back.png" alt="" className="header__back" />
        <Link to="/" className="header__link-back">
        </Link>
      </div>
      <div className="switch__block">
        <Switch onClick={() => {
          setToggle(!toggle)
          setCheckReset(false);
        }}/>
        <span className="switch__block-span">{toggle ? 'GAME' : 'TRAIN'}</span>
      </div>
    </header>
  );
}

export default Header;
