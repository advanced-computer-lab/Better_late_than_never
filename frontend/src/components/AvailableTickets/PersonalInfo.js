import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  personalInfo_input: {
    padding: "13px 13px 13px 13px",
    width: "85%",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "2px ridge  #D3D3D3",
    marginTop: "2px",
  },
  personalInfo_select: {
    width: "93%",
    padding: "13px 13px 13px 13px",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "2px ridge  #D3D3D3",
    marginTop: "2px",
    height: "100%",
  },
});

export default function PersonalInfo() {
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={2} mt={2}>
        <Grid item md={12} xs={12}>
          <Box
            sx={{
              bgcolor: "blue.dark",
              color: "white",
              py: 2,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography
              fontWeight="bold"
              fontSize={{ md: "30px", xs: "20px", sm: "25" }}
            >
              Who's Travelling?
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={12} mt={3} xs={12}>
          <Typography
            variant={"h5"}
            sx={{ color: "blue.light", fontWeight: "bold" }}
          >
            Personal Information
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={3.5} xs={12} mt={2}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              First Name
            </Typography>
            <input
              type="text"
              placeholder="Enter First Name"
              id="fname"
              name="fname"
              className={classes.personalInfo_input}
            ></input>
          </Box>
        </Grid>
        <Grid item md={3.5} xs={12} mt={2}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              Last Name
            </Typography>
            <input
              type="text"
              placeholder="Enter Last Name"
              id="lname"
              name="lname"
              className={classes.personalInfo_input}
            ></input>
          </Box>
        </Grid>
        <Grid item md={3.5} xs={12} mt={2}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              Date of Birth
            </Typography>
            <input
              type="date"
              placeholder="DD/MM/YY"
              id="_date"
              name="_date"
              className={classes.personalInfo_input}
            ></input>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={3.5} xs={12} mt={2}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              Passport
            </Typography>
            <input
              type="text"
              placeholder="S1722543"
              id="_passport"
              name="_passport"
              className={classes.personalInfo_input}
            ></input>
          </Box>
        </Grid>
        <Grid item md={3.5} xs={8} mt={2}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              Email
            </Typography>
            <input
              type="email"
              placeholder="Enter Email"
              id="_email"
              name="_email"
              className={classes.personalInfo_input}
            ></input>
          </Box>
        </Grid>
        <Grid item md={3.5} xs={3} mt={2}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              Gander
            </Typography>
            <select
              id="_gender"
              name="_gender"
              className={classes.personalInfo_select}
            >
              <option value="male">Male</option>
              <option value="femail">Female</option>
            </select>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={3} xs={5} mt={1}>
          <Box mt={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <Button
              sx={{ bgcolor: "blue.light" }}
              fullWidth
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
