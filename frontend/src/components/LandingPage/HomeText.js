import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { spacing } from "@mui/system";
import Grid from "@mui/material/Grid";

export default function HomeText() {
  return (
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>


      <Typography sx={{ color: "white", fontWeight: "800" }} variant="h4">
          ARE YOU READY FOR A PERFECT FLIGHT
      </Typography>
      <Typography sx={{ color: "white" ,width:"50%" ,textAlign: "center" }} variant="h7" >
           Welcome to Our Reservation System
        </Typography>
    </Box>
   
  );
}
