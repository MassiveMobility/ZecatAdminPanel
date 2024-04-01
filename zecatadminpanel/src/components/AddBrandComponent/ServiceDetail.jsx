import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const ServiceDetail = ({ data, setData }) => {
  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setData({
      ...data,
      [fieldName]: Number(value),
    });
  };
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
        Service details
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            No. of Brand showrooms across India (optional)
          </Typography>

          <input
            style={{
              height: "56px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(47, 47, 47, 0.25)",
              outline: "none",
              fontSize: "16px",
              fontFamily: "myFourthFont",
            }}
            type="number"
            placeholder="Enter in number only"
            value={data.number_of_showrooms}
            onChange={(e) => handleInputChange(e, "number_of_showrooms")}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            No. of authorized service centers across India (optional)
          </Typography>
          <input
            style={{
              height: "56px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(47, 47, 47, 0.25)",
              outline: "none",
              fontSize: "16px",
              fontFamily: "myFourthFont",
            }}
            type="number"
            placeholder="Enter in number only"
            value={data.number_of_service_centers}
            onChange={(e) => handleInputChange(e, "number_of_service_centers")}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ServiceDetail;
