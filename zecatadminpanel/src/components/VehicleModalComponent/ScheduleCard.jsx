import { Box, Typography } from "@mui/material";
import React from "react";

const ScheduleCard = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        marginTop: "24px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography
          color={"#1b1b1b"}
          fontSize={"18px"}
          fontFamily={"mySecondFont"}
          textAlign={"start"}
        >
          Publish
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"mySecondFont"}
            textAlign={"start"}
          >
            Publish date and time
          </Typography>
          <input
            style={{
              height: "48px",
              padding: "12px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(47, 47, 47, 0.25)",
              outline: "none",
              fontSize: "16px",
              fontFamily: "myFourthFont",
            }}
            type="text"
            placeholder="Enter the model name here"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ScheduleCard;
