import React from "react";
import {
  Button,
  CardContent,
  Collapse,
  Grid,
  Stack,
  Typography,
  IconButton,
  Container,
} from "@mui/material";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import Planeicon from "../../assets/Icons/plane2.svg"


export default function SlideableCard({ title, passanger, children }) {
  const [expanded, setExpanded] = React.useState(false);
  let flightdata = localStorage.getItem("flight");
  let activeFlight = JSON.parse(flightdata)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Box color={"white"}>
      {console.log("flight", JSON.parse(flightdata))}
      <Box bgcolor={"blue.dark"} borderRadius={"12px"}>
        <Grid container spacing={0}>
          <Grid item md={9} sm={9} xs={12}>
            <Box py={2} pl={2}>
              <Box display={"flex"}>
                <Box mt={2} mr={2}>
                  {/* <IconButton sx={{ bgcolor: "blue.light" }}>
                    <TwitterIcon
                      sx={{
                        fontSize: { sm: "35px", md: "50px" },
                        color: "white",
                      }}
                    />
                  </IconButton> */}
                    <img src={Planeicon}></img>
                </Box>
                <Stack spacing={{ xs: 0, md: 0 }} ml={1}>
                  <Typography
                    sx={{ fontSize: { md: "25px", xs: "15px", sm: "18px" } }}
                    component={"div"}
                    color={"blue.light"}
                    fontWeight={"bold"}
                  >
                    
                  {activeFlight ? title : "All Flights"}
                  </Typography>
                  <Typography
                    sx={{ fontSize: { xs: "12px", sm: "15px" } }}
                    component={"div"}
                    color={"gray.main"}
                  >
                    
                    {activeFlight ? passanger : "Find the information you need to make the right decision"}
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
              {/* <Button
                onClick={handleExpandClick}
                color="inherit"
                variant={"contained"}
                size={"large"}
                sx={{ color: "black" }}
              >
                Change
              </Button> */}
            </Box>
          </Grid>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{children}</CardContent>
        </Collapse>
      </Box>
    </Box>
  );
}
