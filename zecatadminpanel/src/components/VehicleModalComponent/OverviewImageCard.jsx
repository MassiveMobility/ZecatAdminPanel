import { Box, Typography } from "@mui/material";
import React from "react";

const OverviewImageCard = () => {
  const overviewImgData = [
    {
      id: "1",
      image: "/images/bikeimage.png",
      imageTag: ["Overview", "Exterior", "Interior", "Steering"],
    },
  ];
  return (
    <Box sx={{ padding: "24px", background: "#fff", borderRadius: "12px" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        Overview images
      </Typography>
      {/*------ heading ------*/}
      <Box
        sx={{
          padding: "8px",
          background: "#f6f8fc",
          marginTop: "16px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Box display={"flex"} width={"5%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            S.No
          </Typography>
        </Box>
        <Box display={"flex"} width={"25%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Image preview
          </Typography>
        </Box>
        <Box display={"flex"} width={"45%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Image Tag
          </Typography>
        </Box>
        <Box display={"flex"} width={"25%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Action
          </Typography>
        </Box>
      </Box>
      {/*------ data ------*/}
    </Box>
  );
};

export default OverviewImageCard;
