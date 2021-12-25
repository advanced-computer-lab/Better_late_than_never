import React, { useMemo } from "react";
import { useTable } from "react-table";
import {
  TableContainer,
  Table as MUITable,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

import {
  AddCircle as AddCircleIcon,
  Delete as DeleteIcon,
  Edit as EditIcon,
  Visibility as ViewIcon,
} from "@mui/icons-material";

function BasicTable({
  columns: Columns,
  data: Data,
  edit,
  remove,
  view,
  add,
  loading,
}) {
  const columns = useMemo(() => Columns, [Columns]);
  const data = useMemo(() => Data, [Data]);

  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableContainer sx={{ mt: 3 }}>
      <MUITable {...getTableProps()} stickyHeader>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell
                  {...column.getHeaderProps()}
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {column.render("Header")}
                </TableCell>
              ))}
              {/* actions */}
              {(edit || remove || view || add) && (
                <TableCell
                  sx={{
                    bgcolor: "primary.main",
                    color: "white",
                    fontWeight: "bold",
                  }}
                  align="center"
                >
                  Action
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {loading && (
            <TableRow>
              <TableCell
                colSpan={columns.length + (remove || edit ? 1 : 0)}
                align="center"
              >
                <CircularProgress />
              </TableCell>
            </TableRow>
          )}

          {!loading &&
            rows.map((row) => {
              prepareRow(row);
              return (
                <TableRow {...row.getRowProps()} hover>
                  {row.cells.map((cell) => (
                    <TableCell {...cell.getCellProps()} size="small">
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                  {/* actions */}
                  {(edit || remove || view || add) && (
                    <TableCell align="center" size="small">
                      {add && (
                        <IconButton
                          color="primary"
                          onClick={() => add(row.values.id)}
                        >
                          <AddCircleIcon />
                        </IconButton>
                      )}
                      {view && (
                        <IconButton
                          color="primary"
                          onClick={() => view(row.values._id)}
                        >
                          <ViewIcon />
                        </IconButton>
                      )}
                      {edit && (
                        <IconButton
                          color="info"
                          onClick={() => edit(row.values._id)}
                        >
                          <EditIcon />
                        </IconButton>
                      )}
                      {remove && (
                        <IconButton
                          color="error"
                          onClick={() => remove(row.values._id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                    </TableCell>
                  )}
                </TableRow>
              );
            })}

          {!loading && data.length < 1 && (
            <TableRow>
              <TableCell
                colSpan={columns.length + (remove || edit ? 1 : 0)}
                align="center"
              >
                <Typography color="GrayText">No records found!</Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
}

export default BasicTable;
