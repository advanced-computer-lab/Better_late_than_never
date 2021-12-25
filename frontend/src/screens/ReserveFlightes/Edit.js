import { Box } from '@mui/system'
import React, {useState, useEffect} from 'react'
import { Button, Grid, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import AddPassenger from '../../components/Passenger/AddPassenger'
import {useNavigate} from "react-router-dom"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import BackButton from "../../components/BackButton"
import { PassengerAPI } from "../../api";
import { toast } from "react-toastify";
import {
  Checkbox,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";

import {useParams } from "react-router";
let f_id;
let params;
let user = localStorage.getItem("user");
let userObj = JSON.parse(user)
let activeUser = userObj.user._id


const useStyles = makeStyles({
    personalInfo_select: {
      width: "93%",
      padding: "13px 13px 13px 13px",
      fontWeight: "bold",
      borderRadius: "6px",
      border: "2px ridge #D3D3D3",
      marginTop: "2px",
      height: "100%",
    },
    baggage_input: {
      border: "none",
      width: "86%",
      backgroundColor: "#B8B8B8",
      padding: "13px 13px 13px 13px",
      fontWeight: "bold",
      borderRadius: "5px",
    },
    personalInfo_input: {
      padding: "13px 13px 13px 13px",
      width: "85%",
      fontWeight: "bold",
      borderRadius: "6px",
      border: "2px ridge  #D3D3D3",
      marginTop: "2px",
    },
    baggage_num: {
      backgroundColor: "#B8B8B8",
      padding: "13px 13px 13px 13px",
      fontWeight: "bold",
      width: "50%",
      border: "1px solid #B8B8B8",
      borderRadius: "5px",
    },
  });

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
  

const initialValues = {
    f_name: "",
    l_name: "",
    dob: "",
    passport: "",
    gender: "",
    checkedBaggage:0,
    cabin: "",
    reservedSeats: [],
    userId: activeUser?.user?._id,
    flightId: f_id,
  };
  
  const validationSchema = Yup.object().shape({
    f_name: Yup.string().required("Required"),
    l_name: Yup.string().required("Required"),
    dob: Yup.string().required("Required"),
    passport: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    checkedBaggage: Yup.number().required("Required"),
    cabin: Yup.string().required("Required"),
    avaliableSeats: Yup.number().required("Required"),
  });

export default function EditTickets() {
    params = useParams();
    f_id = params.f_id
    const [state, setState] = useState()
    const classes = useStyles();
    useEffect(() => {
        
            console.log('param', f_id)
            PassengerAPI.getOnePassenger({f_id, activeUser}).then(res => {
            console.log("user found", res.data)
            setState(res.data);
            formik.setValues(res.data)
          } ) 
    }, [])
  
    const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("Values", values)   
      PassengerAPI.updatePassenger(values).then((res) => {
        // toast.success("Info updated Successfully!");
      });
    },
    });

    let navigate = useNavigate()
    const goBack = ()=>{
        navigate('/home/reserved-tickets')
    }

    return (
        <Box mx={{lg:10, md:8, sm:4, xs:2}}>
         <BackButton style={{ fontSize: 20, color: "#2699FB" ,padding:0}} action={goBack}>
             <ArrowBackIcon sx={{marginTop:0.5,marginRight:1 ,fontSize:20}} /> back
         </BackButton>
           {/* <AddPassenger/> */}


    <Box component="form" onSubmit={formik.handleSubmit}>
    <Grid mt={4} md={12}>
      <Box>
        <Grid container>
        <Grid item md={12} xs={12} mb={2}>
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
              Who is Travelling ?
            </Typography>
          </Box>
        </Grid>
          <Grid item lg={6} md={6} sm={6} xs={6}>
            <Typography
              variant={"h5"}
              sx={{
                color: "blue.light",
                fontWeight: "bold",
                fontSize: {
                  lg: "25px",
                  md: "22px",
                  sm: "20px",
                  xs: "18px",
                },
              }}
            >
               {/* # ${caption + 1} */}
              {`Person Information`}
            </Typography>
          </Grid>
          <Grid
            item
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItem={"flex-end"}
            lg={6}
            md={6}
            sm={6}
            xs={6}
          >
        
          </Grid>
          {/* </Grid>
        <Grid container> */}
          <Grid item lg={4} md={4} xs={12} sm={6} mt={2}>
            <Box>
              <Typography fontWeight={"bold"} for="Pass">
                First Name
              </Typography>
              <input
                  id="f_name"
                  name="f_name"
                  required
                  pattern="[A-Za-z]{1,15}"
                  title="Must contain letters only"
                  value={formik.values.f_name}
                  onChange={formik.handleChange}
                  // error={formik.touched.f_name && Boolean(formik.errors.f_name)}
                  helperText={formik.touched.f_name && formik.errors.f_name}

                type="text"
                placeholder="Enter First Name"
                className={classes.personalInfo_input}
              ></input>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} xs={12} sm={6} mt={2} mt={2}>
            <Box>
              <Typography fontWeight={"bold"} for="Pass">
                Last Name
              </Typography>
              <input
                id="l_name"
                name="l_name"
                required
                pattern="[A-Za-z]{1,15}"
                title="Must contain letters only"
                value={formik.values.l_name}
                onChange={formik.handleChange}
                error={formik.touched.l_name && Boolean(formik.errors.l_name)}
                helperText={formik.touched.l_name && formik.errors.l_name}

                type="text"
                placeholder="Enter Last Name"
                className={classes.personalInfo_input}
              ></input>
            </Box>
          </Grid>
          <Grid item lg={4} md={4} xs={12} sm={6} mt={2} mt={2}>
            <Box>
              <Typography fontWeight={"bold"} for="Pass">
                Date of Birth
              </Typography>
              <input
                id="dob"
                name="dob"
                required
                value={formik.values.dob}
                onChange={formik.handleChange}
                error={formik.touched.dob && Boolean(formik.errors.dob)}
                helperText={formik.touched.dob && formik.errors.dob}

                type="date"
                placeholder="DD/MM/YY"
              
                className={classes.personalInfo_input}
              ></input>
            </Box>
          </Grid>
          {/* </Grid>
        <Grid container> */}
          <Grid item lg={4} md={4} xs={12} sm={6} mt={2} mt={2}>
            <Box>
              <Typography fontWeight={"bold"} for="Pass">
                Passport
              </Typography>
              <br></br>
              <input
                 id="passport"
                 name="passport"
                 required
                pattern="[0-9]{16}"
                title="Must contain 16 letters"
                 value={formik.values.passport}
                 onChange={formik.handleChange}
                 error={formik.touched.passport && Boolean(formik.errors.passport)}
                 helperText={formik.touched.passport && formik.errors.passport}
                type="text"
                placeholder="0000 0000 0000 0000"
                className={classes.personalInfo_input}
              ></input>
            </Box>
          </Grid>

          <Grid item lg={4} md={4} xs={12} sm={6} mt={4}>
            <Box>
              <Typography fontWeight={"bold"} for="Pass">
                Gender
              </Typography>
              <select
               id="gender"
               name="gender"
               required
               value={formik.values.gender}
               onChange={formik.handleChange}
               error={formik.touched.gender && Boolean(formik.errors.gender)}
               helperText={formik.touched.gender && formik.errors.gender}

                className={classes.personalInfo_select}
              >
                <option value="male">Male</option>
                <option value="femail">Female</option>
              </select>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box mt={3}>
          <Box>
            <Grid container>
              <Grid item lg={12} md={12} sm={12} xs={12}>
                <Typography
                  variant={"h5"}
                  sx={{
                    color: "blue.light",
                    fontWeight: "bold",
                    fontSize: {
                      lg: "25px",
                      md: "22px",
                      sm: "20px",
                      xs: "18px",
                    },
                  }}
                >
                  Baggaage
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container mt={2}>
            <Grid item lg={4} md={4} sm={4} xs={12} mt={2}>
              <Typography sx={{ fontWeight: "bold" }}>
                Cabin Baggaage
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} mt={2}>
              <Typography sx={{ fontWeight: "bold", color: "gray.main" }}>
                42x32x20cm
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} mt={2}>
              <Typography sx={{ fontWeight: "bold" }}>Free</Typography>
            </Grid>
            {/* </Grid>
          <Grid container mt={4}> */}
            <Grid item lg={4} md={4} sm={4} xs={12} mt={2}>
              <Typography sx={{ fontWeight: "bold" }}>
                Checked Baggaage
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} mt={2}>
              <Typography sx={{ fontWeight: "bold", color: "gray.main" }}>
                22kg
              </Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12} mt={2}>
              <Typography sx={{ fontWeight: "bold" }}>$80</Typography>
            </Grid>
            {/* </Grid>
          <Grid container mt={2}> */}
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <input
                className={classes.baggage_input}
                placeholder="Checked Baggaage"
                readOnly
              ></input>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <input
                className={classes.baggage_input}
                placeholder="23Kg"
                readOnly
              ></input>
            </Grid>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <input
                type="number"
                className={classes.baggage_num}
                placeholder="0"
                required
                id="checkedBaggage"
                name="checkedBaggage"
                value={formik.values.checkedBaggage}
                onChange={formik.handleChange}
                error={formik.touched.checkedBaggage && Boolean(formik.errors.checkedBaggage)}
                helperText={formik.touched.checkedBaggage && formik.errors.checkedBaggage}
              />
            </Grid>
            {/* <Grid md={1} item>
              <Button
                sx={{
                  color: "red",
                }}
                variant="contained"
              >
                $80
              </Button>
            </Grid> */}
            {/* </Grid>
          <Grid container> */}

            <Grid item lg={6} md={6} sm={6} xs={12} mt={2}>
              <Box>
                <Typography fontWeight={"bold"} for="Pass">
                  Cabin
                </Typography>
                <br></br>
                <select
                  id="cabin"
                  name="cabin"
                  
                  readOnly
                  value={formik.values.cabin}
                  onChange={formik.handleChange}
                  error={formik.touched.cabin && Boolean(formik.errors.cabin)}
                  helperText={formik.touched.cabin && formik.errors.cabin}

                  className={classes.personalInfo_select}
                >
                  <option value="ecomony">Economy</option>
                  <option value="business">Business</option>
                  <option value="firstClass">First Class</option>
                </select>
              </Box>
            </Grid>
            <Grid item lg={6} md={6} sm={6} xs={12} mt={4}>
              <Box>
              <Typography fontWeight={"bold"} for="Pass">
                  Reserved Seats
              </Typography>
          <Select
          id="reservedSeats"
          multiple = "true"
          name="reservedSeats"
          required
          value={formik.values.reservedSeats}
          onChange={formik.handleChange}
          // value={selectedSeats}
          // onChange={handleChange}
          // onChange={formik.handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {formik.values.reservedSeats &&  formik.values.reservedSeats.map((name) => (
               <MenuItem key={name} value={name}>
               <Checkbox checked={formik.values.reservedSeats?.indexOf(name) > -1} />
               <ListItemText primary={name} />
             </MenuItem>
          ))}

        </Select>
              </Box>
            </Grid>
          </Grid>
        </Box>

      </Box>
    <Grid item  md={12} lg={2} sm={3} xs={4} mt={2}>
          <Box display={"flex"} flexDirection={"row"} justifyItems={"flexEnd"} alignItems={"flexEnd"} mt={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <Button sx={{ color: "blue.light" }}
            type="submit"
            variant="contained"
            // onClick={formik.submitForm}
            >
              UPDATE
            </Button>
          </Box>
        </Grid>
    </Grid>
    </Box>
  
    </Box>
    )
}
