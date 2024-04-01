import { Box, Typography } from "@mui/material";
import React from "react";
import VariantAccordion from "./VariantAccordion";

const VariantSpecFeature = ({setFormData, formData}) => {
  return (
    <Box
      sx={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        Specs & Features
      </Typography>
      <Box sx={{ marginTop: "16px" }}>
        <VariantAccordion setFormData={setFormData} formData={formData}/>
      </Box>
    </Box>
  );
};

export default VariantSpecFeature;
