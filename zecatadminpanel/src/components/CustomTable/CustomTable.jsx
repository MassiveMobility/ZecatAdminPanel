import {
  Box,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { endPoints } from "../../api/endpoint";
import DeleteDialog from "../DialogBox/DeleteDialog";
import { setOpen } from "../../redux/actions/deleteDialogSlice";
import { useDispatch, useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(65, 119, 201, 0.05)",
    color: "#2F2F2F",
    borderRadius: "4px",
    border: 0,
    fontFamily: "myFourthFont",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "24px",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "rgba(65, 119, 201, 0.05)",
  },
  // hide last border
  "& td, & th": {
    border: 0,
  },
}));

const CustomTable = ({ headRow, rowData, view = 5, document = "" }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [endPage, setEndPage] = useState();
  const [startPage, setStartPage] = useState();
  const [prodId, setProdId] = useState('')
  const [endpoint, setEndpoint] = useState('')
  
  const dispatch = useDispatch() 
  const navigate = useNavigate()

  const {open} = useSelector(state => state.openDeleteDialog)

  const handleClose = () => {
    dispatch(setOpen(false))
  }

  const totalRows = rowData.length;
  const totalPages = Math.ceil(totalRows / view);

  const handleChangePagination = (e, page) => {
    setCurrentPage(page);
  };

  const handleNavigate = () => {
    navigate("enquiry_details");
  };

  const openDeleteDialog = (prodId) => {
    dispatch(setOpen(true))
    setProdId(prodId)
  }

  const handleEditItem = (prodId) => {
      
  }

  useEffect(() => {
    const end = view * currentPage;
    const start = end - view;
    if (end > totalRows) {
      setEndPage(totalRows);
    } else {
      setEndPage(end);
    }
    setStartPage(start);
    setData(rowData.slice(start, end));
  }, [currentPage, rowData, totalRows, view]);

  useEffect(() => {
    if(document === 'brand'){
      setEndpoint(endPoints.createBrand)
    }else if(document === 'product'){
      setEndpoint(endPoints.deleteProduct)
    }
  }, [])
  return (
    <Box>
        <Typography
            mt={"12px"}
            mb={"8px !important"}
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myFourthFont"}
            textAlign={"left"}
          >
            {` Showing ${startPage}-${endPage} of ${rowData.length} vehicle`}
          </Typography>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {headRow.map((row) => (
                <TableCell
                  sx={{
                    paddingY: "8px",
                    border: 0,
                    bgcolor: "rgba(65, 119, 201, 0.05)",
                    borderRadius: "4px",
                    color: "#2F2F2F",
                    fontFamily: "mySecondFont",
                    fontSize: "14px",
                    textWrap: "nowrap",
                  }}
                >
                  {row.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={{ mt: "12px !important" }}>
            <TableCell sx={{ paddingY: "12px", border: 0 }}></TableCell>
            {data.map((row) => (
              <StyledTableRow>
                {headRow.map((col) => (
                  <>
                    {col.field === "action" ? (
                      <>
                        <TableCell>
                          <Box
                            display={"flex"}
                            alignItems={"center"}
                            gap={"4px"}
                          >
                            {row[col.field].includes("view") && (
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={"4px"}
                                borderRadius={"4px"}
                                border={"1px solid #D0D0D0"}
                                p={"4px 16px"}
                                sx={{
                                  cursor: "pointer",
                                }}
                                onClick={handleNavigate}
                              >
                                <Typography fontSize={"14px"} color={"#2079FF"}>
                                  View
                                </Typography>
                              </Box>
                            )}
                            {row[col.field].includes("edit") && (
                              <Box
                                display={"flex"}
                                alignItems={"center"}
                                gap={"4px"}
                                borderRadius={"4px"}
                                border={"1px solid #D0D0D0"}
                                p={"4px 16px"}
                                sx={{
                                  cursor: "pointer",
                                }}
                                onClick={() => handleEditItem(row?.id)}
                              >
                                <span
                                  class="material-symbols-outlined"
                                  style={{ fontSize: "20px", color: "#2079FF" }}
                                >
                                  edit
                                </span>
                                <Typography fontSize={"14px"} color={"#2079FF"}>
                                  Edit
                                </Typography>
                              </Box>
                            )}
                            {row[col.field].includes("hide") && (
                              <Box
                                display={"flex"}
                                borderRadius={"4px"}
                                border={"1px solid #D0D0D0"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                p={"4px"}
                                sx={{
                                  cursor: "pointer",
                                }}
                              >
                                <span
                                  class="material-symbols-outlined"
                                  style={{}}
                                >
                                  visibility
                                </span>
                              </Box>
                            )}
                            {row[col.field].includes("delete") && (
                              <Box
                                display={"flex"}
                                borderRadius={"4px"}
                                border={"1px solid #D0D0D0"}
                                justifyContent={"center"}
                                alignItems={"center"}
                                p={"4px"}
                                sx={{
                                  cursor: "pointer",
                                }}
                                onClick={() => openDeleteDialog(row?.id)}
                              >
                                <span
                                  style={{
                                    color: "#700000",
                                    fontWeight: "300",
                                  }}
                                  class="material-symbols-outlined"
                                >
                                  delete
                                </span>
                              </Box>
                            )}
                          </Box>
                        </TableCell>
                      </>
                    ) : (
                      <>
                        {col.field === "status" ? (
                          <>
                            {row[col.field] !== "live" ? (
                              <>
                                <TableCell>
                                  <Box
                                    sx={{
                                      padding: "4px 8px",
                                      borderRadius: "4px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      bgcolor:
                                        row[col.field] === "open"
                                          ? "rgba(229, 110, 0, 0.10)"
                                          : row[col.field] === "unseen"
                                          ? "rgba(229, 0, 0, 0.10)"
                                          : row[col.field] === "resolved"
                                          ? "rgba(0, 112, 4, 0.10)"
                                          : "",
                                      color:
                                        row[col.field] === "open"
                                          ? "#E56E00"
                                          : row[col.field] === "unseen"
                                          ? "#E50000"
                                          : row[col.field] === "resolved"
                                          ? "#007004"
                                          : "",
                                      width: "108px",
                                      fontSize: "12px",
                                      textTransform: "uppercase",
                                      fontFamily: "mySecondFont",
                                    }}
                                  >
                                    {row[col.field]}
                                  </Box>
                                </TableCell>
                              </>
                            ) : (
                              <>
                                <TableCell
                                  sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    color: "#319800",
                                    fontSize: "14px",
                                  }}
                                >
                                  <Box
                                    bgcolor={"#319800"}
                                    width={"8px"}
                                    height={"8px"}
                                    borderRadius={"50%"}
                                  ></Box>
                                  {row[col.field]}
                                </TableCell>
                              </>
                            )}
                          </>
                        ) : (
                          <TableCell
                            sx={{
                              color: "#2f2f2f",
                              fontFamily: "myFourthFont",
                              padding: "24px",
                            }}
                          >
                            {row[col.field]}
                          </TableCell>
                        )}
                      </>
                    )}
                  </>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        mt={3}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography
          color={"#2f2f2f"}
          fontSize={"14px"}
          fontFamily={"myFourthFont"}
          textAlign={"left"}
        >
          {` Showing ${startPage}-${endPage} of ${rowData.length} vehicle`}
        </Typography>
        <Box>
          <Pagination
            page={currentPage}
            onChange={handleChangePagination}
            count={totalPages}
            variant="outlined"
            shape="rounded"
            sx={{
              "& .MuiPaginationItem-root": {
                backgroundColor: "transparent",
              },
              "& .Mui-selected": {
                bgcolor: "#2F2F2F !important",
                color: "#FFF",
              },
            }}
          />
        </Box>
      </Box>
      <DeleteDialog open={open} onClose={handleClose} productId={prodId} endpoint={endpoint}/>

    </Box>
  );
};

export default CustomTable;
