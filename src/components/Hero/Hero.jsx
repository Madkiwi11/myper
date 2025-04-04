import React from 'react';
import './Hero.css';
import hero from '../../imgs/hero.png';  // الصورة الأولى
import image1 from '../../imgs/image3.png';  // الصورة الثانية

import { FaInstagram, FaLinkedinIn, FaFacebook } from 'react-icons/fa';


const Hero = () => {
  return (
    <div className="hero">
      {/* الصورة الأولى */}
      <img 
        src={hero}  /* رابط الصورة الأولى */
        alt="Hero"
        className="hero-image hero-image-1" 
      />
    
      {/* الصورة الثانية */}
      <img 
        src={image1}  /* رابط الصورة الثانية */
        alt="Image 1"
        className="hero-image hero-image-2" 
      />

      {/* النص في المنتصف */}
      <div className="hero-text">
        <h1>Hi, I’m Fatima Hasan</h1>
        <h1>Front-end Developer</h1>
        <p>from Iraq, 22 years old</p>
        <svg width="727" height="241" viewBox="0 0 727 241" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 70.8467C10.3707 44.5799 33.5848 33.5597 60.9216 32.602C86.4565 31.7075 116.326 39.4197 140.209 47.6822C259.049 88.796 133.548 176.383 140.831 89.5026C142.553 68.9672 154.082 54.052 167.26 39.1316C187.134 16.6297 207.771 13.2477 237.065 11.1477C288.379 7.4692 326.08 23.192 353.198 73.3341C380.429 123.686 317.717 121.403 318.218 87.326C318.613 60.4347 351.102 15.917 378.85 7.57198C403.674 0.106048 447.56 -0.83817 472.207 10.8368C495.322 21.7859 511.958 49.0283 524.366 70.5357C532.063 83.8779 535.378 105.211 525.687 118.652C503.93 148.833 460.273 145.904 462.335 105.36C463.109 90.1426 474.338 73.4855 484.1 62.296C494.78 50.0552 504.767 39.7933 521.101 29.4927C589.772 -13.8128 700.034 35.7538 725.383 68.0483" stroke="url(#paint0_linear_1132_16907)" stroke-width="3" stroke-linecap="round"/>
<defs>
<linearGradient id="paint0_linear_1132_16907" x1="639.494" y1="70.4386" x2="2" y2="70.4386" gradientUnits="userSpaceOnUse">
<stop stop-color="#DBA6F4"/>
<stop offset="1" stop-color="#A981FE"/>
</linearGradient>
</defs>
</svg>
      </div>




      {/* أيقونات وسائل التواصل الاجتماعي */}
      <div className="social-icons">
        <a href="https://www.instagram.com/1.chu?igsh=MXE2djRseHRtcXByMg==" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://www.linkedin.com/in/fatima-hasan-886563263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/share/1C6c1kUTtF/" target="_blank" rel="noopener noreferrer">
    <FaFacebook />
  </a>
      </div>
    </div>

  );
};

export default Hero;
