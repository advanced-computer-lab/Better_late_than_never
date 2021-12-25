import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Departure from "../../assets/Icons/aawesome-plane-departure.svg";
import Return from "../../assets/Icons/awesome-plane-return.svg";

const formateDate = (isoDate) => {
  const date = new Date(isoDate);
  const formatedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
  return formatedDate;
};

export default function Summary({ id }) {
  return (
    <Paper elevation={4}>
      <Box display={"flex"} justifyContent={"center"}>
        <Typography varient={"h3"} fontWeight={"bold"} mt={2}>
          SUMMARY
        </Typography>
      </Box>
      <Box borderLeft={"6px solid"} borderColor={"blue.light"} py={2} mt={2}>
        <Typography
          pl={2}
          varient={"h5"}
          color={"blue.light"}
          fontWeight={"bold"}
        >
          Flights
        </Typography>
      </Box>
      <Box mx={2}>
        {id ? (
          <Box mt={2}>
              <Box display={"flex"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"13px"}
                  color={"gray.main"}
                  // ml={1}
                >
                 {id.flight_number} 
                </Typography>
              </Box>
            <Box display={"flex"}>
              <img width={"7%"} src={Departure} alt="" />
              <Box display={"flex"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"13px"}
                  color={"gray.main"}
                  ml={1}
                >
                 {id.trip}  { " | $" + id.ticket}
                </Typography>
              </Box>
            </Box>
            <Box mt={1}>
              <Typography fontWeight={"bold"} fontSize={"12px"}>
                {id?.dep_time} | {formateDate(id?.dep_date)}
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"12px"}>
                {id?.from}
              </Typography>
            </Box>
            <Box mt={1}>
              <Typography fontWeight={"bold"} fontSize={"12px"}>
                {id?.arr_time} | {formateDate(id?.arr_date)}
              </Typography>
              <Typography fontWeight={"bold"} fontSize={"12px"}>
                {id?.to}
              </Typography>
              {/* <Typography
                fontWeight={"bold"}
                fontSize={"12px"}
                color={"gray.main"}
              >
                {id?.stop} Stops
              </Typography> */}
            </Box>
          </Box>
        ) : (
          <Typography mt={3} color={"gray.main"}>
            Select Record form Summary...
          </Typography>
        )}

        {/* <Box mt={5}>
          <Grid container spacing={0}>
            <Grid item md={6}>
              <Typography
                fontWeight={"bold"}
                fontSize={"12px"}
                color={"gray.main"}
              >
                Cabin
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography
                fontWeight={"bold"}
                fontSize={"12px"}
                color={"gray.main"}
              >
                Economy
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography
                fontWeight={"bold"}
                fontSize={"12px"}
                color={"gray.main"}
              >
                Seat #
              </Typography>
            </Grid>
            <Grid item md={6}>
              <Typography
                fontWeight={"bold"}
                fontSize={"12px"}
                color={"gray.main"}
              >
                25
              </Typography>
            </Grid>
          </Grid>
        </Box> */}
      </Box>

      <Box pb={4}>
        <Box borderLeft={"6px solid"} borderColor={"blue.light"} py={2} mt={2}>
          <Box display={"flex"}>
            <Typography
              pl={2}
              varient={"h5"}
              color={"blue.light"}
              fontWeight={"bold"}
            >
              Total Price
            </Typography>
            <Typography varient={"h5"} fontWeight={"bold"}>
              &nbsp;|&nbsp;
            </Typography>
            <Typography varient={"h5"} color={"gray.main"} fontWeight={"bold"}>
              ${id ? id.ticket : 0.0}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
