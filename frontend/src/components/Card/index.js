import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({
  padding,
  cardContent,
  className,
  children,
  ...props
}) {
  return (
    <Card
      className={`card-container border-0  position-relative my-4 p-2 ${className}`}
      sx={{ minWidth: 275 }}
      {...props}
    >
      <CardContent className={`${padding}`}>{children}</CardContent>
    </Card>
  );
}
