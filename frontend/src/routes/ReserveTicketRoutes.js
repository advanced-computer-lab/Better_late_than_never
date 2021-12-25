import React from "react";
import { Route, Routes } from "react-router-dom";

const Reserve = React.lazy(() => import("../screens/ReserveFlightes/index"));
const EditTickets = React.lazy(() => import("../screens/ReserveFlightes/Edit"));

export default function ReserveTicketRoutes() {
    return (
        <Routes>
            <Route path="/edit/:f_id" element={<EditTickets />} />
            <Route exact path="/" element={<Reserve />} />
            

        </Routes>
    );
}
