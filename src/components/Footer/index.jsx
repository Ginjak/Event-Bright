import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import "./footer.css";
import React from "react";

const Footer = () => {

  return (
    <>
    <div className="footer">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand logo" href="#">
            <img src="/eventBright-logo.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
            <span>EvenBright</span>
          </a>
        </div>
        {/* social medias >> */}
        <div className="container-fluid">
          <h3 className="fs-6 margins">Future links: </h3>
          <div className="socials">
            <a href="#" className="display-inline">
              <img alt="" title="Instagram" src="" className=""/>
              <InstagramIcon fontSize='large'/>
            </a>
            <a href="#" className="display-inline">
              <img alt="" title="Facebook" src=""/>
              <FacebookIcon fontSize='large'/>
            </a>
            <a href="#" className="display-inline">
              <img alt="" title="YouTube" src="" className=""/>
              <YouTubeIcon fontSize='large'/>
            </a>
          </div>
        </div>
      </nav>
    </div>
    </> 
)
};

export default Footer;
