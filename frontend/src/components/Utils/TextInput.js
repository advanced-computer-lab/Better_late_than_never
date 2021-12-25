import React from "react";
import { TextField } from "@mui/material";

function TextInput({ size, formik, label = "", name, ...props }) {
  return (
    <TextField
      variant="outlined"
      size={size ? size : "small"}
      fullWidth
      id={name}
      name={name}
      label={label}
      value={formik.values[name]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[name] && Boolean(formik.errors[name])}
      helperText={formik.touched[name] && formik.errors[name]}
      {...props}
    />
  );
}

export default TextInput;
