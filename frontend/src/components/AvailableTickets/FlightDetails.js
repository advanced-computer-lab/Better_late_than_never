import React, { useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Planeicon from "../../assets/Icons/plane2.svg";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  content_center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100px",
  },
});

const formateDate = (isoDate) => {
  const date = new Date(isoDate);
  const formatedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
  return formatedDate;
};

export default function FlightDetails({ flight }) {
  const classes = useStyles();

  return (
    <Box>
      <Grid container spacing={0}>
        <Grid item md={6} xs={12}>
          <Typography variant={"h5"} fontWeight={"bold"}>
            Flight Details
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Box display={"flex"} flexDirection={"row-reverse"} mr={4}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            ></Box>
            <Stack mr={2}>
              <Typography variant={"h6"} fontWeight={"bold"}>
                ${flight.ticket}
              </Typography>
              <Typography mt={-0.5} fontSize={"12px"} color={"gray.main"}>
                Total Price
              </Typography>
            </Stack>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item md={12}>
          <Box display={"flex"}>
            <Typography color={"gray.main"} fontWeight={"bold"}>
              {flight.trip}:
            </Typography>
            <Typography> &nbsp;{flight.from}</Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={classes.content_center}>
            <Box display={"flex"}>
              <Box>
                 
                <img src={Planeicon}></img>
              </Box>
              <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                ml={2}
              >
                <Typography
                  sx={{
                    fontSize: {
                      md: "12px",
                      xs: "15px",
                      sm: "18px",
                    },
                  }}
                  component={"div"}
                  color={"gray.main"}
                  fontWeight={"bold"}
                >
                  {flight.flight_number}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={classes.content_center}>
            <Box p={1}>
              <Typography fontWeight={"bold"} sx={{ fontSize: "15px" }}>
                {flight.from}
              </Typography>
              <Typography
                fontWeight={"bold"}
                color={"gray.main"}
                sx={{ fontSize: "12px" }}
              >
                {formateDate(flight.dep_date)}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={classes.content_center}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              pt={1}
            >
              <Typography
                color={"gray.main"}
                sx={{ fontSize: "12px", pb: 0.5 }}
              >
                31h | 10m
              </Typography>
              <Divider sx={{ width: "100%" }} />
              <Typography
                color={"gray.main"}
                sx={{ fontSize: "12px", pt: 0.5 }}
              >
                Economy Class
              </Typography>
              <Typography
                fontWeight={"bold"}
                color={"gray.main"}
                sx={{ fontSize: "12px", pt: 0.5 }}
              >
                Available Seats: 20
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Box className={classes.content_center}>
            <Box p={1}>
              <Typography fontWeight={"bold"} sx={{ fontSize: "15px" }}>
                {flight.to}
              </Typography>
              <Typography
                fontWeight={"bold"}
                color={"gray.main"}
                sx={{ fontSize: "12px" }}
              >
                {formateDate(flight.arr_date)}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={0} mt={2}>
        <Grid item md={4}>
          <Typography fontWeight={"bold"}>Baggage Allowance</Typography>
        </Grid>
        <Grid item md={4}>
          <Typography fontWeight={"bold"} color={"gray.main"}>
            42X32X20cm
          </Typography>
        </Grid>
        <Grid item md={4}>
          <Typography fontWeight={"bold"}>Free</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
