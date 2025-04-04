import React, { useState, useEffect } from "react";
import "./project.css"; 
import hero from '../../imgs/1.png';
import her1 from '../../imgs/2.png';
import her2 from '../../imgs/3.png';
import her3 from '../../imgs/4.png';
import her4 from '../../imgs/5.png';
import her5 from '../../imgs/6.png';
import iot1 from '../../imgs/iot1.png';
import iot2 from '../../imgs/iot2.png';

const Project = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in");
      const windowHeight = window.innerHeight;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
          element.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = {
    "Front End": [
      {
        title: "Space website",
        image: hero,
        link: "https://madkiwi11.github.io/nassaapp/",
      },
      {
        title: "Flower shop website",
        image: her1,
        link: "https://madkiwi11.github.io/flowershop/#",
      },
      {
        title: "Educational website",
        image: her2,
        link: "https://madkiwi11.github.io/wgroup2/",
      },
      {
        title: "Music website",
        image: her5,
        link: "https://example.com/frontend-project",
      },
      {
        title: "Tech event website",
        image: her4,
        link: "https://example.com/react-dashboard",
      },
      {
        title: "Weather website",
        image: her3,
        link: "https://example.com/landing-page",
      },
    ],
    "IOT": [
      {
        title: "IoT Weather Station",
        image: iot1,
        link: "https://example.com/iot1",
      },
      {
        title: "Robot",
        image: iot2,
        link: "https://example.com/iot2",
      },
    ],
    "UI/UX": [],
  };

  const categories = ["Front End", "IOT", "UI/UX"];
  const [activeCategory, setActiveCategory] = useState("Front End");

  const filteredProjects = projects[activeCategory] || [];

  return (
    <div className="projects-container fade-in">
      <h1 className="fade-in">MY PROJECTS</h1>

      <div className="categories fade-in">
        {categories.map((category, index) => (
          <div
            className={`category ${activeCategory === category ? "active" : ""}`}
            key={index}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div id="project"></div>
      <div className="projects-grid fade-in">
        {filteredProjects.map((project, index) => (
          <div className="project-card fade-in" key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
