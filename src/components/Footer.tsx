import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import '../assets/styles/Footer.scss'

function Footer() {
  const emailAddress = "mhmdmhdyttary@gmail.com"; 
  const subject = "Contact from Portfolio";

  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=${encodeURIComponent(subject)}`;
  return (
    <footer>
      <div>
        <a href={mailtoLink} target="_blank" rel="noreferrer"aria-label="Email me"><EmailIcon fontSize="large" /></a>
        <a href="https://github.com/MAINMMTTMAIN" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large"/></a>
        <a href="https://www.linkedin.com/in/mohammadmahdi-torktatari-710b3b36a/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large"/></a>
      </div>
      <p>Designed & built by <a href="https://github.com/MAINMMTTMAIN/My-Portfolio" target="_blank" rel="noreferrer">MMTT</a> with ❤️</p>
    </footer>
  );
}

export default Footer;