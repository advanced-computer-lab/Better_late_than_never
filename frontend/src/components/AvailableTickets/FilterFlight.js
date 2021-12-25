import React from "react";
import {
  Button,
  Divider,
  Paper,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import before6 from "../../assets/Icons/ionic-ios-partly-sunny.svg";
import to12 from "../../assets/Icons/ionic-ios-sunny.svg";
import to6 from "../../assets/Icons/awesome-cloud.svg";
import after6 from "../../assets/Icons/ionic-ios-cloudy-night.svg";

function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

export default function FilterFlight() {
  const [value, setValue] = React.useState([20, 37]);
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue);
    }
  };

  return (
    <Paper elevation={3}>
      <Button fullWidth variant="contained" sx={{ bgcolor: "blue.dark" }}>
        Filter
      </Button>
      <Box mt={7} mx={2}>
        <Typography fontWeight={"bold"}>Price Range</Typography>
        <Box mt={7}>
          <Slider
            getAriaLabel={() => "Minimum distance shift"}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="on"
            getAriaValueText={valuetext}
            disableSwap
            sx={{ color: "blue.light" }}
          />
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        <Box my={2}>
          <Typography fontWeight={"bold"}>Depart Time</Typography>
        </Box>
        <Box my={2}>
          <Button
            size="small"
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#cdcdcd", mt: 1, color: "black" }}
            startIcon={<img src={before6} alt="fjdk" />}
          >
            Before 6am
          </Button>
          <Button
            size="small"
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#cdcdcd", mt: 1, color: "black" }}
            startIcon={<img src={to12} alt="fjdk" />}
          >
            6am - 12am
          </Button>
          <Button
            size="small"
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#cdcdcd", mt: 1, color: "black" }}
            startIcon={<img src={to6} alt="fjdk" />}
          >
            12pm - 6pm
          </Button>
          <Button
            size="small"
            fullWidth
            variant="contained"
            sx={{ bgcolor: "#cdcdcd", mt: 1, color: "black" }}
            startIcon={<img src={after6} alt="fjdk" />}
          >
            After 6pm
          </Button>
        </Box>
        <Box my={2}>
          <Divider />
        </Box>
        {/* <Box my={2}>
          <Typography fontWeight={"bold"}>Stops</Typography>
        </Box>
        <Box my={2}>
          <Stack direction="row" spacing={0.5}>
            <Box>
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: "#cdcdcd", mt: 1, color: "black" }}
              >
                0
              </Button>
            </Box>
            <Box>
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: "#cdcdcd", mt: 1, color: "black" }}
              >
                1
              </Button>
            </Box>
            <Box>
              <Button
                size="small"
                variant="contained"
                sx={{ bgcolor: "#cdcdcd", mt: 1, color: "black" }}
              >
                1+
              </Button>
            </Box>
          </Stack>
        </Box> */}
        <Box my={2}>
          <Divider />
        </Box>
        <Box mt={2} pb={2}>
          <Button
            fullWidth
            variant="contained"
            sx={{ bgcolor: "blue.light", mt: 1, fontWeight: "bold" }}
          >
            Reset All Filter
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
