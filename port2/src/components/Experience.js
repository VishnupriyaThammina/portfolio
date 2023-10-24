import { Grid, Typography, Button } from "@mui/material";
import React from "react";

export default function Experience() {
  return (
    <>
   

      <Grid display="flex" justifyContent="center" alignItems="center" container>
        <Grid display="flex"  flexDirection={{ xs: "column", md: "row" }}  item justifyContent="center" alignItems="center" color="white" sx={{ margin: "3vh", height: "100%", width: "100%" }}>
          {/* First Grid */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            width="100%"  // Set width to 100% for mobile view
            height="90%"
            style={{
              margin: "1.5vh",
              background: "rgba(217, 255, 240, 0.01)",
              backdropFilter: "blur(25px) saturate(102%)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              WebkitBackdropFilter: "blur(25px) saturate(102%)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <Grid sx={{ width: "85%", height: "100%", padding: "5vh" }}>
              <Grid item>
                <Typography variant="h5">Frontend Developer</Typography>
              </Grid>
              <Grid item style={{ marginTop: "6vh" }}>
                <Typography variant="body1">Worked as a frontend developer at 7vachan from June 2022 to April 2023. Developed many frontend pages and deployed them. Tech Stack used HTML, CSS, JS, React, Material UI. Take a look at my progress in 7vachan.</Typography>
              </Grid>
              <Grid item style={{ marginTop: "2vh" }}>
                <Button
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "20px",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                    },
                  }}
                  variant="contained"
                >
                  View
                </Button>
              </Grid>
            </Grid>
          </Grid>

          {/* Second Grid */}
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            width="100%"  // Set width to 100% for mobile view
            height="90%"
            style={{
              margin: "1.5vh",
              background: "rgba(17, 25, 40, 0.01)",
              backdropFilter: "blur(25px) saturate(102%)",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              WebkitBackdropFilter: "blur(25px) saturate(102%)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            }}
          >
            <Grid sx={{ width: "85%", height: "100%", padding: "5vh" }}>
              <Grid item>
                <Typography variant="h5">React Developer</Typography>
              </Grid>
              <Grid item style={{ marginTop: "6vh" }}>
                <Typography variant="body1">Starting a new journey as a React developer at EdFox Technologies PVT Limited from October 2023. Tech Stack: React, Material UI, SASS, Typescript. I am very grateful to get this opportunity. Take a look at my progress at EdFox.</Typography>
              </Grid>
              <Grid item style={{ marginTop: "2vh" }}>
                <Button
                  sx={{
                    backgroundColor: "transparent",
                    border: "1px solid white",
                    color: "white",
                    borderRadius: "20px",
                    transition: "0.3s",
                    "&:hover": {
                      backgroundColor: "white",
                      color: "black",
                      border: "none",
                    },
                  }}
                  variant="contained"
                >
                  GitHub
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
