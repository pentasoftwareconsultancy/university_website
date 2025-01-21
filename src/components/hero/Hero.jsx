import React, { useState, useEffect } from "react";
import styles from "./hero.module.css";

const Hero = () => {
  const images = [
    "https://live.themewild.com/eduka/assets/img/slider/slider-3.jpg",
    "https://live.themewild.com/eduka/assets/img/slider/slider-2.jpg",
    "https://live.themewild.com/eduka/assets/img/slider/slider-1.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change the image every 3 seconds (3000 ms)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.banner}>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className={styles.bannerImage}
      />
      <div className={styles.overlay}></div>

      <div className={styles.content}>
        <p className={styles.welcomeText}>WELCOME TO EDUKA!</p>
        <h1 className={styles.heading}>
          Start Your Beautiful <br />
          And <span className={styles.highlight}>Bright Future</span>
        </h1>
        <p className={styles.description}>
          There are many variations of passages Lorem Ipsum available but the
          majority have suffered alteration in some repeat predefined chunks
          from injected humour.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.button} ${styles.aboutButton}`}>
            About More →
          </button>
          <button className={`${styles.button} ${styles.learnButton}`}>
            Learn More →
          </button>
        </div>
      </div>
{/* 
      <button
        className={`${styles.navButton} ${styles.leftButton}`}
        onClick={handlePrev}
      >
        &lt;
      </button>
      <button
        className={`${styles.navButton} ${styles.rightButton}`}
        onClick={handleNext}
      >
        &gt;
      </button> */}
    </div>
  );
};

export default Hero;
