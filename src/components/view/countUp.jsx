import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const CountUp = ({ end,duration=1000 }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: false }); 
  useEffect(() => {
    const target = Number(end);
    if (inView) {
      let start = 0;
      const increment = target / (duration / 50);

      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          clearInterval(interval);
          setCount(target);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);

      return () => clearInterval(interval); 
    } else {
      setCount(0); 
    }
  }, [inView, end, duration]);

  return  <span
    ref={ref}
    style={{ color: "red", fontWeight: "bold",fontSize: "3rem" }}
  >
    {Math.floor(count)}+
  </span>
};

export default CountUp;