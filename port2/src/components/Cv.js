import React from "react";
import { Grid, Typography } from "@mui/material";
import i from "../images/Vishnupriya_resume.pdf";

export default function Cv() {
  return (
    <>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          style={{
            padding: "5vh",
            height: "90%",
            width: "95%",
            background: "rgba(17, 25, 40, 0.01)",
            backdropFilter: "blur(25px) saturate(102%)",
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            WebkitBackdropFilter: "blur(25px) saturate(102%)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
          }}
        >
          <Typography variant="h4" color="white" fontWeight="lighter" sx={{ margin: "2vh" }}>
            Resume
          </Typography>
          <iframe src={i} title="Vishnupriya's Resume" width="55%" height="600px" loading="eager"></iframe>
        </Grid>
      </Grid>
    </>
  );
}
