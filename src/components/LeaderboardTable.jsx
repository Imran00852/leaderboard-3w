import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Avatar,
  TablePagination,
  Box,
  Typography,
} from "@mui/material";

const LeaderboardTable = ({ users }) => {
  const [page, setPage] = useState(0);
  const rowsPerPage = 17;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const paginatedUsers = users.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ mt: 4, borderRadius: 3 }}>
      <TableContainer>
        <Table>
          <TableBody>
            {paginatedUsers.map((user) => (
              <TableRow key={user.rank} hover>
                <TableCell width={50}>
                  <Typography fontWeight="bold">{user.rank}</Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={user.avi}
                      alt={user.name}
                      sx={{ width: 32, height: 32, mr: 1 }}
                    />
                    <Typography>{user.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Typography fontWeight={500}>{user.points} pts</Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={users.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[20]}
      />
    </Paper>
  );
};

export default LeaderboardTable;
