import React, { useState } from "react";
import "./event.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Event = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="container-xxl">
        <Card sx={{ maxWidth: "100%" }}>
          <CardHeader
            avatar={
              <Avatar
                sx={{
                  bgcolor: red[500],
                  width: 75,
                  height: 75,
                  "& .avatar-text": { margin: 0 },
                }}
                aria-label="event"
              >
                {" "}
                <div className="d-flex flex-column">
                  <p className="avatar-text">Month</p>
                  <p className="avatar-text">Date</p>
                </div>
              </Avatar>
            }
            title={
              <div className="mui-header-content">
                <h5 className="mui-header-title">Gig title</h5>
                <div className="city-venue-wraper d-flex">
                  <p>City</p>
                  <p>Venue</p>
                </div>
                <div className="date-time-wraper d-flex">
                  <p>Weekday</p>
                  <p>Time</p>
                </div>
              </div>
            }
          />
          <CardActions
            disableSpacing
            sx={{
              marginTop: "-40px",
            }}
          >
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
              sx={{
                marginTop: "-40px",
              }}
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <div className="row">
                <div className="col-4">
                  <CardMedia
                    component="img"
                    height="194"
                    image="/card-img.jpg"
                    alt="Paella dish"
                  />
                </div>
                <div className="col-8">
                  <div className="bio-venue-wraper d-flex justify-content-between">
                    <div className="show-bio-wraper">
                      <p>Show date</p>
                      <p>Show time</p>
                      <p>Genre</p>
                      <p>Type</p>
                      <p>Legal for kids</p>
                    </div>
                    <div className="venue-details-wraper">
                      <p>Venue name</p>
                      <p>Venue city</p>
                      <p>Venue Address-1</p>
                      <p>Venue Address-2</p>
                      <p>Venue Postcode</p>
                    </div>
                  </div>
                  <div className="price-purchase-wraper d-flex justify-content-between">
                    <div className="price-wraper d-flex">
                      <p>Price from</p>
                      <p>Price till</p>
                      <p>Price currency</p>
                    </div>
                    <a href="#" className="btn btn-primary">
                      Get Tickets!
                    </a>
                  </div>
                </div>
              </div>
              <Typography paragraph>Important note</Typography>
              <Typography paragraph>Ticket purchase information</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
    </>
  );
};

export default Event;
