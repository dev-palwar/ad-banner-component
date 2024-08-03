import React, { useState } from "react";
import styles from "./index.module.scss";

const Slider: React.FC<{ children: React.ReactNode[] }> = ({ children }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % children.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + children.length) % children.length);
  };

  return (
    <div className={styles.slider}>
      <button onClick={handlePrev} className={styles.prevButton}>
        {"<"}
      </button>
      <div className={styles.slideContainer}>{children[currentSlide]}</div>
      <button onClick={handleNext} className={styles.nextButton}>
        {">"}
      </button>
    </div>
  );
};

export default Slider;
