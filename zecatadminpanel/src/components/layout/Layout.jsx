import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Sidebar children={children} />
    </Box>
  );
};

export default Layout;
