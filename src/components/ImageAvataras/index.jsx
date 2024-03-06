import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import { NavLink } from "react-router-dom";
import Team from "../../assets/data/team.json";
import "./imageavatars.css";

function ImageAvatars() {
  return (
    <>
      <Box
        style={{
          background: "var(--dark)",
        }}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          gap="20px"
          justifyContent="center"
          alignItems="center"
          className="py-4 pb-5 team-wraper"
          style={{
            minHeight: "10vh",
            background: "var(--dark)",
            maxWidth: "1024px",
            margin: "auto",
          }}
        >
          {Team.team.map((member) => (
            <Card
              key={member.id}
              style={{
                background: "var(--link-hover)",
                minWidth: "300px",
              }}
              className="team-card"
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
                    {member.name && (
                      <Typography variant="h5" className="mb-3 fw-bold">
                        {member.name}
                      </Typography>
                    )}
                    {member.social.linkedin && (
                      <NavLink to={member.social.linkedin} target="_blank">
                        <LinkedInIcon
                          fontSize="large"
                          className="icons me-2 mail-link"
                        />
                      </NavLink>
                    )}
                    {member.social.twitter && (
                      <NavLink to={member.social.twitter} target="_blank">
                        <XIcon
                          fontSize="large"
                          className="icons me-2 mail-link"
                        />
                      </NavLink>
                    )}
                    {member.social.github && (
                      <NavLink to={member.social.github} target="_blank">
                        <GitHubIcon
                          fontSize="large"
                          className="icons me-2 mail-link"
                        />
                      </NavLink>
                    )}
                    {member.social.web && (
                      <NavLink to={member.social.web} target="_blank">
                        <LanguageIcon
                          fontSize="large"
                          className="icons mail-link"
                        />
                      </NavLink>
                    )}
                  </React.Fragment>
                }
              />
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default ImageAvatars;
