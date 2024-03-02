import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";
import "./footer.css";

const Footer = () => {

  return (
    <>
      <nav className="navbar bg-body-tertiary bg-image bg-opacity">
        <div className='p-3'>
          <div className="container-fluid p-2">
            <a className="navbar-brand logo" href="#">
              <img src="/eventBright-logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
              <span className=''>EventBright</span>
            </a>
          </div>
        </div>
        {/* social medias >> */}
        <div className="socials-container">
          <span className="fs-6 p-3 ms-5 fw-bold">Future links</span>
          <div className="socials-list">
            <a href="#">
              <InstagramIcon fontSize='large' className='link icons spacing'/>
            </a>
            <a href="#">
              <FacebookIcon fontSize='large' className='link icons spacing'/>
            </a>
            <a href="#">
              <YouTubeIcon fontSize='large' className='link icons spacing'/>
            </a>
            <a href="#">
              <GitHubIcon fontSize='large' className='link icons spacing'/>
            </a>
          </div>
        </div>
        <div className="pages-container">
          <span className="fs-6 p-3 fw-bold">Explore </span>
            <a href="#" className="link spacing">
              About
            </a>
            <a href="#" className="link spacing">
              Contact
            </a>
            <a href="#" className="link spacing">
              Weather
            </a>
        </div>
      </nav>
      <div className='date-container'>
          <p>&copy; {new Date().getFullYear()} EventBright</p>
      </div>
    </> 
)
};

export default Footer;
