import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { NavLink } from "react-router-dom";
import { red } from "@mui/material/colors";
import Team from "../../assets/data/team.json";

function ImageAvatars() {
  return (
    <>
      <Box
        display="flex"
        flexWrap="wrap"
        gap="20px"
        justifyContent="center"
        alignItems="center"
        className="py-4"
        style={{ minHeight: "10vh", background: "var(--dark)" }}
      >
        {Team.team.map((member) => (
          <Card
            key={member.id}
            sx={{
              minWidth: 400,
              maxWidth: 645,
              margin: 0,
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  alt={member.name}
                  src={member.avatar}
                  sx={{ width: 100, height: 100 }}
                />
              }
              title={
                <React.Fragment>
                  <Typography variant="h5" className="mb-3 fw-bold">
                    {member.name}
                  </Typography>
                  <NavLink to={member.social.linkedin} target="_blank">
                    <LinkedInIcon fontSize="large" className="icons me-2" />
                  </NavLink>
                  <NavLink to={member.social.twitter} target="_blank">
                    <XIcon fontSize="large" className="icons me-2" />
                  </NavLink>
                  <NavLink to={member.social.github} target="_blank">
                    <GitHubIcon fontSize="large" className="icons me-2" />
                  </NavLink>
                  <NavLink to={member.social.web} target="_blank">
                    <LanguageIcon fontSize="large" className="icons" />
                  </NavLink>
                </React.Fragment>
              }
            />
          </Card>
        ))}
      </Box>
    </>
  );
}

export default ImageAvatars;

{
  /* <Box
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
    </Box> */
}
