import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  personalInfo_select: {
    width: "93%",
    padding: "13px 13px 13px 13px",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "2px ridge #D3D3D3",
    marginTop: "2px",
    height: "100%",
  },
  baggage_input: {
    border: "none",
    width: "86%",
    backgroundColor: "#B8B8B8",
    padding: "13px 13px 13px 13px",
    fontWeight: "bold",
    borderRadius: "5px",
  },
  baggage_num: {
    backgroundColor: "#B8B8B8",
    padding: "13px 13px 13px 13px",
    fontWeight: "bold",
    width: "50%",
    border: "1px solid #B8B8B8",
    borderRadius: "5px",
  },
});

export default function Baggage() {
  const classes = useStyles();
  return (
    <>
      <Box>
        <Grid container>
          <Grid item md={12} xs={12} mt={5}>
            <Typography
              variant={"h5"}
              sx={{ color: "blue.light", fontWeight: "bold" }}
            >
              Baggaage
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontWeight: "bold" }}>Free</Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container mt={4}>
        <Grid item md={3} xs={12}>
          <Typography sx={{ fontWeight: "bold" }}>Cabin Baggaage</Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography sx={{ fontWeight: "bold", color: "#686868" }}>
            42x32x20cm
          </Typography>
        </Grid>
        <Grid item md={3} xs={12}>
          <Typography sx={{ fontWeight: "bold" }}>Free</Typography>
        </Grid>
      </Grid>
      <Grid container mt={4}>
        <Grid item md={3} xs={12} sm={6}>
          <Typography sx={{ fontWeight: "bold" }}>Checked Baggaage</Typography>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <Typography sx={{ fontWeight: "bold", color: "#686868" }}>
            22kg
          </Typography>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <Typography sx={{ fontWeight: "bold" }}>$80</Typography>
        </Grid>
      </Grid>
      <Grid container mt={2}>
        <Grid item md={3} xs={12} sm={6}>
          <input
            className={classes.baggage_input}
            placeholder="Checked Baggaage"
            readOnly
          ></input>
        </Grid>
        <Grid item md={3} xs={12} sm={6}>
          <input
            className={classes.baggage_input}
            placeholder="23Kg"
            readOnly
          ></input>
        </Grid>
        <Grid md={1} item xs={12} sm={6}>
          <input
            type="number"
            className={classes.baggage_num}
            placeholder="0"
          />
        </Grid>
        <Grid md={1} item xs={12} sm={6}>
          <Button variant="contained" sx={{ bgcolor: "blue.light" }}>
            $80
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={3} mt={2} xs={6}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              Cabin
            </Typography>
            <select
              id="cabin"
              name="cabin"
              className={classes.personalInfo_select}
            >
              <option value="ecomony">Economy</option>
              <option value="business">Business</option>
              <option value="firstClass">First Class</option>
            </select>
          </Box>
        </Grid>
        <Grid item md={3} mt={2} xs={6}>
          <Box>
            <Typography fontWeight={"bold"} for="Pass">
              Available Seats
            </Typography>
            <select
              id="seats"
              name="seats"
              className={classes.personalInfo_select}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </Box>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item md={2} lg={3} mt={1}>
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
