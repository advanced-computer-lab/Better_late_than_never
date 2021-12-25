import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { PassengerAPI } from "../../api";
import { FlightAPI } from "../../api";
import { PaymentAPI } from "../../api";
import { toast } from "react-toastify";
import Visa from "../../assets/Images/857_visa.svg";
import master from "../../assets/Images/download(6).svg";
import { useParams } from "react-router";
import AccountInfo from "../AvailableTickets/AccountInfo";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";


let params;

let user = localStorage.getItem("user");
let activeUser = JSON.parse(user);

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


function Child(props) {
  const classes = useStyles();
  const { caption, flightamt, navigate } = props;
  const { lines, setLines } = props.pstate;
  const [availableSeats, setAvailableSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  let cabin;

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedSeats(
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log("selectedSeats", selectedSeats)
  };
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

  let cabinSeats = (e) => {
    // console.log("event", e.target.value)
    cabin = e.target.value;
    formik.values.cabin = cabin
    let flightId= params?.f_id;
    
    PassengerAPI.getSeats({cabin, flightId}).then((res) => {
      // console.log("setAvailableSeats", res.data)
      setAvailableSeats(res.data)
      
   });
   }

   const initialValues = {
    f_name: "",
    l_name: "",
    dob: "",
    passport: "",
    gender: "",
    checkedBaggage: 0,
    cabin: "",
    reservedSeats: selectedSeats,
    userId: activeUser.user._id,
    flightId: params?.f_id,
  };
  

  const validationSchema = Yup.object().shape({
    f_name: Yup.string().required("First name required"),
    l_name: Yup.string().required("Required"),
    // dob: Yup.string().required("Required"),
    // passport: Yup.string().required("Required"),
    // gender: Yup.string().required("Required"),
    // checkedBaggage: Yup.number().required("Required"),
    // cabin: Yup.string().required("Required"),
    // avaliableSeats: Yup.number().required("Required"),
  });
  

  const formik = useFormik({
    initialValues,
    // validationSchema,
    onSubmit: (values) => {
      console.log("value", values)
       if (user) {
        values.flightId = params.f_id;
        values.reservedSeats = selectedSeats;
        
        swal({
          title: "Are you sure?",
          text: "Do you want to Reserve this Flight?  ",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willRes) => {
          let user = localStorage.getItem('user')
          let userObj = JSON.parse(user)
          let user_Id = userObj.user._id;
          if (willRes) {
            let user_email = activeUser.user.email
            PassengerAPI.addPassenger({values, user_email }).then((res) => {
              // toast.success("Flight Booked Successfully!");
              navigate("/home")
              localStorage.removeItem("flight")
            });
    
            PaymentAPI.doPayment(values).then((res) => {
              // console.log(res);
            });
            swal(`Ticket Amount $${flightamt} Deducted`, {
              icon: "success",
            });
          }
        });
       } else {
        toast.error("Please Login First");
      }
    },
  });

  return (
    <Box mx={12} component="form" onSubmit={formik.handleSubmit}>
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
              {caption !== 0 ? (
                <Button
                  sx={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  color="primary"
                  onClick={() => {
                    setLines(lines.filter((item) => item != caption));
                  }}
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                >
                  Remove Person
                </Button>
              ) : null}
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
                  // }
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
                    Baggage
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Grid container mt={2}>
              <Grid item lg={4} md={4} sm={4} xs={12} mt={2}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Cabin Baggage
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
                  Checked Baggage
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
                  placeholder="Checked Baggage"
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
                  required
                  className={classes.baggage_num}
                  placeholder="0"
                  id="checkedBaggage"
                  name="checkedBaggage"
                  value={formik.values.checkedBaggage}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.checkedBaggage &&
                    formik.errors.checkedBaggage
                  }
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
                    required
                    value={formik.values.cabin}
                    onChange={cabinSeats}
                    helperText={formik.touched.cabin && formik.errors.cabin}
                    className={classes.personalInfo_select}
                  >
                    <option value="ecomony">Economy</option>
                    <option value="business">Business</option>
                    <option value="firstClass">First Class</option>
                  </select>
                </Box>
              </Grid>
              <Grid item lg={6} md={6} sm={6} xs={12} mt={2}>
                <Box>
                  <Typography fontWeight={"bold"} for="reservedSeats">
                Select Seat N0.
                  </Typography>
                  <br></br>
         <Select
         required
          id="reservedSeats"
          multiple = "true"
          name="reservedSeats"
          value={selectedSeats}
          onChange={handleChange}
          // onChange={formik.handleChange}
          input={<OutlinedInput label="Tag" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {availableSeats &&  availableSeats.map((name) => (
               <MenuItem key={name} value={name}>
               <Checkbox checked={selectedSeats?.indexOf(name) > -1} />
               <ListItemText primary={name} />
             </MenuItem>
          ))}

        </Select>
                </Box>
              </Grid>
            </Grid>
          </Box>

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
            <Grid item md={6} mt={3} xs={12} sm={6}>
              <Typography fontWeight={"bold"} for="Pass">
                Card Number
              </Typography>
              <input
                id="cardNumber"
                name="cardNumber"
                required
                pattern="[0-9]{12}"
                title="Must contain 12 characters"
                value={formik.values.cardNumber}
                onChange={formik.handleChange}
                helperText={
                  formik.touched.cardNumber && formik.errors.cardNumber
                }
                type="text"
                placeholder="xxxx xxxx xxxx"
                className={classes.personalInfo_input}
              />
            </Grid>
            <Grid item md={6} mt={3} xs={12} sm={6}>
              <Typography fontWeight={"bold"} for="Pass">
                Name on the Card
              </Typography>
              <input
                id="cardName"
                name="cardName"
                required
                value={formik.values.cardName}
                onChange={formik.handleChange}
                helperText={formik.touched.cardName && formik.errors.cardName}
                type="text"
                placeholder="Enter Last Name"
                className={classes.personalInfo_input}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item md={6} xs={10} mt={3}>
              <Typography fontWeight={"bold"} for="Pass">
                Expiry Date
              </Typography>
              <Box height={40} display={"flex"} flexDirection={"row"} mt={1}>
                <input
                type="date"
                  id="expireMonth"
                  name="expireMonth"
                  required
                  value={formik.values.expireMonth}
                  onChange={formik.handleChange}
                  helperText={
                    formik.touched.expireMonth && formik.errors.expireMonth
                  }
                  className={classes.payment_method_month_field}
                  style={{ width: "30%" }}
                />
              </Box>
            </Grid>
            <Grid item md={6} xs={12} mt={3}>
              <Typography fontWeight={"bold"} for="Pass">
                CVV
              </Typography>
              <Box height={40} display={"flex"} flexDirection={"row"} mt={1}>
                <input
                  id="cvv"
                  name="cvv"
                  required
                  pattern="[0-9]{3}"
                  title="3 digits only"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  helperText={formik.touched.cvv && formik.errors.cvv}
                  type="text"
                  placeholder="0000"
                  className={classes.cvv_NUMBER}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Grid item md={12} lg={2} sm={3} xs={4} mt={2}>
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyItems={"flexEnd"}
            alignItems={"flexEnd"}
            mt={{ xs: 2, sm: 2, md: 4, lg: 2 }}
          >
            <Button
              sx={{ color: "blue.light" }}
              type="submit"
              variant="contained"
              // onClick={formik.submitForm}
            >
              BOOK NOW
            </Button>
          </Box>
        </Grid>
{/* 
        <Grid item md={12} lg={12} sm={12} xs={12} mt={2}>
          <AccountInfo />
        </Grid> */}
      </Grid>
    </Box>
  );
}

export default function AddPassenger() {
  let [paramsValue, setParamsValue] = useState();
  let [flightamt, setFlightamt] = useState();
  const navigate = useNavigate();


  params = useParams();

  useEffect(() => {
    FlightAPI.getOneFlight({_id: params?.f_id}).then((res) => {
      console.log("ffff", res?.data?.dataf[0].ticket)
      setFlightamt(res?.data?.dataf[0].ticket)
    })
  }, [])

  const [lines, setLines] = useState([0]);

  return (
    <Box>
      {console.log("paaarams", params.f_id)}

      <Grid container>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          {/* <Button
            onClick={() => {
              setLines([...lines, lines.length]);
            }}
            variant="outlined"
          >
            + Add Person
          </Button> */}
        </Grid>
        {/* </Grid> */}
        {lines.map((m) => (
          <Box spacing={3} display={"flex"} flexDirection={"coloum"}>
            <Child flightamt={flightamt} navigate={navigate} key={m} caption={m} pstate={{ lines, setLines }} />
          </Box>
        ))}

        {/* <Grid container> */}
      </Grid>
    </Box>
  );
}