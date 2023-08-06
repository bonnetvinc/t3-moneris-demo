import { Grid, LinearProgress } from "@mui/material";
import React from "react";
import RegisteredCardsTableDisplay from "./RegisterdCardsTable";
import CreateRegisteredCard from "./CreateRegisteredCard";

const RegisterdCards = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <CreateRegisteredCard />
      </Grid>
      <Grid item xs={12}>
        <RegisteredCardsTableDisplay />
      </Grid>
    </Grid>
  );
};

export default RegisterdCards;
