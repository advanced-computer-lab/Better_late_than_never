import React from "react";
import BasicCard from "../../../components/Card";
import { Grid, Box, Button, TextField } from "@mui/material";
import "./login.css";
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
  font-weight: 700;
  font-size: 45px;
  @media (max-width: 767px) {
    margin-bottom: 1.25rem;
  }
`;
const CardSubTitle = styled.div`
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
  text-align: center;
  font-weight: 400;
  font-size: 17px;

  @media (max-width: 767px) {
    margin-bottom: 1.25rem;
  }
`;

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email Must be Valid email")
    .required("Email Is Reqiured"),
  password: Yup.string().required("Password is required"),
});

export default function Login() {
  const history = useNavigate();

  const onSubmit = (values) => {
    AuthAPI.login(values).then((res) => {
      localStorage.setItem("user", JSON.stringify(res.data.data));
      history("/");
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
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
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={2} md={4} xl={2}></Grid>
          <Grid item xs={8} md={4} xl={8}>
            <BasicCard>
              <CardTitle className="mb-4">WELCOME</CardTitle>
              <CardSubTitle>Sign in to Continue</CardSubTitle>
              <Box sx={{ marginTop: "20%" }}>
                <form onSubmit={formik.handleSubmit} className="mt-4">
                  <Grid container spacing={2}>
                    <Grid item xs={1} md={1} xl={1}></Grid>
                    <Grid item xs={10} md={10} xl={10}>
                      <TextField
                        fullWidth
                        label="Email"
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

                      <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        sx={{ mt: 3 }}
                        id="outlined-password-input"
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
                      <Box style={{ padding: 15, textAlign: "Center" }}>
                        Don't have an account?{" "}
                        <Link to="/auth/register">Join as Guest</Link>
                      </Box>
                      
                      <Button
                        style={{
                          backgroundColor: "#2699FB !important",
                          color: "white",
                        }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        className="btn_primary"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Login
                      </Button>
                    </Grid>
                    <Grid item xs={1} md={1} xl={1}></Grid>
                  </Grid>
                </form>
              </Box>
            </BasicCard>
          </Grid>
          <Grid item xs={2} md={4} xl={2}></Grid>
        </Grid>
      </Box>
    </Box>
  );
}
