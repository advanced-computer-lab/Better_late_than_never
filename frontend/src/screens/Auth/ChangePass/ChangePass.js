import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AccountInfo from "../../../components/AvailableTickets/AccountInfo";
import TopBar from "../../../components/Layout/TopBar";

export default function ChangePass() {
  return (
    <>
      <Box bgcolor={"blue.dark"}>
        <TopBar />
      </Box>
      <Container sx={{ mt: 9 }}>
        <AccountInfo />
      </Container>
    </>
  );
}
