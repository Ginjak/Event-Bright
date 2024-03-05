import Hero from "../../components/Hero";
import ImageAvatars from "../../components/ImageAvataras";
import "./about.css";
import React from "react";

function About() {
  return (
    <>
      <React.Fragment>
        <div className="about-page">
          <Hero
            herBg={"/artsyEvent.jpg"}
            title={"About Us"}
            par={"random text"}
          />
          {/* <h1>About page</h1> */}
          <div className="text-white p-5">
            <p>
              Once upon a time, in a cozy corner of the UK, there was a merry
              band of six developers fresh out of a front-end bootcamp. Their
              names were Gintaras, Serina, Adrian, Daria, Tomasz, and Grace.
              They were as diverse as a bag of jellybeans, each with their own
              quirks and talents.
            </p>
            <p className="mb-0">
              Gintaras, with his love for all things design-related, could make
              a webpage look snazzier than a penguin in a tuxedo.
            </p>
            <p className="mb-0">
              Serina, the coding whiz, could whip up JavaScript like it was
              nobody's business.
            </p>
            <p className="mb-0">
              Adrian was the king of CSS, styling web pages with the finesse of
              a master painter.
            </p>
            <p className="mb-0">
              Daria, the queen of user experience, made sure every button click
              felt as smooth as butter on a hot day.
            </p>
            <p className="mb-0">
              Tomasz, with his sharp eye for detail, caught bugs faster than a
              frog catching flies.
            </p>{" "}
            <p>
              And last but not least, there was Grace, the cheerful cheerleader
              of the group, keeping everyone's spirits high with her infectious
              laughter.
            </p>{" "}
            <p>
              One day, while brainstorming ideas for their next project, the
              team stumbled upon the concept of a website like EventBright, but
              with a twist – integrated weather information. The idea sparked
              like a firecracker on Bonfire Night, and the team dove headfirst
              into the project. Gintaras sketched out dazzling designs that made
              the website pop like fireworks in the sky. Serina coded like a mad
              scientist, weaving JavaScript spells that brought the website to
              life. Adrian sprinkled CSS magic like fairy dust, making every
              element sparkle and shine. Meanwhile, Daria crafted user
              experiences so smooth, they were like sliding down a rainbow.
              Tomasz hunted down bugs with the tenacity of a detective solving a
              mystery. And through it all, Grace's laughter rang out like bells,
              keeping the team's spirits high even when the code seemed to have
              a mind of its own. Together, they worked day and night, fueled by
              cups of tea and the promise of creating something truly magical.
              And when they finally unveiled their masterpiece to the world, it
              was met with cheers and applause louder than a rock concert on a
              summer's eve. And so, the merry band of developers from the
              front-end bootcamp proved that with a little laughter and a lot of
              determination, anything was possible – even building a website
              that combined the excitement of EventBright with the practicality
              of real-time weather information.
            </p>
          </div>
        </div>
        <ImageAvatars />
      </React.Fragment>
    </>
  );
}

export default About;
