import style from './Clock.module.scss';

interface Props{
  time: number | undefined
}


export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minD, minU] = String(minutes).padStart(2, '0');
  const [secD, secU] = String(seconds).padStart(2, '0');
  return (
    <>
      <span className={style.clockNumber}>{minD}</span>
      <span className={style.clockNumber}>{minU}</span>
      <span className={style.clockDi}>:</span>
      <span className={style.clockNumber}>{secD}</span>
      <span className={style.clockNumber}>{secU}</span>
    </>
  )
}