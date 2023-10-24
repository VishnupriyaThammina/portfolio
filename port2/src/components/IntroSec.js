import { Grid, Typography, Button } from "@mui/material";
import React from "react";
import i1 from "../images/sawako.png";

export default function IntroSec() {
  return (
    <>
    <Grid     container
        display="flex"
        justifyContent="center"
        alignItems="center" sx={{marginTop:"7vh"}}>

  
      <Grid
        container
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          height: "90%",
          width: "95%",
          background: "rgba(17, 25, 40, 0.01)",
          backdropFilter: "blur(25px) saturate(102%)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          WebkitBackdropFilter: "blur(25px) saturate(102%)",
          borderRadius: "10px",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          color:"white"
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
         
        >
          <Grid
            item
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            style={{
              width: "100%",
              height: "15%",
              padding: "10px",
              borderRadius: "10px 10px 0px 0px",
            }}
          >
            <Grid
            container
              display="flex"
              direction="row"
              style={{ width: "100%" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid height="100%">
                <Grid item sx={{ xs: "50%", md: "85%", paddingLeft: "3vh" }}>
                  <Typography>MyPortfolio</Typography>
                </Grid>
              </Grid>
              <Grid container sx={{ width: { xs: "50%", md: "15%" } }}>
                <Grid item display="flex" alignItems="center" justifyContent="center" style={{ width: "50%" }}>
                  <Typography>LinkedIn</Typography>
                </Grid>
                <Grid item display="flex" alignItems="center" justifyContent="center" style={{ width: "50%" }}>
                  <Typography>GitHub</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            display="flex"
            alignItems="center"
            justifyContent="center"
            
            style={{ width: "100%", height: "85%" }}
          >
            <Grid item container display="flex" direction="column" justifyContent="center" alignItems="center" style={{ width: "65%", marginBottom: "10vh", height: "100%" }}>
              <Grid display="flex" container direction="column" justifyContent="center" alignItems={{xs:"center",md:"start"}} textAlign={{xs:"center",md:"left"}}sx={{ width: "80%" }}>
                <Typography variant="h3">Hi, this is Vishnupriya Thammina</Typography>
                <Typography variant="h3">I'm a Web Developer</Typography>
                <Typography variant="body1" sx={{ width: "75%", marginTop: "2vh" }}>
                  I'm a Computer Science major at IIIT Sri City, with a focus on frontend and full-stack development. A driven and creative individual, I'm dedicated to my craft and personal growth.
                </Typography>
                <Grid sx={{ marginTop: "3vh" }}>
                  <Button
                    sx={{ backgroundColor: "transparent", border: "1px solid white", color: "white", transition: "0.3s", "&:hover": { backgroundColor: "white", color: "black", border: "none" } }}
                    variant="contained"
                  >
                    Navigate to CV
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid sx={{ display: { xs: "none", md: "block" }, width: "35%", height: "100%", marginBottom: "10vh" }}>
              <img alt="Girl Studying Digital Illustration" src={i1} style={{ height: "500px", display: "block" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
    </>
  );
}
