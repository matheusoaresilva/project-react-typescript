import { useEffect, useState } from 'react';
import { finished } from 'stream';
import { timeForSec } from '../../common/utils/date';
import { ITask } from '../../types/tasks';
import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';

interface Props {
  selected: ITask | undefined;
  finishedTask: () => void
}

export default function Timer({ selected, finishedTask }: Props) {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) {
      setTime(timeForSec(selected.time))
    }
  }, [selected]);

  function regress(count: number = 0) {
    setTimeout(() => {
      if(count > 0) {
        setTime(count - 1);
        return regress(count -1);
      }
      finishedTask();
    }, 1000);
  }


  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer </p>
      <div className={style.clockWrapper}>
        <Clock time={time}/>
      </div>
      <Button onClick={() => regress(time)}>
        Start!
      </Button>
    </div>
  );
};