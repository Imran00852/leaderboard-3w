import { Container, Box } from "@mui/material";
import React from "react";
import Top3 from "../components/Top3";
import LeaderboardTable from "../components/LeaderboardTable";
import data from "../data/data.json";

const Leaderboard = () => {
  const topThree = data.slice(0, 3);
  const others = data.slice(3);

  const rankColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Box display="flex" flex={1}>
        {topThree.map((user, index) => (
          <Top3
            key={user.rank}
            user={user}
            rankColor={rankColors[index]}
            rank={user.rank}
          />
        ))}
      </Box>
      <LeaderboardTable users={others} />
    </Container>
  );
};

export default Leaderboard;
