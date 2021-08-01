import React, { FC, useState, useEffect } from 'react';
import './Action.scss';
import { useHistory } from 'react-router-dom';
import cards from '../../Cards/Cards';
import { Card } from './Card/Card';
import starTrue from '../../../assets/img/startrue.png';
import starFalse from '../../../assets/img/starfalse.png';
import goodJob from '../../../assets/img/goodjob.png';
import badJoob from '../../../assets/img/badjoob.png';

let stars = [{ star: '' }];

type Props = {
  num: number;
  toggle: boolean;
  checkReset: boolean;
  setCheckReset: (setCheckReset: boolean) => void;
};

let excludeArr: any[] = [];
let filtredArr: any[] = [];
let countTrue = 0;
let countFalse = 0;

const Action: FC<Props> = ({
  num, toggle, checkReset, setCheckReset,
}) => {
  const history = useHistory();
  const [playsSong, setPlaysSong] = useState('');
  const [clickCheck, setClickCheck] = useState('false');
  const [changeButton, setChangeButton] = useState(true);
  const [checkStars, setCheckStars] = useState('');
  const cardsArr = [...cards[num]];
  const audioArr: any[] = [];
  cardsArr.forEach((i) => {
    audioArr.push(i.audioSrc);
  });
  function SoundPlay(src: string): void {
    const audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }
  useEffect(() => {
    if (clickCheck === 'true') {
      setClickCheck('wait');
      countTrue += 1;
      excludeArr.push(playsSong.substring(10));
      for (let i = 0; i < audioArr.length; i += 1) {
        if (excludeArr.indexOf(audioArr[i]) === -1) {
          filtredArr.push(audioArr[i]);
        }
      }
      const cardsPlay = Math.floor(Math.random() * filtredArr.length);
      setPlaysSong(`../assets/${filtredArr[cardsPlay]}`);
      filtredArr = [];
    }
    if (clickCheck === 'wait') {
      setClickCheck('');
      SoundPlay(playsSong);
    }
    if (clickCheck === 'none') {
      setClickCheck('');
      countFalse += 1;
    }
  });
  useEffect(() => {
    if (countTrue === 8) {
      setTimeout(() => {
        history.push('/');
        excludeArr = [];
        stars = [{ star: '' }];
        countTrue = 0;
        countFalse = 0;
      }, 3300);
    }
    if (checkStars === 'true') {
      stars.push({ star: starTrue });
      setCheckStars('');
    } else if (checkStars === 'false') {
      stars.push({ star: starFalse });
      setCheckStars('');
    }
  });

  const sortAndPlay = () => {
    const cardPlay = Math.floor(Math.random() * cards[num].length);
    setPlaysSong(`../assets/${cards[num][cardPlay].audioSrc}`);
    const playsSongFunc = `../assets/${cards[num][cardPlay].audioSrc}`;
    setChangeButton(false);
    SoundPlay(playsSongFunc);
  };
  const repeat = () => {
    SoundPlay(playsSong);
  };
  if (!checkReset) {
    excludeArr = [];
    stars = [{ star: '' }];
    countTrue = 0;
    countFalse = 0;
    setCheckReset(true);
  }

  if (toggle === false) {
    return (
      <div className="game__wrap">
        {cards[num].map((item, index) => (
          <Card item={item} toggle={toggle} key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="game__wrap">
      {countTrue === 8 && countFalse === 0 && (
        <div className="end">
          <img src={goodJob} alt="" className="end-img"/>
          <span className="end-span">
            Nice, u have
            {countFalse}
            {' '}
            mistake!
          </span>
        </div>
      )}
      {countTrue === 8 && countFalse !== 0 && (
        <div className="end">
          <img src={badJoob} alt="" className="end-img"/>
          <span className="end-span">
            Oh, u have
            {countFalse}
            {' '}
            mistake!
          </span>
        </div>
      )}
      <div className="stars">
        {stars.map((i) => (
          <img src={i.star} alt="" className="star" />
        ))}
      </div>
      {cards[num].map((item, index) => (
        <Card
          item={item}
          toggle={toggle}
          check={playsSong}
          key={index}
          clickCheck={clickCheck}
          setClickCheck={setClickCheck}
          setCheckStars={setCheckStars}
        />
      ))}
      <button
        className={changeButton ? 'start__game' : 'start__game clicked'}
        onClick={sortAndPlay}
        type="button"
      >
        Start Game
      </button>
      <div className={changeButton ? 'repeat__wrap unactive' : 'repeat__wrap'}>
        <button className="repeat__word" onClick={repeat} type="button">
          <img src="../assets/img/repeat.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default Action;
