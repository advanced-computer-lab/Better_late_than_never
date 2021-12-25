import React from "react";
import { Box } from "@mui/material";
import PlayerImage from "./footballPlayer.png";

export default function FootballPlayer() {
  return (
    <div>
      <Box display={"flex"} justifyContent={"center"}>
        <img width={"70%"} src={PlayerImage} alt="" />
      </Box>
    </div>
  );
}
