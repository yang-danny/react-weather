import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box sx={{
        width: "100%",
        height: "auto",
        p: "1rem",
      }}>
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h5">
              React Weather App
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">
              {`${new Date().getFullYear()} | React | Material UI | React Hooks | Local Storage | OpenWeather API`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;