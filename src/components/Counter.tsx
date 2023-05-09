import { useState } from "react";
import './Counter.scss';

export const Counter = () => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount(count+1)
  };

  return (
    <div className="counter" onClick={addCount}>
      {count}
    </div>
  )
}
