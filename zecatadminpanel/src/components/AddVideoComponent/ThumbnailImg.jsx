import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Dropbox from "../dropbox/Dropbox";
import { useDropzone } from "react-dropzone";

const ThumbnailImg = () => {
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
        width: "100%",
      }}
    >
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        Thumbnail image
      </Typography>
      <Dropbox
        acceptedFiles={acceptedFiles}
        getInputProps={getInputProps}
        getRootProps={getRootProps}
        files={files}
        setFiles={setFiles}
      />
    </Box>
  );
};

export default ThumbnailImg;
