import { Box, Typography } from "@mui/material";
import React from "react";
import CustomTab from "../../components/CustomTabs/CustomTab";

const TwoWheelerPage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
        fontFamily={"mySecondFont"}
      >
        2 Wheeler list
      </Typography>
      <Box
        sx={{
          padding: { md: "24px", xs: "16px" },
          background: "#fff",
          borderRadius: "12px",
          width: "100%",
          marginTop: "16px",
        }}
      >
        <CustomTab />
      </Box>
    </Box>
  );
};

export default TwoWheelerPage;
