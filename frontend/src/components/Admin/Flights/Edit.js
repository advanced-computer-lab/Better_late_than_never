import React, { useEffect } from "react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import TextInput from "../../Utils/TextInput";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { FlightAPI } from "../../../api";

function Edit({ close, editId, flightList }) {
  const initialValues = {
    trip: "",
    flight_number: "",
    to: "",
    from: "",
    // stop: "",
    // economy_seats: "",
    // business_class_seats: "",
    // first_class_seats: "",
    dep_time: "",
    dep_date: "",
    arr_time: "",
    arr_date: "",
    ticket: "",
    airport_terminal: "",
  };

  const validationSchema = yup.object().shape({
    trip: yup.string().required("Flight Number is required."),
    flight_number: yup.string().required("Flight Number is required."),
    to: yup.string().required("required."),
    from: yup.string().required("required."),
    // stop: yup.string().required("required."),
    // economy_seats: yup.number().required("Economy Seats Number is required."),
    // business_class_seats: yup
    //   .number()
    //   .required("Business Class Seats is required."),
    dep_time: yup.string().required("Depart Time is required."),
    dep_date: yup.string().required("Depart Date is required."),
    arr_time: yup.string().required("Arrival Time is required."),
    arr_date: yup.string().required("Arrival Date is required."),
    ticket: yup.string().required("Ticket is required."),
    airport_terminal: yup.string().required("Terminal is required."),
  });

  const onSubmit = (values) => {
    FlightAPI.updateFlight(values).then(() => {
      flightList();
      close();
    });
  };

  // formik
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  const getOne = () => {
    FlightAPI.getOneFlight(editId).then((res) => {
      formik.setValues(res?.data?.dataf[0]);
    });
  };

  useEffect(() => {
    getOne();
  }, []);

  return (
    <div sx={{ p: 2 }}>
      <Grid
        container
        component="form"
        spacing={2}
        sx={{ mt: 1 }}
        onSubmit={formik.handleSubmit}
      >
        <Grid item xs={6} lg={6}>
          <FormControl variant="outlined" size="small" fullWidth>
            <InputLabel>Trip</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="trip"
              value={formik.values.trip}
              onChange={formik.handleChange}
              error={formik.touched.trip && Boolean(formik.errors.trip)}
              helperText={formik.touched.trip && formik.errors.trip}
              // inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Return"}>Return</MenuItem>
              <MenuItem value={"Departure"}>Departure</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} lg={6}>
          <TextInput focused formik={formik} name="from" label="From" />
        </Grid>
        <Grid item xs={6} lg={6}>
          <TextInput focused formik={formik} name="to" label="To" />
        </Grid>
        {/* <Grid item xs={6} lg={6}>
          <TextInput focused formik={formik} name="stop" label="Stop" />
        </Grid> */}
        <Grid item xs={6} lg={6}>
          <TextInput
            focused
            formik={formik}
            name="flight_number"
            label="Flight Number"
          />
        </Grid>
        <Grid item xs={6} lg={6}>
          <TextInput
            focused
            formik={formik}
            name="airport_terminal"
            label="Airport Terminal"
          />
        </Grid>
        {/* <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="number"
            formik={formik}
            name="economy_seats"
            label="Economy Seats"
          />
        </Grid> */}
        {/* <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="number"
            formik={formik}
            name="business_class_seats"
            label="Business Class Seats"
          />
        </Grid> */}
        {/* <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="number"
            formik={formik}
            name="first_class_seats"
            label="First Class Seats"
          />
        </Grid> */}
        <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="time"
            formik={formik}
            name="dep_time"
            label="Departure Time"
          />
        </Grid>
        <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="date"
            formik={formik}
            name="dep_date"
            label="Departure Date"
          />
        </Grid>
        <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="time"
            formik={formik}
            name="arr_time"
            label="Arrival Time"
          />
        </Grid>
        <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="date"
            formik={formik}
            name="arr_date"
            label="Arrival Date"
          />
        </Grid>
        <Grid item xs={6} lg={6}>
          <TextInput
            focused
            type="number"
            formik={formik}
            name="ticket"
            label="Ticket"
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          <DialogActions>
            <Button variant="outlined" onClick={close}>
              Cancel
            </Button>
            <Button type="submit" variant="outlined" autoFocus>
              Update
            </Button>
          </DialogActions>
        </Grid>
      </Grid>
    </div>
  );
}

export default Edit;



