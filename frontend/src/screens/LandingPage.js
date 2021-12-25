import React from "react";
import TopBar from "../components/LandingPage/TopBar";
import HomeText from "../components/LandingPage/HomeText";
import DetailsBar from "../components/LandingPage/DetailsBar";
import background from "../assets/LandingPage/background.png";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import BasicCard from "../components/Card";

const useStyles = makeStyles({
  cover: {
    background: "rgba(0, 0, 0, 0.4)",
  },
  root: {
    height: "100vh",
    backgroundSize: "cover",

    backgroundImage: `url(${background})`,
  },
  // child: {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingTop: "25%",
  // },
});

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Box className={classes.root} component="div">
      <Box className={classes.cover} component="div">
        <TopBar />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <HomeText />
          <Box sx={{ width: "85%", marginTop: "3%" }}>
            <Box
              sx={{
                width: "10%",
                padding: "10px",
                background: "#2699FB",
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
                textAlign: "center",
                color: "white",
              }}
            >
              {" "}
              Round Trip
            </Box>
          </Box>
          <BasicCard
            padding={"padding"}
            cardContent={"width:100%"}
            sx={{
              display: "flex",
              width: "85%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DetailsBar />
          </BasicCard>
        </Box>
      </Box>
    </Box>
  );
}
