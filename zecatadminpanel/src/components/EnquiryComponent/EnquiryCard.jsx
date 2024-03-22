import { Box, Typography } from "@mui/material";
import React from "react";

const EnquiryCard = () => {
  return (
    <Box
      sx={{
        padding: { md: "24px", xs: "16px" },
        background: "#fff",
        borderRadius: "12px",
        width: "100%",
        overflow: "auto",
      }}
    >
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        User Details
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "8px",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid #DBDBDB",
              width: { md: "30%", xs: "50%" },
            }}
          >
            <Typography
              fontFamily={"myThirdFont"}
              textAlign={"start"}
              sx={{ textWrap: "nowrap" }}
            >
              User name
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid #DBDBDB",
              width: { md: "70%", xs: "50%" },
            }}
          >
            <Typography
              textAlign={"start"}
              fontSize={"16px"}
              fontFamily={"mySecondFont"}
            >
              Sahil
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid #DBDBDB",
              width: { md: "30%", xs: "50%" },
            }}
          >
            <Typography
              fontFamily={"myThirdFont"}
              textAlign={"start"}
              sx={{ textWrap: "nowrap" }}
            >
              Email
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "16px",
              border: "1px solid #DBDBDB",
              width: { md: "70%", xs: "50%" },
            }}
          >
            <Typography
              textAlign={"start"}
              fontSize={"16px"}
              fontFamily={"mySecondFont"}
            >
              sahil@gomassive.org
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EnquiryCard;
