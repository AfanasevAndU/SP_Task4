import { FC, useEffect, useState } from "react";
import { CountdownTimerProps } from "./countdownTimer.types";

export const CountdownTimer: FC<CountdownTimerProps> = ({ countTimer }) => {
  const [count, setCount] = useState<number>(countTimer);
  useEffect(() => {
    if (!count) return;

    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};
