import { useState } from "react";
import classes from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count+1)
  };

  return (
    <div className={classes.counter}onClick={addCount}>
      {count}
    </div>
  )
}
