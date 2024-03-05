import Hero from "../../components/Hero";
import "./about.css";
import React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

function ImageAvatars() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "10vh" }}
    >
      <Stack direction="row" spacing={2}>
        <a
          href="https://github.com/Ginjak/Event-Bright"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            alt="Gintaras"
            src="/gin.jpeg"
            sx={{
              width: 75,
              height: 75,
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </a>
        <a
          href="https://github.com/blooshroo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            alt="Serina"
            src="/serina.jpeg"
            sx={{
              width: 75,
              height: 75,
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </a>
        <a
          href="https://github.com/Adriantutuianu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            alt="Adrian"
            src="/adrian.jpeg"
            sx={{
              width: 75,
              height: 75,
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </a>
        <a
          href="https://github.com/DariaMS1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            alt="Daria"
            src="/daria.jpeg"
            sx={{
              width: 75,
              height: 75,
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </a>
        <a
          href="https://github.com/dudi62"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            alt="Tomasz"
            src="/TomDud.jpg"
            sx={{
              width: 75,
              height: 75,
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </a>
        <a
          href="https://github.com/grace-apa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Avatar
            alt="Grace"
            src="/grace.png"
            sx={{
              width: 75,
              height: 75,
              transition: "transform 0.15s ease-in-out",
              "&:hover": { transform: "scale(1.1)" },
            }}
          />
        </a>
      </Stack>
    </Box>
  );
}

function About() {
  return (
    <React.Fragment>
      <div className="about-page">
        <Hero
          herBg={"/artsyEvent.jpg"}
          title={"About Us"}
          par={"random text"}
        />
        {/* <h1>About page</h1> */}
        <div className="text-style p-5 mb-3 mt-2">
          Once upon a time, in a cozy corner of the UK, there was a merry band
          of six developers fresh out of a front-end bootcamp. Their names were
          Gintaras, Serina, Adrian, Daria, Tomasz, and Grace. They were as
          diverse as a bag of jellybeans, each with their own quirks and
          talents. Gintaras, with his love for all things design-related, could
          make a webpage look snazzier than a penguin in a tuxedo. Serina, the
          coding whiz, could whip up JavaScript like it was nobody's business.
          Adrian was the king of CSS, styling web pages with the finesse of a
          master painter. Daria, the queen of user experience, made sure every
          button click felt as smooth as butter on a hot day. Tomasz, with his
          sharp eye for detail, caught bugs faster than a frog catching flies.
          And last but not least, there was Grace, the cheerful cheerleader of
          the group, keeping everyone's spirits high with her infectious
          laughter. One day, while brainstorming ideas for their next project,
          the team stumbled upon the concept of a website like EventBright, but
          with a twist – integrated weather information. The idea sparked like a
          firecracker on Bonfire Night, and the team dove headfirst into the
          project. Gintaras sketched out dazzling designs that made the website
          pop like fireworks in the sky. Serina coded like a mad scientist,
          weaving JavaScript spells that brought the website to life. Adrian
          sprinkled CSS magic like fairy dust, making every element sparkle and
          shine. Meanwhile, Daria crafted user experiences so smooth, they were
          like sliding down a rainbow. Tomasz hunted down bugs with the tenacity
          of a detective solving a mystery. And through it all, Grace's laughter
          rang out like bells, keeping the team's spirits high even when the
          code seemed to have a mind of its own. Together, they worked day and
          night, fueled by cups of tea and the promise of creating something
          truly magical. And when they finally unveiled their masterpiece to the
          world, it was met with cheers and applause louder than a rock concert
          on a summer's eve. And so, the merry band of developers from the
          front-end bootcamp proved that with a little laughter and a lot of
          determination, anything was possible – even building a website that
          combined the excitement of EventBright with the practicality of
          real-time weather information.
        </div>
      </div>
      <ImageAvatars />
    </React.Fragment>
  );
}

export default About;
