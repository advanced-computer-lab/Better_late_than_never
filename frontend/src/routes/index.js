import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Main from "../screens/User/main";
import AdminMain from "../screens/Admin/AdminMain";

import Login from "../screens/Auth/Login/Login";
import Register from "../screens/Auth/Register/Register";
import LandingPage from "../screens/LandingPage";
import ChangePass from "../screens/Auth/ChangePass/ChangePass";

function AppRoutes() {
  return (
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/home/*" element={<Main />} />
        <Route path="/admin/*" element={<AdminMain />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/change-password" element={<ChangePass />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </React.Suspense>
  );
}
export default AppRoutes;
