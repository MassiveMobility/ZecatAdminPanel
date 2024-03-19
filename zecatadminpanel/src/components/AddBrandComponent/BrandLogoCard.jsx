import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Dropbox from "../dropbox/Dropbox";
import { useDropzone } from "react-dropzone";

const BrandLogoCard = () => {
  const [files, setFiles] = useState([]);

  let { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
  });
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
        Brand logo
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <Typography
          textAlign={"start"}
          fontSize={"14px"}
          fontFamily={"myThirdFont"}
          color={"#2f2f2f"}
        >
          Brand primary logo
        </Typography>
        <Dropbox
          acceptedFiles={acceptedFiles}
          getInputProps={getInputProps}
          getRootProps={getRootProps}
          files={files}
          setFiles={setFiles}
        />
      </Box>
    </Box>
  );
};

export default BrandLogoCard;
