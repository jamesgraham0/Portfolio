import React, { useEffect, useState } from 'react';
import './hi.css';

function Hi({ onButtonClick }) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [slideToTop, setSlideToTop] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(true);
  const [containerHeight, setContainerHeight] = useState('100vh');
  const [containerBackgroundColor, setContainerBackgroundColor] = useState('rgb(0, 0, 0)'); // New state for container background color

  useEffect(() => {
    const header = document.querySelector("h1");
    let iteration = 0;
    let interval = null;

    interval = setInterval(() => {
      header.innerHTML = header.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return header.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= header.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (slideToTop) {
      setContainerHeight('20vh');
      setContainerBackgroundColor('transparent'); // Update container background color
    }
  }, [slideToTop]);

  const handleButtonClick = () => {
    setSlideToTop(true);
    setButtonVisible(false);
    onButtonClick();
  };

  return (
    <div id='home' className={`hi-container ${slideToTop ? 'slide-up' : ''}`} style={{ height: containerHeight, backgroundColor: containerBackgroundColor }}>
      <h1 data-value="Hi, I'm James. Welcome to my portfolio">
        Hi, I'm James. Welcome to my portfolio
      </h1>
      {buttonVisible && (
        <button className="glowing-button" onClick={handleButtonClick}>
          Click to continue
        </button>
      )}
    </div>
  );
}

export default Hi;
