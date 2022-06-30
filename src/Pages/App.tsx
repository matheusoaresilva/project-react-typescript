import React, { useState } from 'react';
import Forms from '../components/Forms';
import List from '../components/List';
import  Timer  from '../components/Timer';
import { ITask } from '../types/tasks';
import style from './App.module.scss';


function App() {
  const [tasks, setTasks] = useState<ITask[] | []>([]);
  const [selected, setSelected] = useState<ITask>();

  function selectTask(taskSelected: ITask){
    setSelected(taskSelected);
    setTasks(oldTasks => oldTasks.map(task => ({
      ...task,
      selected: task.id === taskSelected.id ? true : false
    })));
  }
  
  function finishedTask() {
    if(selected) {
      setSelected(undefined);
      setTasks(oldTasks => oldTasks.map(task => {
        if(task.id === selected.id) {
          return {
            ...task,
            selected: false,
            completed: true
          }
        }
        return task;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Forms setTasks={setTasks}/>
      <List 
      tasks={tasks}
      selectTask={selectTask}
      />
      <Timer 
      selected={selected}
      finishedTask={finishedTask}/>
    </div>
  );
}

export default App;
