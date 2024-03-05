import "./contact.css";
import Contactform from "../../components/Contactform";
import Hero from "../../components/Hero";
function Contact() {
  return (
    <>
      <Hero herBg={"/artsyEvent.jpg"} title={"Contact Us"} />
      <Contactform />
    </>
  );
}

export default Contact;
