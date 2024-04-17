import { FC, useEffect, useState } from "react";
import { WindowSizeProps } from "./windowSize.types";

export const WindowSize: FC<WindowSizeProps> = () => {
  const [windowWidth, setWidth] = useState(window.innerWidth);
  const [windowHeigth, setHeigth] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeigth(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <h1>Размер окна: </h1>
      <p>Width: {windowWidth}</p>
      <p>Height: {windowHeigth}</p>
    </div>
  );
};
