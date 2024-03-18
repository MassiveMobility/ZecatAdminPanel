import { Box, Typography } from "@mui/material";
import React from "react";
import SortIcon from '@mui/icons-material/Sort';

const Sorting = () => {
  return (
    <Box
      style={{
        padding: "8px 24px",
        borderRadius: "8px",
        border: "1px solid rgba(18, 18, 18, 0.15)",
        width: "100%",
        outline: "none",
        display: 'flex',
        alignItems: "center",
        gap:'4px',
        cursor: "pointer"
      }}
    >
      <Typography color={"#2f2f2f"} fontFamily={'mySecondFont'} fontSize={'14px'}>sort</Typography>
      <SortIcon fontSize="small"/>
    </Box>
  );
};

export default Sorting;
