import { Box, Typography } from "@mui/material";
import React from "react";

const SeoSettings = () => {
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
        SEO settings
      </Typography>
      <Typography
        fontSize={"14px"}
        fontFamily={"myThirdFont"}
        textAlign={"start"}
      >
        Search Engine Results Page preview.
      </Typography>
      <Box sx={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span
          style={{ fontWeight: "300" }}
          className="material-symbols-outlined"
        >
          desktop_windows
        </span>
        <span
          style={{ fontWeight: "300" }}
          className="material-symbols-outlined"
        >
          phone_iphone
        </span>
      </Box>
      <Box
        sx={{
          border: "1px solid rgba(47, 47, 47, 0.25)",
          padding: "16px",
          borderRadius: "8px",
          width: "70%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span className="material-symbols-outlined">globe</span>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography textAlign={"start"} color={"2f2f2f"} fontSize={"14px"}>
              zecat.in
            </Typography>
            <Typography textAlign={"start"} fontSize={"12px"} color={"#727272"}>
              https://zecat.in
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            marginTop: "8px",
          }}
        >
          <Typography
            textAlign={"start"}
            color={"#2079FF"}
            fontFamily={"myThirdFont"}
            fontSize={"clamp(1rem, 0.95rem + 0.25vw, 1.25rem)"}
          >
            Top 10 Electric Vehicles In India - Zecat
          </Typography>
          <Typography
            textAlign={"start"}
            color={"#2f2f2f"}
            fontFamily={"myFourthFont"}
          >
            Lorem ipsum dolor sit amet consectetur. Habitant et nec nulla
            viverra consectetur eu in nunc lectus.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
            marginTop: "16px",
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Post meta title
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
            type="text"
            placeholder="Enter the meta title here"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
            marginTop: "16px",
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Meta Description
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
            type="text"
            placeholder="Enter the meta description here"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SeoSettings;
