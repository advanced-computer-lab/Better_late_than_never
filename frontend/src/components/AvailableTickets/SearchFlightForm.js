import React from "react";
import { Box } from "@mui/system";
import { Button, FormHelperText, Grid } from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { makeStyles } from "@mui/styles";

const initialValues = {
  name: "",
  place: "",
  depart_date: "",
  arive_date: "",
  adult: "",
  children: "",
  cabin: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name field is Required"),
  place: Yup.string().required("Place field is Required"),
  depart_date: Yup.string().required("Departure Date field is Required"),
  arive_date: Yup.string().required("Arive date field is Required"),
  adult: Yup.string().required("Adult field is Required"),
  children: Yup.string().required("Children field is Required"),
  cabin: Yup.string().required("Cabin field is Required"),
});

const useStyles = makeStyles({
  search_input: {
    background: "#3A6A91",
    padding: "13px 13px 13px 13px",
    width: "90%",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "12px",
    border: "none",
  },
  select_input: {
    background: "#3A6A91",
    padding: "12px 12px 12px 12px",
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: "12px",
    border: "none",
  },
});

export default function SearchFlightForm() {
  const classes = useStyles();
  const onSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid item md={3.5} xs={12} sm={6}>
          <Box>
            <input
              placeholder="Los Angeles"
              name="name"
              type="text"
              className={classes.search_input}
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
                {formik.errors.name}
              </FormHelperText>
            )}
          </Box>
        </Grid>
        <Grid item md={3.5} xs={12} sm={6}>
          <input
            placeholder="Dubai"
            name="place"
            type="text"
            className={classes.search_input}
            value={formik.values.place}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.place && formik.errors.place && (
            <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
              {formik.errors.place}
            </FormHelperText>
          )}
        </Grid>
        <Grid item md={2.5} xs={12} sm={6}>
          <input
            type="date"
            className={classes.search_input}
            name="depart_date"
            value={formik.values.depart_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.depart_date && formik.errors.depart_date && (
            <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
              {formik.errors.depart_date}
            </FormHelperText>
          )}
        </Grid>
        <Grid item md={2.5} xs={12} sm={6}>
          <input
            type="date"
            className={classes.search_input}
            name="arive_date"
            value={formik.values.arive_date}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.arive_date && formik.errors.arive_date && (
            <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
              {formik.errors.arive_date}
            </FormHelperText>
          )}
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={1}>
        <Grid item md={2.5} xs={12} sm={6}>
          <select
            name="adult"
            className={classes.select_input}
            value={formik.values.adult}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option>Adult</option>
            <option value="1">Option 1</option>
          </select>
          {formik.touched.adult && formik.errors.adult && (
            <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
              {formik.errors.adult}
            </FormHelperText>
          )}
        </Grid>
        <Grid item md={2.5} xs={12} sm={6}>
          <select
            name="children"
            className={classes.select_input}
            value={formik.values.children}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option>Children</option>
            <option value="1">Option 1</option>
          </select>
          {formik.touched.children && formik.errors.children && (
            <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
              {formik.errors.children}
            </FormHelperText>
          )}
        </Grid>
        <Grid item md={2.5} xs={12} sm={6}>
          <select
            name="cabin"
            className={classes.select_input}
            value={formik.values.cabin}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option>Cabin</option>
            <option value="1">Option 1</option>
          </select>
          {formik.touched.cabin && formik.errors.cabin && (
            <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
              {formik.errors.cabin}
            </FormHelperText>
          )}
        </Grid>
        <Grid item md={4.5} xs={12} sm={6}>
          <Button
            sx={{
              borderRadius: "12px",
              py: 1.1,
              bgcolor: "blue.light",
            }}
            fullWidth
            variant={"contained"}
            type="submit"
          >
            Search Flight
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
