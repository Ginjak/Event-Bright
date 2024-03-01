import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import React from "react";
import "./footer.css";

const Footer = () => {

  return (
    <>
    <div className="footer">
      <nav className="navbar bg-body-tertiary">
        <div className='m-5'>
          <div className="container-fluid">
            <a className="navbar-brand logo" href="#">
              <img src="/eventBright-logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
              <span>EventBright</span>
            </a>
          </div>
        </div>
        {/* social medias >> */}
        <div className="socials-container">
          <h3 className="fs-6 margins">Future links </h3>
          <div className="socials-list">
            <a href="#" className="">
              <InstagramIcon fontSize='large' className='link'/>
            </a>
            <a href="#" className="">
              <FacebookIcon fontSize='large' className='link'/>
            </a>
            <a href="#" className="">
              <YouTubeIcon fontSize='large' className='link'/>
            </a>
            <a href="#" className="">
              <GitHubIcon fontSize='large' className='link'/>
            </a>
          </div>
        </div>
        <div className="pages-container">
          <div className="page-links">
            <span className="margins">Explore: </span>
            <a href="#" className="link">
              About
            </a>
            <a href="#" className="link">
              Contact
            </a>
            <a href="#" className="link">
              Weather
            </a>
          </div>
        </div>
      </nav>
      <div className='date-container'>
          <p>&copy; {new Date().getFullYear()} EventBright</p>
      </div>
    </div>
    </> 
)
};

export default Footer;
