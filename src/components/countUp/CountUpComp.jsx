import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

function CountUpComp({ end, description }) {
  const { ref, inView } = useInView({
    threshold: 0.1, // Trigger when 10% of the component is in view
  });

  return (
    <div ref={ref}>
      {inView && (
        <span className="counter">
          <CountUp start={0} end={end} duration={3} />+
        </span>
      )}
      <p>{description}</p>
    </div>
  );
}

export default CountUpComp;
