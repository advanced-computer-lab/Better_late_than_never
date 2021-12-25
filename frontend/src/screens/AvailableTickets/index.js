import React, { useState } from "react";
import SlideableCard from "../../components/Utils/SlideableCard";
import SearchFlightForm from "../../components/AvailableTickets/SearchFlightForm";
import AvailableFlights from "../../components/AvailableTickets/AvailableFlights";
// import PersonalInfo from "../../components/AvailableTickets/PersonalInfo";
import AccountInfo from "../../components/AvailableTickets/AccountInfo";
// import Baggage from "../../components/AvailableTickets/Baggage";
import PaymentGatwways from "../../components/AvailableTickets/PaymentGateway";
import { Container, Grid } from "@mui/material";
import Summary from "../../components/Utils/Summary";
import Header from "../../components/Layout/Header";

export default function AvailableTickets() {
  const [f_summary, setf_summary] = useState();
  let flightdata = localStorage.getItem("flight");
  let activeFlight = JSON.parse(flightdata);
  return (
    <>
      <Container>
        <Header />
      </Container>
      <Grid container spacing={1} pl={9} mt={5}>
        <Grid item md={9.5}>
          {activeFlight && (
            <SlideableCard
              title={`${activeFlight?.trip} : ${activeFlight?.from} - ${activeFlight?.to}`}
              passanger={`${activeFlight?.depDate} | ${activeFlight?.no_of_passengers} PASSANGERS `}
            >
              <SearchFlightForm />
            </SlideableCard>
          )}

          <AvailableFlights f_summary={f_summary} setID={setf_summary} />
          {/* <PersonalInfo /> */}
          {/* <Baggage /> */}
          {/* <PaymentGatwways /> */}
        </Grid>
        <Grid item md={2.5} pr={1}>
          <Summary id={f_summary} />
        </Grid>
      </Grid>
    </>
  );
}
