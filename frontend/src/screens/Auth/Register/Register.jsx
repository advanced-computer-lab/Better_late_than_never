import React from "react";
import BasicCard from "../../../components/Card";
import { Grid, Box, Button, TextField } from "@mui/material";
import "./Register.css";
import styled from "styled-components";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import Image from "../../../assets/pexels-c-cagnin-2007401.png";
import { AuthAPI } from "../../../api";

const CardTitle = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  text-align: center;
  font-weight: 600;
  font-size: 33px;
  @media (max-width: 767px) {
    margin-bottom: 1.25rem;
  }
`;

const initialValues = {
  f_name: "",
  l_name: "",
  userName: "",
  password: "",
  address: "",
  countryCode: "",
  email: "",
  mobileNumber: "",
  telNumber: "",
  passportNumber: "",
};

const validationSchema = Yup.object({
  f_name: Yup.string().required("First Name is required"),
  l_name: Yup.string().required("Last Name is required"),
  userName: Yup.string().required("User Name is required"),
  password: Yup.string().required("Password is required"),
  address: Yup.string().required("Address is required"),
  countryCode: Yup.number().required("Country Code is required"),
  email: Yup.string()
    .email("Email Must be Valid email")
    .required("Email Is Reqiured"),
  mobileNumber: Yup.number().required("Password is required"),
  telNumber: Yup.number().required("Password is required"),
  passportNumber: Yup.string().required("Password is required"),
});

export default function Register() {
  const history = useNavigate();

  const onSubmit = (values) => {
    AuthAPI.register(values).then((res) => {
      history("/auth/login");
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Box
      sx={{
        backgroundImage: `url(${Image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "60px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={1} md={3} xl={2}></Grid>
          <Grid item xs={10} md={6} xl={8}>
            <BasicCard>
              <CardTitle className="mb-4">
                Get Ready for your amazing experience
              </CardTitle>

              <Box sx={{ marginTop: "10%" }}>
                <form onSubmit={formik.handleSubmit} className="mt-4">
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={6} xl={6}>
                      <TextField
                      inputProps={{ pattern: "[a-z, A-Z]{1,15}",  placeholder:"Should be Alphabets "  }}
                        fullWidth
                        label="First Name"
                        size="small"
                        required
                        focused
                        name="f_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.f_name}
                        error={
                          formik.touched.f_name && formik.errors.f_name
                            ? formik.errors.f_name
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={6} md={6} xl={6}>
                      <TextField
                       inputProps={{ pattern: "[a-z, A-Z]{1,15}", placeholder:"Should be Alphabets " }}
                        fullWidth
                        label="Last Name"
                        size="small"
                        required
                        focused
                        name="l_name"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.l_name}
                        error={
                          formik.touched.l_name && formik.errors.l_name
                            ? formik.errors.l_name
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                        fullWidth
                        label="User Name"
                        size="small"
                        required
                        focused
                        name="userName"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.userName}
                        error={
                          formik.touched.userName && formik.errors.userName
                            ? formik.errors.userName
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                       inputProps={{ pattern: ".{8,}", placeholder:"Min length 8 characters" }}
                        fullWidth
                        label="Password"
                        size="small"
                        type="password"
                        required
                        focused
                        name="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        error={
                          formik.touched.password && formik.errors.password
                            ? formik.errors.password
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                        fullWidth
                        label="Home Address"
                        size="small"
                        required
                        focused
                        name="address"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                        error={
                          formik.touched.address && formik.errors.address
                            ? formik.errors.address
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                        fullWidth
                        label="Country Code"
                        size="small"
                        required
                        type="number"
                        focused
                        name="countryCode"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.countryCode}
                        error={
                          formik.touched.countryCode &&
                          formik.errors.countryCode
                            ? formik.errors.countryCode
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        size="small"
                        required
                        focused
                        name="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        error={
                          formik.touched.email && formik.errors.email
                            ? formik.errors.email
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                        fullWidth
                        label="Mobile Number"
                        type="number"
                        size="small"
                        required
                        focused
                        name="mobileNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.mobileNumber}
                        error={
                          formik.touched.mobileNumber &&
                          formik.errors.mobileNumber
                            ? formik.errors.mobileNumber
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                        fullWidth
                        label="Telephone Number"
                        required
                        size="small"
                        type="number"
                        focused
                        name="telNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.telNumber}
                        error={
                          formik.touched.telNumber && formik.errors.telNumber
                            ? formik.errors.telNumber
                            : null
                        }
                      />
                    </Grid>
                    <Grid item xs={12} md={6} xl={6}>
                      <TextField
                        fullWidth
                        label="Passport Number"
                        size="small"
                        required
                        focused
                        name="passportNumber"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.passportNumber}
                        error={
                          formik.touched.passportNumber &&
                          formik.errors.passportNumber
                            ? formik.errors.passportNumber
                            : null
                        }
                      />
                    </Grid>

                    <Grid item xs={12} md={12} xl={12}>
                      <Button
                        style={{
                          backgroundColor: "#2699FB !important",
                          color: "white",
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="btn_primary"
                        // onClick={() => navigate("/portal")}
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Join
                      </Button>
                      <Box style={{ padding: 15, textAlign: "Center" }}>
                        have an account?<Link to="/auth/login"> Sign in </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </BasicCard>
          </Grid>
          <Grid item xs={1} md={3} xl={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
