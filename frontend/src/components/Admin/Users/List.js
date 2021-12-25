import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import BasicTable from "../../Utils/BasicTable";
import { AuthAPI } from "../../../api";

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const userList = () => {
    AuthAPI.getUsers().then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    userList();
  }, []);

  const columns = [
    { Header: "ID", accessor: "_id" },
    { Header: "User Name", accessor: "userName" },
    { Header: "Email", accessor: "email" },
    { Header: "Mobile #", accessor: "mobileNumber" },
    { Header: "Passport #", accessor: "passportNumber" },
  ];

  return (
    <Box>
      <BasicTable loading={loading} columns={columns} data={data} />
    </Box>
  );
}
