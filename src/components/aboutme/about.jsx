import React, { useEffect, useRef } from "react";
import "./about.css"; 
import her from '../../imgs/kyo.png';  
import hert from '../../imgs/kk.png';  
import herk from '../../imgs/kyoo.png';  
const About = () => {
  
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

  useEffect(() => {
    
    const images = [image1Ref.current, image2Ref.current, image3Ref.current];

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
        
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.5 }); 

    
    images.forEach(image => observer.observe(image));
    
    
    return () => {
      images.forEach(image => observer.unobserve(image));
    };
  }, []); 
  return (
    
    <div className="about-container">
           <div id="About">
</div>
      <img 
        src={her}  
        alt="Hero"
        className="top-left-image"
        ref={image1Ref}
      />
 
      <img 
        src={hert}  
        alt="Hero"
        className="top-left-image2"
        ref={image2Ref}
      />
      <div className="about-content">
        <h1>About Me</h1>
        <p>
   Graduated in 2024 with a Computer Engineering degree! <br />
  Front-end developer since 2022, passionate about crafting user-friendly websites with amazing UI/UX! ✨<br />
  I love turning complex ideas into simple, beautiful, and effective web experiences! <br />
  Reach out if you have a cool project in mind! 
</p>

      </div>
      <img 
        src={herk}  /* رابط الصورة الثالثة */
        alt="Hero"
        className="bottom-right-image"
        ref={image3Ref}
      />
    </div>
  );
};

export default About;
