import React, { useState } from 'react';
import './App.scss';
import {
  HashRouter as Router, Switch, Route,
} from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/main/main';
import Action from './components/game/Action/Action';
import Menu from './components/Menu/Menu';

function App() {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [toggle, setToggle] = useState<boolean>(false);
  const [checkReset, setCheckReset] = useState<boolean>(false);
  return (
    <>
      <Router>
        <Header active={menuActive} setActive={setMenuActive} toggle={toggle} setToggle={setToggle} setCheckReset={setCheckReset} />
        <Menu active={menuActive} setActive={setMenuActive} setCheckReset={setCheckReset} />
        <Switch>
          <Route exact path="/" component={() => <Main toggle={toggle} />} />
          <Route path="/action" component={() => <Action num={0} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
          <Route path="/action-b" component={() => <Action num={1} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
          <Route path="/animal-a" component={() => <Action num={2} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
          <Route path="/animal-b" component={() => <Action num={3} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
          <Route path="/clothes" component={() => <Action num={4} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
          <Route path="/emotions" component={() => <Action num={5} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
          <Route path="/fruits" component={() => <Action num={6} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
          <Route path="/transport" component={() => <Action num={7} toggle={toggle} checkReset={checkReset} setCheckReset={setCheckReset} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
