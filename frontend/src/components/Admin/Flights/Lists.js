import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import BasicTable from "../../Utils/BasicTable";
import { Button } from "@mui/material";
import DataDialog from "../../Utils/DataDialog";
import Create from "./Create";
import Edit from "./Edit";
import { FlightAPI } from "../../../api";
import swal from "sweetalert";
import moment from "moment";
import View from "./View";

export default function Lists() {
  const [createDialog, setCreateDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [editId, setEditId] = useState({});
  const [viewDialog, setViewDialog] = useState(false);
  const [viewRow, setViewRow] = useState({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dellFlight = (_id) => {
    swal({
      title: "Are you sure?",
      text: "Do you want to remove this flight?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        FlightAPI.removeFlight(_id).then(() => {
          flightList();
        });
        swal("Your flight is deleted!", {
          icon: "success",
        });
      }
    });
  };

  const flightList = () => {
    FlightAPI.getFlights().then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    flightList();
  }, []);

  const columns = [
    { Header: "ID", accessor: "_id" },
    { Header: "Flight #", accessor: "flight_number" },
    { Header: "From", accessor: "from" },
    { Header: "To", accessor: "to" },
    {
      Header: "Dep Date",
      accessor: "dep_date",
      Cell: (props) => (
        <span>
          {props.value ? moment(props.value).format("DD-MM-YYYY") : "---"}
        </span>
      ),
    },
    {
      Header: "Arr Date",
      accessor: "arr_date",
      Cell: (props) => (
        <span>
          {props.value ? moment(props.value).format("DD-MM-YYYY") : "---"}
        </span>
      ),
    },
    { Header: "Terminal", accessor: "airport_terminal" },
  ];

  const editFlight = (_id) => {
    setEditDialog(true);
    setEditId(_id);
  };

  const viewDetails = (_id) => {
    setViewDialog(true);
    setViewRow(_id);
  };

  return (
    <Box>
      <Box display={"flex"} flexDirection={"row-reverse"}>
        <Button onClick={() => setCreateDialog(true)} variant={"outlined"}>
          Create Flight
        </Button>
      </Box>
      <BasicTable
        loading={loading}
        remove={(id) => dellFlight(id)}
        edit={editFlight}
        view={viewDetails}
        columns={columns}
        data={data}
      />
      {/* Create Flight */}
      <DataDialog
        title={"Create Flight"}
        width={"md"}
        open={createDialog}
        close={() => setCreateDialog(false)}
      >
        <Create flightList={flightList} close={() => setCreateDialog(false)} />
      </DataDialog>
      {/* Edit Flight */}
      <DataDialog
        title={"Edit Flight"}
        width={"md"}
        open={editDialog}
        close={() => setEditDialog(false)}
      >
        <Edit
          flightList={flightList}
          editId={editId}
          close={() => setEditDialog(false)}
        />
      </DataDialog>
      {/* View Details Flight */}
      <DataDialog
        title={"Flight Detail"}
        open={viewDialog}
        close={() => setViewDialog(false)}
      >
        <View
          flightList={flightList}
          viewRow={viewRow}
          close={() => setEditDialog(false)}
        />
      </DataDialog>
    </Box>
  );
}
