import React from "react";
import { Routes, Route } from "react-router-dom";

import AvailableTickets from "../screens/AvailableTickets";
// import ReservedTickets from "../screens/ReserveFlightes";
const ReserveTicketRoutes = React.lazy(() =>
  import("../screens/ReserveFlightes/Reserve")
);
const PassengerRoutes = React.lazy(() => import("../screens/Passenger/index"));

function AppRoutes() {
  return (
    <React.Suspense fallback={"Loading"}>
      <Routes>
        <Route path="/" element={<AvailableTickets />} />
        <Route path="/reserved-tickets/*" element={<ReserveTicketRoutes />} />
        <Route path="/add-passenger/:f_id" element={<PassengerRoutes />} />
      </Routes>
    </React.Suspense>
  );
}
export default AppRoutes;
