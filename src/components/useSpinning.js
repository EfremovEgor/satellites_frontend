import { useState, useRef, useEffect } from "react";

const useSpinning = (speed, duration = 100) => {
  const [rotation, setRotation] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }

    intervalId.current = setInterval(() => {
      setRotation((rotation) => (rotation + 0.01 * speed) % 1);
    }, duration);

    return () => {
      clearInterval(intervalId.current);
    };
  }, [speed]);

  return rotation;
};

export { useSpinning };