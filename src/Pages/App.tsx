import React, { useState } from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import { Timer } from '../components/Timer';
import { ITask } from '../types/tasks';
import style from './App.module.scss';


function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List tasks={tasks}/>
      <Timer />
    </div>
  );
}

export default App;
