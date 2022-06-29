import React from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import { Timer } from '../components/Timer';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
      <Timer />
    </div>
  );
}

export default App;
