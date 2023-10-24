import { Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <>
      <Grid
        width="100%"
        height="100%"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{
          padding: "5vh",
          background: "rgba(17, 25, 40, 0.01)",
          backdropFilter: "blur(25px) saturate(102%)",
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          WebkitBackdropFilter: "blur(25px) saturate(102%)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          color: "white",
          fontFamily: "Open Sans", // Use correct font name
          marginTop:"5vh"
        }}
      >
        <Grid
        container
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
            <Grid item>
            <Typography variant="h6" sx={{ fontWeight: 200, fontFamily: "sans-serif" }}>
            Thanks for visiting my portfolio site
          </Typography>
            </Grid>
       
 
       
        </Grid>
      

      </Grid>
    </>
  );
}
