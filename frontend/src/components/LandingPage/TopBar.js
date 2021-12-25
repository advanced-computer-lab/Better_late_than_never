import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

export default function TopBar() {
  const history = useNavigate();
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  const logoutFun = () => {
    localStorage.removeItem("user");
    history("/auth/login");
    toast.success("Logout Successfully!");
  };

  const loginFun = () => {
    history("/auth/login");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} lg={10} md={10} sm={10} xs={10}>
        <AppBar
          sx={{ backgroundColor: "transparent", boxShadow: "none" }}
          position="absolute"
        >
          <Toolbar sx={{ height: "10vh" }} variant="dense">
            <Grid
              container
              spacing={4}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
            >
              <Grid item lg={10} md={10} sm={10} xs={10}>
                <Typography
                  variant="h5"
                  fontWeight="800"
                  color="inherit"
                  component="div"
                >
                  LOGO
                </Typography>
              </Grid>

              <Grid item lg={1} md={1} sm={1} xs={1}>
                <Typography variant="h7" color="inherit" component="div">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    to="/home"
                  >
                    HOME
                  </Link>
                </Typography>
              </Grid>
              <Grid item lg={1} md={1} sm={1} xs={1}>
                <Typography variant="h7" color="inherit" component="div">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                    }}
                    onClick={user ? logoutFun : loginFun}
                    to="/auth/login"
                  >
                    {user ? "LOGOUT" : "LOGIN"}
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
