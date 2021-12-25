import React, { useEffect } from "react";
import { Box } from "@mui/system";
import {
  Button,
  Collapse,
  FormHelperText,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { AuthAPI } from "../../api";

const useStyles = makeStyles({
  personalInfo_input: {
    padding: "13px 13px 13px 13px",
    width: "85%",
    fontWeight: "bold",
    borderRadius: "6px",
    border: "2px ridge  #D3D3D3",
    marginTop: "2px",
  },
});

export default function AccountInfo() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let uu = JSON.parse(localStorage.getItem("user"));
  // console.log("uu",  uu?.user._id)

  const initialValues = {
    old_password: "",
    new_password: "",
    user_id: uu?.user._id,
  };

  const validationSchema = Yup.object().shape({
    old_password: Yup.string().required("Old Password Filed is Required"),
    new_password: Yup.string().required("New Password Filed is Required"),
  });

  const onSubmit = (value) => {
    AuthAPI.changePass(value).then((res) => {
      console.log(res);
    });
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });

  return (
    <>
      <Grid container>
        <Grid item md={12} xs={12} mt={2}>
          <Typography
            onClick={handleExpandClick}
            variant={"h5"}
            sx={{ color: "blue.light", fontWeight: "bold", cursor: "pointer" }}
          >
            Account Information
          </Typography>
        </Grid>
      </Grid>
      <Grid container></Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
      <Box onSubmit={formik.handleSubmit} component="form">
        <Grid container>
          <Grid item md={4} xs={12} mt={2}>
            <Box>
              <Typography fontWeight={"bold"} for="Pass">
                Old Password
              </Typography>
              <input
                name="old_password"
                type="password"
                placeholder="Enter Old Password"
                className={classes.personalInfo_input}
                value={formik.values.old_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.old_password && formik.errors.old_password && (
                <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
                  {formik.errors.old_password}
                </FormHelperText>
              )}
            </Box>
          </Grid>
          <Grid item md={4} xs={12} mt={2}>
            <Box>
              <Typography fontWeight={"bold"} for="Pass">
                New Password
              </Typography>
              <input
                name="new_password"
                type="password"
                placeholder="Enter New Password"
                className={classes.personalInfo_input}
                value={formik.values.new_password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.new_password && formik.errors.new_password && (
                <FormHelperText variant="filled" sx={{ color: "#ffbc00" }}>
                  {formik.errors.new_password}
                </FormHelperText>
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item md={4} xs={12} mt={2}>
            <Button
              sx={{ bgcolor: "blue.light" }}
              fullWidth
              variant="contained"
              type={"submit"}
            >
              Update Password
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
