import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import "./ScrollToBtn.css";

function ScrollToBtn() {
  const [scrollActive, setScrollActive] = useState(false);

  function handleMoveToTop() {
    window.scrollTo(0, 0);
  }

  function handleScroll() {
    if (window.scrollY > window.innerHeight) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  }

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {scrollActive && (
        <div className="btn-pulse-cont">
          <button className="btn--pulse-up" onClick={handleMoveToTop}>
            <IoIosArrowUp className="btn-icon-up" />
          </button>
        </div>
      )}
    </>
  );
}

export default ScrollToBtn;
