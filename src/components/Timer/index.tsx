import Button from '../Button';
import Clock from './Clock';
import style from './Timer.module.scss';

export function Timer() {
  return (
    <div className={style.timer}>
      <p className={style.title}>Choose a card and start the timer </p>
      <div className={style.clockWrapper}>
        <Clock />
      </div>
      <Button>
        Start!
      </Button>
    </div>
  );
};