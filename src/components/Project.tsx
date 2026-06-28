import React, { useState } from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import mock10 from '../assets/images/mock10.png';
import mock11 from '../assets/images/mock11.mp4';
import mock12 from '../assets/images/mock12.mp4';
import mock13 from '../assets/images/mock13.mp4';
import mock14 from '../assets/images/mock14.mp4';
import mock15 from '../assets/images/mock15.mp4';
import mock16 from '../assets/images/mock16.mp4';
import mock17 from '../assets/images/mock17.png';
<<<<<<< HEAD
import mock18 from '../assets/images/mock18.png';
import mock19 from '../assets/images/mock19.mp4';
import mock20 from '../assets/images/mock20.mp4';
=======
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb

import '../assets/styles/Project.scss';
import '../assets/styles/Carousel.scss';

function Project() {
    const Videos = [
<<<<<<< HEAD
    { src: mock19, title: "Animation 5", desc: "I make this animation in 2026" },
    { src: mock20, title: "Animation 6", desc: "I make this animation in 2026" },
=======
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb
    { src: mock12, title: "Animation 1", desc: "These animations were made when I was really young (17 years old) and dreamed of becoming the greatest animator in the world.They were created using an Android app (I don’t remember the exact name, but I think it was FlipaClip).The first two simulate a falling leaf and a brick hitting the ground. The rest show different human reactions." },
    { src: mock13, title: "Animation 2", desc: "These animations were made when I was really young (17 years old) and dreamed of becoming the greatest animator in the world.They were created using an Android app (I don’t remember the exact name, but I think it was FlipaClip).The first two simulate a falling leaf and a brick hitting the ground. The rest show different human reactions." },
    { src: mock14, title: "Animation 3", desc: "These animations were made when I was really young (17 years old) and dreamed of becoming the greatest animator in the world.They were created using an Android app (I don’t remember the exact name, but I think it was FlipaClip).The first two simulate a falling leaf and a brick hitting the ground. The rest show different human reactions." },
    { src: mock15, title: "Animation 4", desc: "These animations were made when I was really young (17 years old) and dreamed of becoming the greatest animator in the world.They were created using an Android app (I don’t remember the exact name, but I think it was FlipaClip).The first two simulate a falling leaf and a brick hitting the ground. The rest show different human reactions." },
    
<<<<<<< HEAD

=======
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? Videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === Videos.length - 1 ? 0 : prev + 1));
  }; 
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://github.com/MAINMMTTMAIN/python-tkinter-snake-game" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MAINMMTTMAIN/python-tkinter-snake-game" target="_blank" rel="noreferrer"><h2>Snake Game</h2></a>
                <p>A classic Snake game rebuilt with Python & Tkinter, featuring user login, leaderboard, dark/light mode, custom snake colors, background music, and more!</p>
            </div>

            <div className="project">
          <div className="video-carousel-wrapper">
            <video
              className="zoom"
              src={Videos[currentVideo].src}
              width="100%"
              height="auto"
              autoPlay
              loop
            />

            {Videos.length > 1 && (
              <>
                <button className="carousel-arrow left" onClick={prevVideo}>
                  <ArrowBackIosNewIcon fontSize="small" />
                </button>
                <button className="carousel-arrow right" onClick={nextVideo}>
                  <ArrowForwardIosIcon fontSize="small" />
                </button>
              </>
            )}
          </div>
            <h2>2D Animations</h2>
          
                <p>
                    {Videos[currentVideo].desc}
                </p>
        </div>
 
            <div className="project">
                <video className="zoom" width="100%" height="auto" autoPlay loop muted> 
                    <source src={mock11} type="video/mp4" />
                </video>
                <h2>MMTT Preview</h2>
                <p>Designed and created using Adobe After Effects.</p>
            </div>

            <div className="project">
                <video className="zoom" width="100%" height="auto"  controls> 
                    <source src={mock16} type="video/mp4" />
                </video>
                <h2>3D Animation</h2>
                <p>Designed and created using Adobe Character Animator.Sound design and editing by me</p>
            </div>
            <div className="project">
                <a href="https://github.com/MAINMMTTMAIN/SystemPulse" target="_blank" rel="noreferrer"><img src={mock17} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MAINMMTTMAIN/SystemPulse" target="_blank" rel="noreferrer"><h2>SystemPulse</h2></a>
                <p>A lightweight system monitor built with Python that tracks CPU, RAM, battery, and GPU usage in real-time.</p>
            </div>
<<<<<<< HEAD
            <div className="project">
                <a href="https://github.com/MAINMMTTMAIN/QR-Toolkit" target="_blank" rel="noreferrer"><img src={mock18} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/MAINMMTTMAIN/QR-Toolkit" target="_blank" rel="noreferrer"><h2>QR Toolkit</h2></a>
                <p>QR Toolkit is a modern and powerful desktop application for generating and scanning QR codes. With a clean, responsive user interface built using CustomTkinter, it offers a seamless experience whether you're creating QR codes from text or scanning them from your camera or gallery.</p>
            </div>
=======
>>>>>>> 26eaab653d3af91985e69871d8bf53ed4a355ffb
        </div>
    </div>
    );
}

export default Project;