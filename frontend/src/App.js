import React from "react";
import Router from "./routes/index";
import { ToastContainer } from "react-toastify";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  rtl: false,
  pauseOnFocusLoss: true,
  draggable: false,
  pauseOnHover: true,
};

const theme = createTheme({
  palette: {
    blue: {
      dark: "#002b4e",
      light: "#2699fb",
    },
    gray: {
      main: "#7D7D7D",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ToastContainer {...toastOptions} />
        <React.Fragment>
          <Router />
        </React.Fragment>
      </div>
    </ThemeProvider>
  );
}

export default App;
