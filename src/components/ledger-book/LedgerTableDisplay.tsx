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

const LedgerTableDisplay = () => {
  const { data, isLoading } = api.transaction.getTransactions.useQuery();

  console.log(data);

  if (isLoading) return <LinearProgress />;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Credit</TableCell>
            <TableCell align="right">Debit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!data && <p>Empty</p>}
          {data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.createdAt.toString()}
              </TableCell>
              <TableCell align="right">{row.description}</TableCell>
              <TableCell align="right">{row.credit}</TableCell>
              <TableCell align="right">{row.debit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LedgerTableDisplay;
