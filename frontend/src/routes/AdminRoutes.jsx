import React from "react";
import { Routes, Route } from "react-router-dom";

const Dashboard = React.lazy(() => import("../screens/Admin/Dashboard"));
const Flights = React.lazy(() => import("../screens/Admin/Flights"));
const Users = React.lazy(() => import("../screens/Admin/Users"));

function AppRoutes() {
  return (
    <React.Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </React.Suspense>
  );
}
export default AppRoutes;
