import { Box, Typography } from "@mui/material";
import React from "react";

const NewVideo = ({ data, setData }) => {

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setData({
      ...data,
      [fieldName]: value,
    });
  };
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
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
            Video title
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
            placeholder="Enter Video title here"
            value={data.title}
            onChange={(e) => handleInputChange(e, "title")}
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
            Video URL link
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
            placeholder="Enter url here"
            value={data.url}
            onChange={(e) => handleInputChange(e, "url")}
          />
        </Box>
      </Box>
    </Box>
  );
};
export default NewVideo;
