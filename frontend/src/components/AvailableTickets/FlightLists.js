import React, { useState, useEffect } from "react";
import {
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import TwitterIcon from "@mui/icons-material/Twitter";
import Planeicon from "../../assets/Icons/plane2.svg";
import { useNavigate } from "react-router-dom";
import BasicDialog from "../Utils/BasicDialog";
import FlightDetails from "./FlightDetails";
import { makeStyles } from "@mui/styles";
import { FlightAPI, PassengerAPI } from "../../api";
import { toast } from "react-toastify";
import AccountInfo from "./AccountInfo";

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

export default function FlightLists({allFlight, flightType, setID, f_summary }) {
  let navigate = useNavigate();
  const classes = useStyles();

  const [dialog, setDialog] = useState(false);
  const [avaliable, setAvaliable] = useState([]);
  const [flight_d, setFlight_d] = useState([]);
  const [existSearch, setExistSearch] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let searchedFlight = JSON.parse(localStorage.getItem("flight"));

  const flightList = () => {
    FlightAPI.getFlights().then((res) => {
      setData(res?.data?.data);
      setLoading(false);
    });
  };

  const searchedFlights = () => {
    let flightdata = localStorage.getItem("flight");
    if (flightdata) {
      FlightAPI.bookFlight(JSON.parse(flightdata)).then((res) => {
        setAvaliable(res?.data);
        setLoading(false);
      });
    }
  };

  useEffect(() => {
    flightList();
    searchedFlights();
    let ff = localStorage.getItem("flight");
    setExistSearch(ff);
  }, []);

  return (
    <Box mt={1}>
      <BasicDialog open={dialog} close={() => setDialog(false)}>
        <FlightDetails flight={flight_d} />
      </BasicDialog>
      <Box>
        {loading && (
          <Box py={10} display={"flex"} justifyContent={"center"}>
            <CircularProgress />
          </Box>
        )}
       
       {
         existSearch ? avaliable?.map((flight) => {
          return serchFlights(flight);
        }) : 
        (
          flightType ? flightType?.map((flight) => {
            return serchFlights(flight);
          }) : (
            allFlight ?  allFlight?.map((flight) => {
              return serchFlights(flight);
            }) : data?.map((flight) => {
              return serchFlights(flight);
            })
          )
        )
       }
           
      </Box>
    </Box>
  );

  function serchFlights(flight) {
    return (
      <Paper elevation={3} sx={{ mb: "30px" }}>
        <Box>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={3}>
              <Box className={classes.content_center}>
                <Box display={"flex"}>
                  <Box mx={2}>
                    {/* <IconButton sx={{ bgcolor: "blue.light" }}>
                      
                    </IconButton> */}
                    <img src={Planeicon}></img>
                  </Box>
                  <Stack spacing={{ xs: 0, md: 0 }} mt={1} ml={1}>
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
                      {flight.trip}
                    </Typography>
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
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Box className={classes.content_center}>
                <Box p={1}>
                  <Typography fontWeight={"bold"}>{flight.dep_time}</Typography>
                  <Typography
                    fontWeight={"bold"}
                    color={"gray.main"}
                    sx={{ fontSize: "12px" }}
                  >
                    {formateDate(flight.dep_date)}
                  </Typography>
                  <Typography fontWeight={"bold"} sx={{ fontSize: "12px" }}>
                    {flight.from}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2.5}>
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
                    Seats Avliable: { searchedFlight?.cabin === "Business" ? flight?.business_class_seats : 
                   ( searchedFlight?.cabin === "Economy" ? flight?.economy_seats : flight?.first_class_seats)
                    } 
                  </Typography>
                  <Divider sx={{ width: "100%" }} />
                  {/* <Typography
                    color={"gray.main"}
                    sx={{ fontSize: "12px", pt: 0.5 }}
                  >
                    {flight.stop + " Stops"}
                  </Typography> */}
                  <Button
                    variant={"contained"}
                    sx={{
                      bgcolor: "blue.dark",
                      color: "white",
                      mt: 2,
                      borderTopRightRadius: "15px",
                      borderTopLeftRadius: "15px",
                    }}
                    onClick={() => {
                      setFlight_d(flight);
                      setDialog(true);
                    }}
                    size="small"
                  >
                    Details
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <Box className={classes.content_center}>
                <Box p={1}>
                  <Typography fontWeight={"bold"}>{flight.arr_time}</Typography>
                  <Typography
                    fontWeight={"bold"}
                    color={"gray.main"}
                    sx={{ fontSize: "12px" }}
                  >
                    {formateDate(flight.arr_date)}
                  </Typography>
                  <Typography fontWeight={"bold"} sx={{ fontSize: "12px" }}>
                    {flight.to}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={2.5}>
              <Box className={classes.content_center}>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  alignItems={"center"}
                  p={1}
                >
                  <Typography fontWeight={"bold"} sx={{ fontSize: "20px" }}>
                    ${flight.ticket}
                  </Typography>

                  <Button
                    variant={"contained"}
                    fullWidth={true}
                    color={
                      f_summary?._id === flight?._id ? "success" : "primary"
                    }
                    sx={{
                      width: "100%",
                      mt: 1,
                    }}
                    size={"small"}
                    onClick={() => setID(flight)}
                  >
                    {f_summary?._id === flight?._id ? "Selected" : "Select"}
                  </Button>
                  {f_summary?._id === flight?._id ? (
                    <Typography
                      onClick={() => {
                        let user = JSON.parse(localStorage.getItem("user"));

                        if (user) {
                         let data = {
                          f_id: flight._id ,
                           user_id : user.user._id
                         }
                         console.log("chcckk", data)
                         PassengerAPI.checkBooking(data).then((res) => {
                           console.log("checking null", res.data)
                          res.data == "" ?  navigate(`/home/add-passenger/${flight._id}`) : toast.warning("Your have already booked this flight")
                        });
                        } else {
                          toast.error("Please Login to add passanger!");
                        }

                        // user ? addNow : success
                      }}
                      fontWeight={"bold"}
                      sx={{
                        fontSize: "12px",
                        color: "gray.main",
                        mt: 1,
                        cursor: "pointer",
                      }}
                    >
                      + Add Passanger Info
                    </Typography>
                  ) : (
                    ""
                  )}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    );
  }
}
