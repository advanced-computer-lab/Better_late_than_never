import React from "react";
import BackButton from "../../components/BackButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import ReservedFlightLists from "../../components/ReservedFlights";

import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
export default function ReservedTickets() {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/home");
  };
  const onConfirm = () => {
    navigate("/home");
  };
  const onCancel = () => {
    navigate("/home");
  };

  return (
    <Container>
      {/* <Header /> */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <BackButton
            style={{ fontSize: 20, color: "#2699FB", padding: 0 }}
            action={goBack}
          >
            <ArrowBackIcon
              sx={{ marginTop: 0.5, marginRight: 1, fontSize: 20 }}
            />
            back
          </BackButton>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography
            variant="h5"
            style={{ fontWeight: 600 }}
            gutterBottom
            component="div"
          >
            Current Reserved Flights
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <ReservedFlightLists />
        </Grid>
       
      </Grid>
    </Container>
  );
}
