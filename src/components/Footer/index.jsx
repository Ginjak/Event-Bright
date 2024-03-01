import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import React from "react";
import "./footer.css";

const Footer = () => {

  return (
    <>
    <div className="footer">
      <nav className="navbar bg-body-tertiary">
      <div className='background-effect m-5 border border-5'>
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <img src="/eventBright-logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            <span>EventBright</span>
          </a>
        </div>
      </div>
      </nav>
      {/* social medias >> */}
      <div className="socials-container background-effect">
        <h3 className="fs-6 margins">Future links </h3>
        <div className="socials-list display-inline">
          <a href="#" className="display-inline">
            <InstagramIcon fontSize='large' className='link'/>
          </a>
          <a href="#" className="display-inline">
            <FacebookIcon fontSize='large' className='link'/>
          </a>
          <a href="#" className="display-inline">
            <YouTubeIcon fontSize='large' className='link'/>
          </a>
        </div>
      </div>
      <div className="pages-container background-effect">
        <div className="page-links display-inline">
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
    </div>
    </> 
)
};

export default Footer;
