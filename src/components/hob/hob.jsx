import React, { useEffect, useState } from 'react';
import './hob.css';
import img1 from '../../img/1.png';
import img2 from '../../img/2.png';
import img3 from '../../img/3.png';

const Hob = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.hob-container');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hob-container">
      <h1 className="hob-title">My hobbies</h1>
      <div className={`hob-images ${isVisible ? 'animate' : ''}`}>
        <img src={img1} alt="Hobby 1" className="img-1" />
        <img src={img2} alt="Hobby 2" className="img-2" />
        <img src={img3} alt="Hobby 3" className="img-3" />
      </div>
    </div>
  );
};

export default Hob;
