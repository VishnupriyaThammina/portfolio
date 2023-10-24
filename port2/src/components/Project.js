import React from "react";
import { Grid, Typography,Button } from "@mui/material";
export default function Project(props){
    return(
        <>
        <Grid  container display="flex" justifyContent="center" alignItems="center" width="100%" height="100%" margin="2vh">
<Grid item container
          direction="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
          width="100%"
          style={{
            margin:"1.5vh",
            background: " rgba(17, 25, 40, 0.01)", 
            backdropFilter: "blur(25px) saturate(102%)",// Set background to transparent
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
            WebkitBackdropFilter: "blur(25px) saturate(102%)",
            borderRadius: "10px",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            color:"white"
          }}>
            <Grid container style={{height:"100%",width:"100%",padding:"4vh"}}>
<Grid item>
    <Typography variant="h4">{props.name}</Typography>
</Grid>
<Grid item>
    <Typography variant="body1">{props.desc}</Typography>
</Grid>
<Grid item >
        <Button sx={{backgroundColor:"transparent",border:"1px solid white",color:"white",borderRadius:"20px",  transition: "0.3s","&:hover":{
    backgroundColor:"white",color:"black",border:"none"
}}} variant="contained">
{props.buttonText}
        </Button>
    </Grid>

            </Grid>

</Grid>

        </Grid>
        </>
    )
}