import { Box, Typography } from "@mui/material";
import React from "react";
import Checkbox from "@mui/material/Checkbox";

const VideoCategories = ({mt=false}) => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const categoriesData = [
    {
      title: "Ather scooter",
    },
    {
      title: "Ather scooter",
    },
    {
      title: "Ather scooter",
    },
    {
      title: "Ather scooter",
    },
    {
      title: "Ather scooter",
    },
    {
      title: "Ather scooter",
    },
    {
      title: "Ather scooter",
    },
  ];
  return (
    <Box
      sx={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        marginTop: mt ? " " : "24px",
      }}
    >
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        Categories
      </Typography>
      <Box
        sx={{
          maxHeight: "180px",
          overflowY: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderTop: "1px solid #cbcbcb",
          }}
        >
          {categoriesData.map((item) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  gap: "4px",
                  alignItems: "center",
                  overflow: "auto",
                }}
              >
                <Checkbox {...label} />
                <Typography
                  fontSize={"14px"}
                  color={"#000"}
                  fontFamily={"myThirdFont"}
                >
                  {item.title}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default VideoCategories;
