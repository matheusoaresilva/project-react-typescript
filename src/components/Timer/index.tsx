import { useState } from 'react';
import { timeForSec } from '../../common/utils/date';
import { ITask } from '../../types/tasks';
import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';

interface Props {
  selected: ITask | undefined;
}

export default function Timer({ selected }: Props) {
  const [ time, setTime] = useState<number>();
  if(selected?.time){
    setTime(timeForSec(selected.time));
  }
  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer </p>
      Time: {time}
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>
        Start!
      </Button>
    </div>
  );
};