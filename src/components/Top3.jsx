import { Avatar, Badge, Paper, Typography } from "@mui/material";
import React from "react";

const Top3 = ({ user, rankColor, rank }) => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: { xs: 0, sm: 2 },
        mx: 1,
        textAlign: "center",
        flex: 1,
        minWidth: 0,
        borderTop: `5px solid ${rankColor}`,
        borderRadius: 3,
      }}
    >
      <Badge
        badgeContent={rank}
        color="primary"
        overlap="circular"
        sx={{
          "& .MuiBadge-badge": {
            backgroundColor: rankColor,
            color: "#fff",
            fontWeight: "bold",
            fontSize: "0.75rem",
            width: 22,
            height: 22,
            borderRadius: "50%",
            top: 6,
            right: 6,
          },
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Avatar
          src={user.avi}
          alt={user.name}
          sx={{
            width: { xl: 56, xs: 44 },
            height: { xl: 56, xs: 44 },
            mx: "auto",
            mb: 1,
          }}
        />
      </Badge>
      <Typography
        variant="subtitle1"
        fontWeight={600}
        sx={{
          fontSize: { xs: "0.7rem" },
          display: { xs: "none", sm: "block" },
        }}
      >
        {user.name}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          fontSize: { xs: "0.7rem" },
          display: { xs: "none", sm: "block" },
        }}
      >
        {user.points} pts
      </Typography>
    </Paper>
  );
};

export default Top3;
