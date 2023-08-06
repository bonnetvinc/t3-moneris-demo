import * as React from "react";
import CreateMockTransaction from "./CreateMockTransaction";
import { Grid } from "@mui/material";
import LedgerTableDisplay from "./LedgerTableDisplay";

export default function LedgerBook() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <CreateMockTransaction />
      </Grid>
      <Grid item xs={12}>
        <LedgerTableDisplay />
      </Grid>
    </Grid>
  );
}
