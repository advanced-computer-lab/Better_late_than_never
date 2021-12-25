import React from "react";
import BackButton from "../../components/BackButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Typography from "@mui/material/Typography";
import AddPassenger from "../../components/Passenger/AddPassenger";
import { useNavigate } from "react-router-dom";
import Summary from "../../components/Utils/Summary";
export default function ReservedTickets() {
  let navigate = useNavigate();
  const goBack = () => {
    navigate("/home");
  };
  return (
    <Grid container spacing={2}>
      <Grid  item xs={12} md={12}>
        <BackButton
          style={{ fontSize: 20, marginLeft: 20, color: "#2699FB", padding: 0 }}
          action={goBack}
        >
          <ArrowBackIcon
            sx={{ marginTop: 0.5, marginRight: 1, fontSize: 20 }}
          />{" "}
          back
        </BackButton>
        {/* <Typography variant="h5" style={{ fontWeight:600}} gutterBottom component="div">
                       Who's Travelling ?
                    </Typography> */}
        <AddPassenger />
      </Grid>
      {/* <Grid item ml={1} md={3} pr={1}>
                   <Summary  />
                </Grid> */}
    </Grid>
  );
}
