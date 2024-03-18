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
import React, { useEffect, useState } from "react";

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

const CustomTable = ({ headRow, rowData }) => {
  const [currentPage, setCurrentPage] =useState(1)
  const [data, setData] = useState([])


  
  const totalPages = rowData.length / 5

  const handleChangePagination = (e, page) => {
    setCurrentPage(page)
  }

  useEffect(() => {
    const end = 5 * currentPage
    const start = end - 5
    setData(rowData.slice(start, end))
  }, [currentPage])
  return (
    <Box>
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
                <TableCell
                  sx={{
                    color: "#2f2f2f",
                    fontFamily: "mySecondFont",
                    padding: "24px",
                  }}
                >
                  {row.model}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2f2f2f",
                    fontFamily: "myFourthFont",
                    padding: "24px",
                  }}
                >
                  #{row.id}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2f2f2f",
                    fontFamily: "myFourthFont",
                    padding: "24px",
                  }}
                >
                  {row.brand}
                </TableCell>
                <TableCell
                  sx={{
                    color: "#2f2f2f",
                    fontFamily: "myFourthFont",
                    padding: "24px",
                  }}
                >
                  {row.variants.length}
                </TableCell>
                <TableCell
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "#319800",
                    fontSize: "14px",
                  }}
                >
                  {" "}
                  <Box
                    bgcolor={"#319800"}
                    width={"8px"}
                    height={"8px"}
                    borderRadius={"50%"}
                  ></Box>
                  {row.status}
                </TableCell>
                <TableCell>
                  <Box display={"flex"} alignItems={"center"} gap={"4px"}>
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
                      <span class="material-symbols-outlined" style={{}}>
                        visibility
                      </span>
                    </Box>
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
                    style={{ color: "#700000", fontWeight: "300" }}
                    class="material-symbols-outlined"
                  >
                    delete
                  </span>
                    </Box>
                  </Box>
                </TableCell>
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
            Showing 1-10 of 80 vehicle models
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
    </Box>
  );
};

export default CustomTable;
