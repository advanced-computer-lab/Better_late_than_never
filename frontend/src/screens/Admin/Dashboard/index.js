import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { FlightAPI } from "../../../api";
import { AuthAPI } from "../../../api";

export default function Index() {
  const [countFlight, setCountFlight] = useState(null);
  const [regUsers, setRegUsers] = useState(null);

  const flights = () => {
    FlightAPI.getFlights().then((res) => {
      setCountFlight(res.data.data.length);
    });
  };

  const users = () => {
    AuthAPI.getUsers().then((res) => {
      setRegUsers(res.data.data.length);
    });
  };

  useEffect(() => {
    flights();
    users();
  }, []);

  return (
    <div>
      <Stack direction="row" spacing={4} width={"100%"} mt={3}>
        <Box py={5} px={2} width={"100%"} border={"1px solid #ddd"}>
          <Typography variant={"h5"}>{countFlight}</Typography>
          <Typography>Flights</Typography>
        </Box>
        <Box py={5} px={2} width={"100%"} border={"1px solid #ddd"}>
          <Typography variant={"h5"}>{regUsers}</Typography>
          <Typography>Users</Typography>
        </Box>
      </Stack>
    </div>
  );
}
