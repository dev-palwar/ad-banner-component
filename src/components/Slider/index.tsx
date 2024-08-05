import React, { useState } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import arrowLeft from ".././../assets/icons/arrowLeft.webp";
import arrowRight from ".././../assets/icons/arrowRight.webp";

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
        <Image src={arrowLeft} height={25} width={25} alt="left" />
      </button>
      <div className={styles.slideContainer}>{children[currentSlide]}</div>
      <button onClick={handleNext} className={styles.nextButton}>
        <Image src={arrowRight} height={25} width={25} alt="left" />
      </button>
    </div>
  );
};

export default Slider;
