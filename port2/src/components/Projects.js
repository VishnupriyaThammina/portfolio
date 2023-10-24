import React from "react";
import Project from "./Project";
import { Grid, Typography } from "@mui/material";

export default function Projects() {
  return (
    <>
        <Typography color="white" variant="h3" textAlign="center">Projects</Typography>

      <Grid container display="flex" justifyContent="center" alignItems="center">
        <Grid container item display="flex" direction="row" justifyContent="center" width="90%" height="100%" sx={{marginBottom:"7vh"}}>

          {/* For mobile view, set width to 100% and stack projects one on top of the other */}
          <Grid item xs={12} sm={6} md={3} margin="2vh">
            <Project name="To Do List" desc="A fully functioning frontend to do list application with local storage and CRUD operations in React and Material UI" buttonText="View" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="Bored" desc="A social media Blog site, a CRUD application in MERN Stack. You can post and read categorized content." buttonText="GitHub" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="Fresh" desc="An ecommerce Site, a demo Frontend Ecommerce site with local storage and CRUD Operations" buttonText="GitHub" />
          </Grid>

          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="Food App" desc="A food menu site, a demo Frontend Food App with API fetching and local storage with React" buttonText="GitHub" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="Pm2.5 prediction" desc="Using Deep learning approaches to predict the pollutant called pm2.5. So that estimation of other meteorological features helps in getting acurrate weather predictions" buttonText="GitHub" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="Weather Application" desc="basic Weather Api Integration and data fetching concepts" buttonText="GitHub" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="Canva designs" desc="I am passionate about making creative posters, Check this drive folder out. It has all of the canva designs I made for various occasions " buttonText="Drive" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="7vachan" desc="I go for that extra mile everytime, so here are a few underground work I tried on my own at 7vachan " buttonText="View" />
          </Grid>
          <Grid item xs={12} sm={6} md={3}  margin="2vh">
            <Project name="Travel Application" desc="my on going project, a travel Application in MERN Stack. This my personal travel bucket list application " buttonText="GitHub" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
