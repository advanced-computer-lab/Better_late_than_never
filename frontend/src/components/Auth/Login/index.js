import React from "react";
import { Grid, Box, Typography, Button, TextField, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    email: yup.string().required("Email is required."),
    password: yup.string().required("Password is required."),
  });

  const onSubmit = (e) => {
    alert(JSON.stringify(e));
  };

  // formik
  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <div>
      <Grid container component="div" spacing={2}>
        <Grid item md={12}>
          <Box
            sx={{
              mx: 5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Paper sx={{ height: "100%", m: 5, p: 5 }} elevation={4}>
              <Typography variant="h3" component="div">
                Welcome
              </Typography>
              <Typography sx={{ mb: 5 }}>Signin to Continue!</Typography>
              <Box
                component="form"
                onSubmit={formik.handleSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  fullWidth
                  label="Username or Phone"
                  variant="standard"
                />
                <TextField
                  fullWidth
                  label="Password"
                  variant="standard"
                  sx={{ mt: 3 }}
                />

                <Button
                  // type="submit"
                  fullWidth
                  variant="contained"
                  onClick={() => navigate("/admin")}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
