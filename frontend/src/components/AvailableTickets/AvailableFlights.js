import React from "react";
import { Box } from "@mui/system";
import {
  Button,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FilterFlight from "./FilterFlight";
import { useNavigate } from "react-router-dom";
import FlightLists from "./FlightLists";
import FlightAPI from "../../api/routes/flightRoutes"
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Fade from "@mui/material/Fade";

export default function AvailableFlights({ setID, f_summary }) {
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [flightType, setFlightType] = React.useState(null);
  const [allFlight, setAllFlight] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const depFlights = () => {
    let obj = {data: 'Departure'}
    // alert("dep");
    FlightAPI.filterFlights(obj).then((res) => {
      console.log("okkk", res)
      setFlightType(res.data)
    })
    setAnchorEl(null);
  };
  const allFlights = () => {
    // alert("dep");
    FlightAPI.getFlights().then((res) => {
      console.log("setAllFlight", res.data?.data)
      setFlightType(null)
      setAllFlight(res.data?.data)
    })
    setAnchorEl(null);
  };
  const retFlights = () => {
    let obj = {data: 'Return'}
    // alert("ret");
    FlightAPI.filterFlights(obj).then((res) => {
      console.log("okkk", res.data)
      setFlightType(res.data)
    })
    setAnchorEl(null);
  };



  return (
    <Box>
      <Grid container spacing={2} mt={0.5}>
        <Grid item md={3}>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "blue.dark" }}
            onClick={() => {
              let user = localStorage.getItem("user");

              if (user) {
                navigate("/home/reserved-tickets");
              } else {
                toast.error("Please Login to add passanger!");
              }
            }}
          >
            Reserved Flights
          </Button>
        </Grid>
        <Grid item md={9}>
          <Grid container spacing={2}>
            <Grid item md={7}>
              <Box mt={1}>
                <Typography fontWeight={"bold"}>Available Flights</Typography>
              </Box>
            </Grid>
            <Grid item md={5}>
              <Box display={"flex"} flexDirection={"row-reverse"}>
                <Button
                  variant="outlined"
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{ bgcolor: "#d3d0d0", color: "black" }}
                  id="fade-button"
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Filter
                </Button>
                <Menu
                  id="fade-menu"
                  MenuListProps={{
                    "aria-labelledby": "fade-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={allFlights}>All</MenuItem>
                  <MenuItem onClick={depFlights}>Departure</MenuItem>
                  <MenuItem onClick={retFlights}>Return</MenuItem>
                </Menu>
               
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={0.5}>
        {/* <Grid item xs={12} md={3}>
          <FilterFlight />
        </Grid> */}
        <Grid item md={12}>
          <FlightLists allFlight={allFlight} flightType={flightType} f_summary={f_summary} setID={setID} />
        </Grid>
      </Grid>
    </Box>
  );
}
