import React from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import style from './App.module.scss';


function App() {
  return (
    <div className={style.AppStyle}>
      <Forms />
      <List />
    </div>
  );
}

export default App;
