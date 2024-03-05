import "./contact.css";
import Contactform from "../../components/Contactform";
import Hero from "../../components/Hero";
function Contact() {
  return (
    <>
      <Hero herBg={"/contact-hero.jpg"} title={"Contact Us"} />
      <Contactform />
    </>
  );
}

export default Contact;
