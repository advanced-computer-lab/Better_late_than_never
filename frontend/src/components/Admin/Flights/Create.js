import React, { useEffect, useState } from "react";
import {
  Checkbox,
  FormControl,
  Grid,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import TextInput from "../../Utils/TextInput";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import { FlightAPI } from "../../../api";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function Create({ close, flightList }) {
  const [availableSeats, setAvailableSeats] = useState([]);
  const [ecoSeats, setEcoSeats] = useState([]);

  const [availableBusSeats, setAvailableBusSeats] = useState([]);
  const [busSeats, setBusSeats] = useState([]);

  const [availableFCSeats, setAvailableFCSeats] = useState([]);
  const [fcSeats, setFcSeats] = useState([]);

  const initialValues = {
    trip: "",
    flight_number: "",
    to: "",
    from: "",
    // stop: "",
    economy_seats: ecoSeats,
    business_class_seats: busSeats,
    first_class_seats: fcSeats,
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
    // stop: yup.number().required("required."),
    // economy_seats: yup.Array().required("Economy Seats Number is required."),
    // business_class_seats: yup
    //   .number()
    //   .required("Business Class Seats is required."),
    dep_time: yup.string().required("Depart Time is required."),
    dep_date: yup.string().required("Depart Date is required."),
    arr_time: yup.string().required("Arrival Time is required."),
    arr_date: yup.string().required("Arrival Date is required."),
    ticket: yup.number().required("Ticket is required."),
    airport_terminal: yup.string().required("Terminal is required."),
  });

  const onSubmit = (values) => {
    values.economy_seats = ecoSeats;
    values.business_class_seats = busSeats;
    values.first_class_seats = fcSeats;
    // alert(JSON.stringify(values));

    FlightAPI.createFlight(values).then(() => {
      flightList();
      close();
    });
  };

  // formik
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  useEffect(() => {
    setAvailableSeats([...Array(10).keys()]);
  }, []);

  const checkEcoSeats = () => {
    var totalArr = availableSeats,
      ecoSelected = ecoSeats,
      result = totalArr.filter((item) => !ecoSelected.includes(item));
    setAvailableBusSeats(result);
  };

  const ecoHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setEcoSeats(typeof value === "string" ? value.split(",") : value);
    checkEcoSeats();
  };

  const checkBusSeats = () => {
    var totalArr = availableBusSeats,
      ecoSelected = busSeats,
      result = totalArr.filter((item) => !ecoSelected.includes(item));
    setAvailableFCSeats(result);
  };

  const busHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setBusSeats(typeof value === "string" ? value.split(",") : value);
    checkBusSeats();
  };

  const checkFCSeats = () => {
    var totalArr = availableFCSeats,
      ecoSelected = fcSeats,
      result = totalArr.filter((item) => !ecoSelected.includes(item));
    return result;
  };

  const fcHandleChange = (event) => {
    const {
      target: { value },
    } = event;
    setFcSeats(typeof value === "string" ? value.split(",") : value);
    checkFCSeats();
  };

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
          <TextInput type={"number"} focused formik={formik} name="stop" label="Stop" />
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
        <Grid item xs={6} lg={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">
              Economy Seats
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              size="small"
              name="economy_seats"
              value={ecoSeats}
              onChange={ecoHandleChange}
              input={<OutlinedInput label="Economy Seats" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {availableSeats.map((s_no) => (
                <MenuItem key={s_no} value={s_no}>
                  <Checkbox checked={ecoSeats.indexOf(s_no) > -1} />
                  <ListItemText primary={s_no} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} lg={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">
              Business Class Seats
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              name="business_class_seats"
              size="small"
              value={busSeats}
              onChange={busHandleChange}
              input={<OutlinedInput label="Business Class Seats" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {availableBusSeats.map((s_no) => (
                <MenuItem key={s_no} value={s_no}>
                  <Checkbox checked={busSeats.indexOf(s_no) > -1} />
                  <ListItemText primary={s_no} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
         <Grid item xs={6} lg={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-multiple-checkbox-label">
              First Class Seats
            </InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              name="first_class_seats"
              size="small"
              value={fcSeats}
              onChange={fcHandleChange}
              input={<OutlinedInput label="Business Class Seats" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
            >
              {availableFCSeats.map((s_no) => (
                <MenuItem key={s_no} value={s_no}>
                  <Checkbox checked={fcSeats.indexOf(s_no) > -1} />
                  <ListItemText primary={s_no} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
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
              Create
            </Button>
          </DialogActions>
        </Grid>
      </Grid>
    </div>
  );
}

export default Create;
