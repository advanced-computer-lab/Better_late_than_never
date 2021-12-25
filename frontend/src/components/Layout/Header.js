import React from "react";
import {
  Button,
  FormHelperText,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";
import Planeicon from "../../assets/Icons/plane2.svg";
import * as Yup from "yup";

const useStyles = makeStyles({
  searchField: {
    background: "#e1e1e1",
    border: "none",
    borderRadius: "20px",
    padding: "13px 12px 13px 13px",
    width: "100%",
  },
  searchBox: {
    position: "relative",
    padding: "0px 28px 0px 0px",
  },
  searchIcon: {
    // zIndex: "9999",
    position: "absolute",
    right: 0,
    top: 0,
    borderRadius: "50%",
  },
});

const initialValues = {
  search_place: "",
};

const validationSchema = Yup.object().shape({
  search_place: Yup.string().required("Type somthing for batter result"),
});

export default function Header() {
  const navigate = useNavigate();
  const classes = useStyles();

  const onSubmit = (value) => {
    alert(JSON.stringify(value));
  };
  const goBack = () => {
    navigate("/");
    localStorage.removeItem("flight");
  };

  const formik = useFormik({ initialValues, validationSchema, onSubmit });
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item md={6} sm={6}>
          <Box sx={{ cursor: "pointer" }}>
            <img onClick={goBack} width={"60px"} src={Planeicon} alt="" />
          </Box>
        </Grid>
        <Grid item md={6} sm={6}>
         
        </Grid>
      </Grid>
    </Container>
  );
}
