import React from "react";
import { Route, Routes } from "react-router-dom";

const List = React.lazy(() => import("../screens/AdminPanel/Users/List"));

export default function UsersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<List />} />
    </Routes>
  );
}
