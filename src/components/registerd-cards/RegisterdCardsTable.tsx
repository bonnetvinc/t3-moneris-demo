import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";
import { api } from "~/utils/api";

const RegisteredCardsTableDisplay = () => {
  const { data, isLoading } = api.registerdCards.getRegisteredCards.useQuery();

  if (isLoading) return <LinearProgress />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Mask</TableCell>
            <TableCell align="right">Date on card</TableCell>
            <TableCell align="right">Token</TableCell>
            <TableCell align="right">Issuer Id</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!data && <p>Empty</p>}
          {data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="right">{row.mask}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.dataKey}</TableCell>
              <TableCell align="right">{row.issuerId}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RegisteredCardsTableDisplay;
