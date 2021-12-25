import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
// import TodayIcon from "@mui/icons-material/Today";
import { useNavigate } from "react-router-dom";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function Lists() {
  const navigate = useNavigate();

  return (
    <List sx={{ width: "100%", maxWidth: 360 }} component="nav">
      <ListItemButton onClick={() => navigate("/admin")}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/admin/users")}>
        <ListItemIcon>
          <GroupIcon />
        </ListItemIcon>
        <ListItemText primary="Users" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/admin/flights")}>
        <ListItemIcon>
          <FlightTakeoffIcon />
        </ListItemIcon>
        <ListItemText primary="Flights" />
      </ListItemButton>
      {/* <ListItemButton onClick={() => navigate("/portal/sports")}>
        <ListItemIcon>
          <SportsBaseballIcon />
        </ListItemIcon>
        <ListItemText primary="Sports" />
      </ListItemButton>
      <ListItemButton onClick={() => navigate("/portal/events")}>
        <ListItemIcon>
          <TodayIcon />
        </ListItemIcon>
        <ListItemText primary="Events" />
      </ListItemButton> */}
    </List>
  );
}
