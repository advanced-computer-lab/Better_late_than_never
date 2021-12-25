import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import moment from "moment";
import { FlightAPI } from "../../../api";

export default function View({ viewRow }) {
  console.log(viewRow)
  const [row, setRow] = useState({});
  const [seat, setseat] = useState({});

  const getOne = () => {
    FlightAPI.getOneFlight(viewRow).then((res) =>{ 
      console.log(res?.data?.dataf[0]);
      setRow(res?.data?.dataf[0])
      setseat(res?.data?.datas)
    });
  };

  useEffect(() => {
    getOne();
  }, []);

  return (
    <Box my={4}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          Trip:
        </Grid>
        <Grid item xs={6}>
          {row.trip === "Return" ? "Return" : "Departure"}
        </Grid>
        <Grid item xs={6}>
          Flight #:
        </Grid>
        <Grid item xs={6}>
          {row.flight_number}
        </Grid>
        <Grid item xs={6}>
          From:
        </Grid>
        <Grid item xs={6}>
          {row.from}
        </Grid>
        <Grid item xs={6}>
          To:
        </Grid>
        <Grid item xs={6}>
          {row.to}
        </Grid>
        {/* <Grid item xs={6}>
          Stops:
        </Grid>
        <Grid item xs={6}>
          {row.stop}
        </Grid> */}
        <Grid item xs={6}>
          Economy Seats:
        </Grid>
        <Grid item xs={6}>
          {seat.economy_seats?.length}
        </Grid>
        <Grid item xs={6}>
          Business Class Seats:
        </Grid>
        <Grid item xs={6}>
          {seat.business_class_seats?.length}
        </Grid>
        <Grid item xs={6}>
          First Class Seats:
        </Grid>
        <Grid item xs={6}>
          {seat.first_class_seats?.length}
        </Grid>
        <Grid item xs={6}>
          Departure Date:
        </Grid>
        <Grid item xs={6}>
          {moment(row.dep_date).format("DD-MM-YYYY")}
        </Grid>
        <Grid item xs={6}>
          Departure Time:
        </Grid>
        <Grid item xs={6}>
          {row.dep_time}
        </Grid>
        <Grid item xs={6}>
          Arrival Date:
        </Grid>
        <Grid item xs={6}>
          {moment(row.arr_date).format("DD-MM-YYYY")}
        </Grid>
        <Grid item xs={6}>
          Arrival Time:
        </Grid>
        <Grid item xs={6}>
          {row.arr_time}
        </Grid>
        <Grid item xs={6}>
          Ticket:
        </Grid>
        <Grid item xs={6}>
          {row.ticket}
        </Grid>
        <Grid item xs={6}>
          Terminal:
        </Grid>
        <Grid item xs={6}>
          {row.airport_terminal}
        </Grid>
      </Grid>
    </Box>
  );
}
