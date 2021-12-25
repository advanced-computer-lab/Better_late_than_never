import React from "react";
import { Box } from "@mui/system";
import TopBar from "./TopBar";

export default function Navbar({ children }) {
  return (
    <>
      <Box bgcolor={"blue.dark"} color={"white"}>
        <TopBar />
      </Box>
      <Box py={{ xs: 1, sm: 3, md: 5, lg: 5 }}>
        <Box>{children}</Box>
      </Box>
    </>
  );
}
