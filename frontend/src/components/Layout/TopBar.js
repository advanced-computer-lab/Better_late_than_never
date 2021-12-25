import React, { useEffect, useState } from "react";
import { Grid, IconButton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import Planeicon from "../../assets/Icons/plane2.svg";
import KeyIcon from "@mui/icons-material/Key";
import InputIcon from "@mui/icons-material/Input";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PersonIcon from "@mui/icons-material/Person";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function TopBar() {
  const [title, setTitle] = useState("Login");
  const history = useNavigate();

  const changePass = () => {
    let user = localStorage.getItem("user");
    if (user) {
      history("/auth/change-password");
    } else {
      toast.error("Login to change password.");
    }
  };

  const logInFun = () => {
    let user = localStorage.getItem("user");
    if (user) {
      localStorage.removeItem("user");
      history("/auth/login");
    } else {
      history("/auth/login");
    }
  };

  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      setTitle("Logout");
    }
  }, []);

  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={6}>
          <Box py={1}>
            <Stack direction="row" spacing={2}>
              <IconButton
                onClick={() => window.open('https://www.facebook.com')}
                sx={{ color: "white", padding: 0 }}
                aria-label="Search Filed"
              >
                <FacebookIcon sx={{ fontSize: "18px" }} />
              </IconButton>
              <IconButton
                onClick={() => window.open('https://www.twitter.com')}
                sx={{ color: "white", padding: 0 }}
                aria-label="Search Filed"
              >
                <TwitterIcon sx={{ fontSize: "18px" }} />
              </IconButton>
              <IconButton
                onClick={() => window.open('https://www.google.com')}
                sx={{ color: "white", padding: 0 }}
                aria-label="Search Filed"
              >
                <GoogleIcon sx={{ fontSize: "18px" }} />
              </IconButton>
              <IconButton
                onClick={() => window.open('https://www.instagram.com')}
                sx={{ color: "white", padding: 0 }}
                aria-label="Search Filed"
              >
                <InstagramIcon sx={{ fontSize: "18px" }} />
              </IconButton>
            </Stack>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Box py={1} display={"flex"} flexDirection={"row-reverse"}>
            <Stack direction="row" spacing={6}>
              <IconButton
                onClick={() => history("/auth/register")}
                sx={{ color: "white", padding: 0 }}
                aria-label="Search Filed"
              >
                <Box display={"flex"}>
                  <PersonIcon sx={{ fontSize: "18px", mr: 0.5 }} />
                  <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                    Join
                  </Typography>
                </Box>
              </IconButton>
              <IconButton
                onClick={logInFun}
                sx={{ color: "white", padding: 0 }}
                aria-label="Search Filed"
              >
                <Box display={"flex"}>
                  <InputIcon sx={{ fontSize: "18px", mr: 0.5 }} />
                  <Typography sx={{ fontSize: "12px", fontWeight: "bold" }}>
                    {title}
                  </Typography>
                </Box>
              </IconButton>
              <IconButton
                onClick={changePass}
                sx={{ color: "white", padding: 0 }}
                aria-label="Search Filed"
              >
                <Box display={"flex"}>
                  <KeyIcon sx={{ fontSize: "18px", mr: 0.5 }} />
                </Box>
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
