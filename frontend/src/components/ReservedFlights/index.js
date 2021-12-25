import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

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
import Group13 from "../../assets/Icons/Group13.png";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@mui/material/Avatar";
import { FlightAPI } from "../../api";
import { PassengerAPI } from "../../api";
import BasicDialog from "../Utils/BasicDialog";
import FlightDetails from "../AvailableTickets/FlightDetails";
import { toast } from "react-toastify";
import swal from "sweetalert";
import CircularProgress from "@mui/material/CircularProgress";
let user = localStorage.getItem("user");
let userObj = JSON.parse(user)
let activeUser = userObj.user._id


const useStyles = makeStyles(() => ({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cover: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "inherit",
  },
  marginTop: {
    marginTop: 6,
  },
}));

const formateDate = (isoDate) => {
  const date = new Date(isoDate);
  const formatedDate = `${
    date.getMonth() + 1
  }-${date.getDate()}-${date.getFullYear()}`;
  return formatedDate;
};


export default function ReservedFlightLists() {
  const classes = useStyles();
  const [alert, setAlert] = React.useState(false);
  const [flight_d, setFlight_d] = useState([]);
  const [dialog, setDialog] = useState(false);
  const [loading, setLoading] = useState(true);


  const navigate = useNavigate();
  let[booked, setBooked] = useState([])
  let [flightamt, setFlightamt] = useState();


  const SetAlert = (f_id) => {
    // setAlert(true);
    
       FlightAPI.getOneFlight({_id: f_id}).then((res) => {
        console.log("ddd", res?.data?.dataf[0].ticket)
        setFlightamt(res?.data?.dataf[0].ticket)

        swal({
          title: "Do you want to Cancel Reservation?",
          text: `Your Amount $${res?.data?.dataf[0].ticket} will be refund`,
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          let user = localStorage.getItem('user')
          let userObj = JSON.parse(user)
          let user_Id = userObj.user._id;
          if (willDelete) {
            PassengerAPI.deleteBookedFlight({f_id, userObj}).then(res => {
          // console.log("Booked Flight Deleted", res.data)
        
           } )
            FlightAPI.reservedFlight(user_Id).then(res => {
              // console.log("Your Flights", res.data)
              setBooked(res.data)
            })
            swal("Your Amount is Refunded", {
              icon: "success",
            });
          }
        });
      })

    
  };

  const SendEmail = (item) => {
    let user = localStorage.getItem('user')
    let userObj = JSON.parse(user)
    let user_email = userObj.user.email;

    console.log("userObj", userObj.user.email)

    PassengerAPI.sendEmail({item, user_email }).then(res => {
      console.log("Booked Flight Email Send", res.data)
       res && toast.success("Email Sent!")
       } )
  }

  useEffect(() => {
    let user = localStorage.getItem('user')
    let userObj = JSON.parse(user)
    let user_Id = userObj.user._id;
    
    FlightAPI.reservedFlight(user_Id).then(res => {
      // console.log("Your Flights", res.data)
      setBooked(res.data)
      setLoading(false);
    }
   )
  }, [])

  return (
    <Box mt={1}>
       <BasicDialog open={dialog} close={() => setDialog(false)}>
        <FlightDetails flight={flight_d} />
      </BasicDialog>
      {loading && (
          <Box py={10} display={"flex"} justifyContent={"center"}>
            <CircularProgress />
          </Box>
        )}
        {/* {booked ? null : <Box>Booked</Box>  } */}
{(booked.length > 0) ?
  booked.map((item) => {
    // console.log("item", item)
    return  <Paper elevation={3}>
    <Box>
      <Grid container className={classes.cover}>
        <Grid item xs={6} sm={6} md={2}>
          <Box class="content_center">
            <Box display={"flex"}>
              <Box>
                <Avatar alt="Remy Sharp" src={Group13} />
              </Box>
              <Stack spacing={{ xs: 0, md: 0 }} ml={1} mt={1}>
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
                 {item.trip}
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
                 {item.flight_number}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "12px", sm: "10px" } }}
                  component={"div"}
                  color={"gray.main"}
                ></Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Box class="content_center">
            <Box p={1}>
              <Typography fontWeight={"bold"}>09:45 PM</Typography>
              <Typography
                fontWeight={"bold"}
                color={"gray.main"}
                sx={{ fontSize: "12px" }}
              >
                {formateDate(item.dep_date)}
              </Typography>
              <Typography fontWeight={"bold"} sx={{ fontSize: "12px" }}>
                {item.from}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={2.5}>
          <Box className={classes.center}>
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
                31h 10m
              </Typography>
              <Divider sx={{ width: "100%" }} />
              {/* <Typography
                color={"gray.main"}
                sx={{ fontSize: "12px", pt: 0.5 }}
              >
                {item.stop}
              </Typography> */}
              <Button
                style={{
                  padding: "4px 38px",
                  fontSize: "0.8125rem",
                  marginTop: 7,
                  fontWeight: 600,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                  backgroundColor: "black",
                  marginBottom: "-38px",
                }}
                // className={classes.detailBtn}
                variant={"contained"}
                size="small"
                onClick={() => {
                  setFlight_d(item);
                  setDialog(true);
                }}
              >
                Details
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={2}>
          <Box className={classes.center}>
            <Box p={1}>
              <Typography fontWeight={"bold"}>12:45 AM</Typography>
              <Typography
                fontWeight={"bold"}
                color={"gray.main"}
                sx={{ fontSize: "12px" }}
              >
               {formateDate(item.arr_date)}
              </Typography>
              <Typography fontWeight={"bold"} sx={{ fontSize: "12px" }}>
                {item.to}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={1}>
          <Box
            className={classes.center}
            style={{
              borderLeft: "2px dashed #707070",
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              p={1}
            >

              <Typography
                fontWeight={"bold"}
                sx={{ fontSize: "20px", color: "#2699FB" }}
              >
                ${item.ticket}
              </Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={2.5}>
          <Box className={classes.center}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              p={1}
              style={{ width: "60%" }}
            >
              <Button
                variant={"contained"}
                fullWidth
                style={{
                  marginTop: 6,
                  width: "100%",
                  backgroundColor: "#40AF00",
                }}
                onClick={() => SendEmail(item)}
                size={"small"}
              >
                Email Me
              </Button>

              <Button
                className={classes.marginTop}
                variant={"contained"}
                fullWidth
                style={{ marginTop: 6, backgroundColor: "#FF0404" }}
                size={"small"}
                onClick={() => SetAlert(item._id)}
              >
                Cancel
              </Button>

              <Button
                // className={classes.marginTop}
                style={{ marginTop: 6 }}
                variant={"outlined"}
                fullWidth
                size={"small"}
                onClick={() => navigate(`/home/reserved-tickets/edit/${item._id}`)}
              >
                Edit
              </Button>
            </Box>
          </Box>

        </Grid>
      </Grid>
    </Box>
  </Paper>
  }) : (<h>No flights were booked!</h>) }
    </Box>
  );
}
