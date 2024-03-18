import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropbox = () => {
  const [files, setFiles] = useState([]);
  let { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
  });

  let newFiles = files?.map((file) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size}
      </li>
    );
  });
  useEffect(() => {
    setFiles(acceptedFiles);
  }, [acceptedFiles]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Box
        sx={{
          // maxWidth: "240px",
          width: "100%",
          height: "160px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px dashed #c7ddff",
          borderRadius: "4px",
          padding: "32px 18px",
          cursor: "pointer",
        }}
      >
        <section className="container">
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <span
              style={{
                fontSize: "48px",
                color: "rgba(32, 121, 255, 0.75)",
                fontWeight: "300",
              }}
              className="material-symbols-outlined"
            >
              cloud_upload
            </span>
            <Typography
              fontSize={"14px"}
              fontFamily={"myThirdFont"}
              color={"#2f2f2f"}
              sx={{ textWrap: "nowrap" }}
            >
              Drop your images here or select
            </Typography>
            <Typography
              color={"#2079FF"}
              fontSize={"14px"}
              fontFamily={"myThirdFont"}
              sx={{ textDecoration: "underline" }}
            >
              click to browse
            </Typography>
          </div>
        </section>
      </Box>
      <Box>
        <aside>
          <ul style={{ textAlign: "left" }}>{newFiles}</ul>
        </aside>
      </Box>
    </Box>
  );
};

export default Dropbox;
