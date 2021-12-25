import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Button,
  CardContent,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import FacebookIcon from "@mui/icons-material/Facebook";
import InputIcon from "@mui/icons-material/Input";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  searchBox: {
    position: "relative",
    background: "#e1e1e1",
    borderRadius: "20px",
    padding: "8px 50px 0px 15px",
  },
  searchIcon: {
    background: "red",
    zIndex: "9999",
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: "50%",
  },
  textColor: {
    bgcolor: "red",
  },
});

export default function AvailableTickets() {
  const [expanded, setExpanded] = React.useState(false);

  const classes = useStyles();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* Topbar */}
      <Box bgcolor={"blue.dark"} color={"white"}>
        <Box mx={{ xs: 2, sm: 10, md: 15, lg: 20 }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6} md={6}>
              <Box py={1}>
                <Stack direction="row" spacing={2}>
                  <FacebookIcon sx={{ fontSize: "18px" }} />
                  <TwitterIcon sx={{ fontSize: "18px" }} />
                  <GoogleIcon sx={{ fontSize: "18px" }} />
                  <InstagramIcon sx={{ fontSize: "18px" }} />
                </Stack>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Box py={1} display={"flex"} flexDirection={"row-reverse"}>
                <Stack direction="row" spacing={6}>
                  <Box display={"flex"}>
                    <PersonIcon sx={{ fontSize: "18px", mr: 0.5 }} />
                    <Typography sx={{ fontSize: "12px" }}>Join</Typography>
                  </Box>
                  <Box display={"flex"}>
                    <InputIcon sx={{ fontSize: "18px", mr: 0.5 }} />
                    <Typography sx={{ fontSize: "12px" }}>Login</Typography>
                  </Box>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Search Box */}
      <Box py={{ xs: 1, sm: 3, md: 5, lg: 5 }}>
        <Box mx={{ xs: 2, sm: 10, md: 15, lg: 20 }}>
          <Grid container spacing={0}>
            <Grid item md={6} sm={6}>
              <Box>
                <Typography
                  component={"div"}
                  variant={"h4"}
                  fontWeight={"bold"}
                  pb={{ xs: 1 }}
                >
                  LOGO
                </Typography>
              </Box>
            </Grid>
            <Grid item md={6} sm={6}>
              <Box display={"flex"} flexDirection={"row-reverse"}>
                <Box className={classes.searchBox}>
                  <Box className={classes.searchIcon} bgcolor={"blue.light"}>
                    <IconButton aria-label="Search Filed">
                      <SearchIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                  <TextField
                    variant="standard"
                    placeholder={"Search"}
                    type={"text"}
                  />
                </Box>
                <Button sx={{ mr: 2, fontWeight: "bold", color: "inherit" }}>
                  HOME
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* Expand  */}
      <Box color={"white"}>
        <Box
          mx={{ xs: 2, sm: 10, md: 15, lg: 20 }}
          bgcolor={"blue.dark"}
          borderRadius={"12px"}
        >
          <Grid container spacing={0}>
            <Grid item md={9} sm={9} xs={12}>
              <Box py={2} pl={2}>
                <Box display={"flex"}>
                  <Box>
                    <IconButton sx={{ bgcolor: "blue.light" }}>
                      <TwitterIcon
                        sx={{
                          fontSize: { sm: "35px", md: "50px" },
                          color: "white",
                        }}
                      />
                    </IconButton>
                  </Box>
                  <Stack spacing={{ xs: 0, md: 1 }} ml={1}>
                    <Typography
                      sx={{ fontSize: { md: "25px", xs: "15px", sm: "18px" } }}
                      component={"div"}
                      color={"blue.light"}
                      fontWeight={"bold"}
                    >
                      Departure: Los Angeles - Dubai
                    </Typography>
                    <Typography
                      sx={{ fontSize: { xs: "12px", sm: "15px" } }}
                      component={"div"}
                      color={"gray.main"}
                    >
                      SEP 05, SAT | 3 PASSANGERS
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
            <Grid item md={3} sm={3} xs={12}>
              <Box
                display={"flex"}
                flexDirection={"row-reverse"}
                p={{ xs: 1, sm: 3, md: 4 }}
              >
                <Button
                  onClick={handleExpandClick}
                  color="inherit"
                  variant={"contained"}
                  size={"large"}
                  sx={{ color: "black" }}
                >

                  Changeings
                </Button>
              </Box>
            </Grid>

          </Grid>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {/* Form */}
              <Grid container spacing={2}>
                <Grid item md={3.5} xs={12} sm={6}>
                  <Box bgcolor={"#3A6A91"} borderRadius={3} pt={2} px={2}>
                    <TextField
                      fullWidth
                      placeholder={"Los Angels"}
                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item md={3.5} xs={12} sm={6}>
                  <Box
                    bgcolor={"#3A6A91"}
                    borderRadius={3}
                    pt={2}
                    px={2}
                    color={"white"}
                  >
                    <TextField
                      fullWidth
                      placeholder={"Dubai"}
                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item md={2.5} xs={12} sm={6}>
                  <Box
                    bgcolor={"#3A6A91"}
                    borderRadius={3}
                    pt={2}
                    px={2}
                    color={"white"}
                  >
                    <TextField
                      fullWidth
                      placeholder={"Depart"}
                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item md={2.5} xs={12} sm={6}>
                  <Box
                    bgcolor={"#3A6A91"}
                    borderRadius={3}
                    pt={2}
                    px={2}
                    color={"white"}
                  >
                    <TextField
                      fullWidth
                      placeholder={"Departure"}
                      variant="standard"
                    />
                  </Box>
                </Grid>
              </Grid>
              <Grid container spacing={2} mt={1}>
                <Grid item md={2.5} xs={12} sm={6}>
                  <Box bgcolor={"#3A6A91"} borderRadius={3} pt={2} px={2}>
                    <TextField
                      fullWidth
                      placeholder={"Adult"}
                      variant="standard"
                      InputProps={{
                        className: classes.textColor,
                      }}
                    />
                  </Box>
                </Grid>
                <Grid item md={2.5} xs={12} sm={6}>
                  <Box
                    bgcolor={"#3A6A91"}
                    borderRadius={3}
                    pt={2}
                    px={2}
                    color={"white"}
                  >
                    <TextField
                      fullWidth
                      placeholder={"Children"}
                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item md={2.5} xs={12} sm={6}>
                  <Box
                    bgcolor={"#3A6A91"}
                    borderRadius={3}
                    pt={2}
                    px={2}
                    color={"white"}
                  >
                    <TextField
                      fullWidth
                      placeholder={"Cabin"}
                      variant="standard"
                    />
                  </Box>
                </Grid>
                <Grid item md={4.5} xs={12} sm={6}>
                  <Button
                    sx={{
                      borderRadius: "10px",
                      py: 1.5,
                      bgcolor: "blue.light",
                    }}
                    fullWidth
                    variant={"contained"}
                  >
                    Search Flight
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Collapse>
        </Box>
      </Box>

      {/* Available department flights  */}
      <Box mx={{ xs: 2, sm: 10, md: 15, lg: 20 }} my={2}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Button fullWidth variant="contained" sx={{ bgcolor: "blue.dark" }}>
              Reserved Flights
            </Button>
          </Grid>
          <Grid item md={9}>
            <Grid container spacing={2}>
              <Grid item md={7}>
                <Box mt={1}>
                  <Typography fontWeight={"bold"}>
                    Available Departure Flights
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={5}>
                <Box display={"flex"} flexDirection={"row-reverse"}>
                  <Button
                    variant="outlined"
                    endIcon={<KeyboardArrowDownIcon />}
                    sx={{ bgcolor: "#d3d0d0", color: "black" }}
                  >
                    Price per Adult
                  </Button>
                  <Box my={"auto"} pr={1}>
                    <Typography fontWeight={"bold"}>Sort By:</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Available department flights  */}
      <Box mx={{ xs: 2, sm: 10, md: 15, lg: 20 }} mt={2}>
        <Grid container spacing={2}>
          <Grid item md={3}>
            <Paper elevation={3}>
              <Button
                fullWidth
                variant="contained"
                sx={{ bgcolor: "blue.dark" }}
              >
                Filter
              </Button>
              <Box mt={7} mx={2}>
                <Typography>Price Range</Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={9}>
            <Box mt={1}>
              <Paper elevation={3}>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item md={3}>
                      <Box py={2} pl={2}>
                        <Box display={"flex"}>
                          <Box>
                            <IconButton sx={{ bgcolor: "blue.light" }}>
                              <TwitterIcon
                                sx={{
                                  fontSize: { sm: "35px", md: "20px" },
                                  color: "white",
                                }}
                              />
                            </IconButton>
                          </Box>
                          <Stack spacing={{ xs: 0, md: 0 }} ml={1}>
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
                              Amirates Airline
                            </Typography>
                            <Typography
                              sx={{ fontSize: { xs: "12px", sm: "10px" } }}
                              component={"div"}
                              color={"gray.main"}
                            >
                              BA - 3271
                            </Typography>
                          </Stack>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item md={2}>
                      <Box p={1}>
                        <Typography fontWeight={"bold"}>09:45 PM</Typography>
                        <Typography
                          fontWeight={"bold"}
                          color={"gray.main"}
                          sx={{ fontSize: "12px" }}
                        >
                          SEP 05, SAT
                        </Typography>
                        <Typography
                          fontWeight={"bold"}
                          sx={{ fontSize: "12px" }}
                        >
                          Los Angeles
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={2.5}>
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
                        <Typography
                          color={"gray.main"}
                          sx={{ fontSize: "12px", pt: 0.5 }}
                        >
                          2 stops
                        </Typography>
                        <Button
                          variant={"contained"}
                          sx={{
                            bgcolor: "blue.dark",
                            color: "white",
                            mt: 3,
                            borderTopRightRadius: "15px",
                            borderTopLeftRadius: "15px",
                          }}
                          size={"small"}
                        >
                          Details
                        </Button>
                      </Box>
                    </Grid>
                    {/* fghggggggggggggggg */}

                    <Grid item md={2}>
                      <Box p={1}>
                        <Typography fontWeight={"bold"}>12:45 AM</Typography>
                        <Typography
                          fontWeight={"bold"}
                          color={"gray.main"}
                          sx={{ fontSize: "12px" }}
                        >
                          SEP 06, SUN
                        </Typography>
                        <Typography
                          fontWeight={"bold"}
                          sx={{ fontSize: "12px" }}
                        >
                          Dubai
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item md={2.5}>
                      <Box
                        display={"flex"}
                        flexDirection={"column"}
                        alignItems={"center"}
                        p={1}
                      >
                        <Typography
                          fontWeight={"bold"}
                          sx={{ fontSize: "20px" }}
                        >
                          $583
                        </Typography>
                        <Button
                          variant={"contained"}
                          fullWidth
                          sx={{
                            bgcolor: "green",
                            color: "white",
                            mt: 1,
                          }}
                          size={"small"}
                        >
                          Select
                        </Button>
                        <Typography
                          fontWeight={"bold"}
                          sx={{ fontSize: "12px", color: "gray.main", mt: 1 }}
                        >
                          + Add Passanger Info
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
