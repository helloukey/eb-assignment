import { useState, useEffect } from "react";

type Screen = {
  screenWidth: number;
  screenHeight: number;
};

const useScreenWidth = (): Screen => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenWidth, screenHeight };
};

export default useScreenWidth;
