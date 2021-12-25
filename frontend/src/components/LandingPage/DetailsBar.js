import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { makeStyles } from "@material-ui/core/styles";
import { FlightAPI } from "../../api";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const initialValues = {
  from: "",
  to: "",
  trip: "Departure",
  depDate: "",
  arrDate: "",
  no_of_passengers: "",
  cabin: "",
};

const validationSchema = Yup.object().shape({
  from: Yup.string().required("Required"),
  to: Yup.string().required("Required"),
  trip: Yup.string().required("Required"),
  depDate: Yup.string().required("Required"),
  arrDate: Yup.string().required("Required"),
  no_of_passengers: Yup.number().required("Required"),
  cabin: Yup.string().required("Required"),
});

export default function DetailsBar({ onSubmit }) {
  let navigate = useNavigate();
  const useStyles = makeStyles(() => ({
    noBorder: {
      border: "none",
    },
    noOutline: {
      outline: "none",
    },
  }));
  const classes = useStyles();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("submite clicked", values)
      FlightAPI.bookFlight(values).then((res) => {

        console.log("res", res);
       res.data ? navigate("/home", { replace: true }) : toast.error("Flight not avaliable");
        
      });
      localStorage.setItem("flight", JSON.stringify(values));
       
    },
  });

  return (
    <>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        sx={{ width: "125%", display: "flex", flexDirection: "row" }}
      >
        <Grid container spacing={0}>
          <Grid item md={2}>
            <TextField
              id="from"
              name="from"
              value={formik.values.from}
              onChange={formik.handleChange}
              error={formik.touched.from && Boolean(formik.errors.from)}
              helperText={formik.touched.from && formik.errors.from}
              classeName={classes.noOutline}
              sx={{ bgcolor: "white" }}
              inputProps={{
                classes: { notchedOutline: classes.noBorder },
              }}
              placeholder={"From"}
              fullWidth
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              name="to"
              id="to"
              value={formik.values.to}
              onChange={formik.handleChange}
              error={formik.touched.to && Boolean(formik.errors.to)}
              helperText={formik.touched.to && formik.errors.to}
              InputLabelProps={{
                shrink: false,
                underline: {
                  "&&&:before": {
                    borderBottom: "none",
                  },
                  "&&:after": {
                    borderBottom: "none",
                  },
                },
              }}
              placeholder={"To"}
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item md={3}>
            <Grid  container>
              <Grid item md={6}>
                <TextField
                  name="depDate"
                  id="depDate"
                  value={formik.values.depDate}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.depDate &&
                    Boolean(formik.errors.depDate)
                  }
                  helperText={
                    formik.touched.depDate && formik.errors.depDate
                  }
                  type="date"
                  InputLabelProps={{ shrink: false }}
                  fullWidth
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              <Grid item md={6}>
                <TextField
                  name="arrDate"
                  id="arrDate"
                  value={formik.values.arrDate}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.arrDate &&
                    Boolean(formik.errors.arrDate)
                  }
                  helperText={
                    formik.touched.arrDate && formik.errors.arrDate
                  }
                  type="date"
                  InputLabelProps={{ shrink: false }}
                  fullWidth
                  sx={{ bgcolor: "white" }}
                />
              </Grid>
              {/* <Grid item md={6}>
            <TextField type="date" InputLabelProps={{ shrink: false }} placeholder={'To'} fullWidth sx={{ bgcolor: 'white' }} />

          </Grid> */}
            </Grid>
          </Grid>
          <Grid item md={1}>
            <TextField
              name="no_of_passengers"
              id="no_of_passengers"
              value={formik.values.no_of_passengers}
              onChange={formik.handleChange}
              error={
                formik.touched.no_of_passengers &&
                Boolean(formik.errors.no_of_passengers)
              }
              helperText={
                formik.touched.no_of_passengers &&
                formik.errors.no_of_passengers
              }
              InputLabelProps={{ shrink: false }}
              type={"number"}
              placeholder={"Passenger"}
              fullWidth
              sx={{ bgcolor: "white" }}
            />
          </Grid>
          <Grid item md={1}>
            <FormControl sx={{ bgcolor: "white" }} fullWidth>
              <Select
                name="cabin"
                id="cabin"
                value={formik.values.cabin}
                onChange={formik.handleChange}
                error={formik.touched.cabin && Boolean(formik.errors.cabin)}
                helperText={formik.touched.cabin && formik.errors.cabin}
                // value={age}
                // onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>Cabin</em>
                </MenuItem>
                <MenuItem value={"Economy"}>Economy</MenuItem>
                <MenuItem value={"Business"}>Business</MenuItem>
                <MenuItem value={"First Class"}>First Class</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={1}>
            <Box>
              <Button
                type="submit"
                className={"marginTop"}
                // onClick={formik.submitForm}
                variant="contained"
                sx={{ padding: "10px" }}
              >
                Search
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
