import React from "react";
import { Box } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import Visa from "../../assets/Images/857_visa.svg";
import master from "../../assets/Images/download(6).svg";
import { makeStyles } from "@mui/styles";
import { PaymentAPI } from "../../api";
import { useFormik } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles({
  personalInfo_input: {
    padding: "13px 13px 13px 13px",
    width: "85%",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "2px ridge  #D3D3D3",
    marginTop: "2px",
  },
  payment_method_month_field: {
    padding: "13px 6px 13px 6px",
    fontWeight: "bold",
    borderRadius: "6px",
    marginTop: "2px",
    height: "100%",
    background: "white",
  },
  payment_method_year_field: {
    padding: "13px 6px 13px 6px",
    fontWeight: "bold",
    borderRadius: "6px",
    marginTop: "2px",
    height: "100%",
    background: "white",
  },
  cvv_NUMBER: {
    width: "20%",
    padding: "13px 6px 13px 6px",
    fontWeight: "bold",
    borderRadius: "6px",
    marginTop: "2px",
    height: "100%",
    background: "white",
  },
});
const initialValues = {
  cardNumber :"", 
  cardName :"", 
  expireMonth :"", 
  expireYear:"", 
  cvv:""
}


const validationSchema = Yup.object().shape({
cardNumber: Yup.string().required("Required"),
cardName: Yup.string().required("Required"),
expireMonth: Yup.string().required("Required"),
expireYear: Yup.string().required("Required"),
cvv: Yup.string().required("Required"),
});

export default function PaymentGatwways() {
  const classes = useStyles();
 
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      PaymentAPI.doPayment(values).then(res => {
        console.log(res)
      })
    },
  });
  

  return (
    <Box  component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} mt={3}>
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
              How Would You Like To Pay
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container mt={3}>
        <Grid item md={12}>
          <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
            Credit Card
          </Typography>
        </Grid>
        <Grid item md={12} mt={2} xs={12}>
          <Box display={"flex"}>
            <img src={master} alt="" />
            <img src={Visa} alt="" />
          </Box>
        </Grid>
        <Grid item md={4} mt={3} xs={12} sm={6}>
          <Typography fontWeight={"bold"} for="Pass">
            Card Number
          </Typography>
          <input
               id="cardNumber"
               name="cardNumber"
               value={formik.values.cardNumber}
               onChange={formik.handleChange}
               error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
               helperText={formik.touched.cardNumber && formik.errors.cardNumber}

            type="text"
            placeholder="xxxx xxxx xxxx"
            className={classes.personalInfo_input}
          />
        </Grid>
        <Grid item md={4} mt={3} xs={12} sm={6}>
          <Typography fontWeight={"bold"} for="Pass">
            Name on the Card
          </Typography>
          <input
               id="cardName"
               name="cardName"
               value={formik.values.cardName}
               onChange={formik.handleChange}
               error={formik.touched.cardName && Boolean(formik.errors.cardName)}
               helperText={formik.touched.cardName && formik.errors.cardName}

            type="text"
            placeholder="Enter Last Name"
            className={classes.personalInfo_input}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item md={3} xs={10} mt={3}>
          <Typography fontWeight={"bold"} for="Pass">
            Expiry Date
          </Typography>
          <Box display={"flex"} flexDirection={"row"} mt={1}>
            <select
                   id="expireMonth"
                   name="expireMonth"
                   value={formik.values.expireMonth}
                   onChange={formik.handleChange}
                   error={formik.touched.expireMonth && Boolean(formik.errors.expireMonth)}
                   helperText={formik.touched.expireMonth && formik.errors.expireMonth}

              className={classes.payment_method_month_field}
              style={{ width: "30%" }}
            >
              <option>MM</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            &nbsp; &nbsp;
            <select
                id="expireYear"
                name="expireYear"
                value={formik.values.expireYear}
                onChange={formik.handleChange}
                error={formik.touched.expireYear && Boolean(formik.errors.expireYear)}
                helperText={formik.touched.expireYear && formik.errors.expireYear}


              className={classes.payment_method_year_field}
              style={{ width: "70%" }}
            >
              <option>YYYY</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </Box>
        </Grid>
        <Grid item md={3} xs={12} mt={3}>
          <Typography fontWeight={"bold"} for="Pass">
            CVV
          </Typography>
          <Box display={"flex"} flexDirection={"row"} mt={1}>
            <input
              id="cvv"
              name="cvv"
              value={formik.values.cvv}
              onChange={formik.handleChange}
              error={formik.touched.cvv && Boolean(formik.errors.cvv)}
              helperText={formik.touched.cvv && formik.errors.cvv}
             
              type="text"
              placeholder="0000"
              className={classes.cvv_NUMBER}
            />
          </Box>
        </Grid>
      </Grid>
      <Grid container mb={3}>
        <Grid item md={2} lg={3} mt={1}>
          <Box mt={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <Button
              fullWidth
              sx={{ bgcolor: "blue.light" }}
              variant="contained"
              type="submit"
              onClick = {formik.submitForm}
            >
              Buy Now
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
