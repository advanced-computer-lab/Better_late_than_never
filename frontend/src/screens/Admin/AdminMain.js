import React from "react";
import Layout from "../../components/Admin/Layout/Layout";
import AdminRoutes from "../../routes/AdminRoutes";

export default function AdminMain() {
  return (
    <div>
      <Layout>
        <AdminRoutes />
      </Layout>
    </div>
  );
}
