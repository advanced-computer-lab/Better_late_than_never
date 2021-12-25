import React from "react";
import Navbar from "../../components/Layout/Navbar";
import AppRoutes from "../../routes/AppRoutes";

export default function Main() {
  return (
    <div>
      <Navbar>
        <AppRoutes />
      </Navbar>
    </div>
  );
}
