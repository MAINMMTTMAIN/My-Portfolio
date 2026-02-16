import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profile from '../assets/images/profile.png';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profile} alt="Avatar" />
        </div>
        <div className="content">
          
          <h1>MohammadMahdi TorkTatari</h1>
          <p>Computer Lover(from Software to Hardware)</p>  
          
          <div className="mobile_social_icons">
            <a href="https://github.com/MAINMMTTMAIN" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/mohammadmahdi-torktatari-710b3b36a/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;