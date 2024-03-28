import { Box, Select, Typography, MenuItem, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImagesMap from "./ImagesMap";
import Dropbox from "../dropbox/Dropbox";

const OverviewImageCard = ({ standOutFeatures = false }) => {
  const [overviewImage, setOverviewImage] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [features, setFeatures] = useState("");
  const [files, setFiles] = useState([]);

  let { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
  });

  const handleImages = () => {
    if (files) {
      files.forEach((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const imageUrl = reader.result;
          setOverviewImage((prevImages) => [...prevImages, imageUrl]);
        };
      });
    }
  };

  useEffect(() => {
    if (overviewImage.length > 0) {
      const updatedAllImages = [];

      for (let i = 0; i < overviewImage.length; i++) {
        const obj = {
          img: overviewImage[i],
        };

        updatedAllImages.push(obj);
      }
      setAllImages((prevImages) => [...prevImages, ...updatedAllImages]);
      setOverviewImage([]);
      setFiles([]);
    }
  }, [overviewImage]);

  return (
    <Box sx={{ padding: "24px", background: "#fff", borderRadius: "12px" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        {standOutFeatures ? "Standout features" : "Overview Images"}
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

      {allImages.length > 0 && (
        <Box
          sx={{
            marginTop: "18px",
            padding: "8px 8px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            overflow: "auto",
          }}
        >
          {allImages.map((item, index) => {
            return (
              <ImagesMap
                key={index}
                item={item}
                id={index}
                setAllImages={setAllImages}
                allImages={allImages}
                features={features}
              />
            );
          })}
        </Box>
      )}

      {/* drag n drop section */}
      <Box
        sx={{
          marginTop: "24px",
        }}
      >
        <Grid
          container
          columnSpacing={"40px"}
          sx={{ display: { xs: "block", md: "flex" } }}
        >
          <Grid item md={standOutFeatures ? 4 : 12}>
            <Dropbox
              acceptedFiles={acceptedFiles}
              getInputProps={getInputProps}
              getRootProps={getRootProps}
              files={files}
              setFiles={setFiles}
            />
          </Grid>
          {standOutFeatures && (
            <Grid item md={8}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Box>
                  {standOutFeatures ? (
                    <input
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "8px",
                        border: "1px solid rgba(47, 47, 47, 0.25)",
                        outline: "none",
                        height: "64px",
                      }}
                      placeholder="Enter Input here"
                      type="text"
                    />
                  ) : (
                    ""
                  )}
                </Box>
                <Box>
                  <textarea
                    value={features}
                    onChange={(e) => setFeatures(e.target.value)}
                    style={{
                      resize: "none",
                      width: "100%",
                      height: "120px",
                      borderRadius: "8px",
                      border: "1px solid #C4C4C4",
                      outline: "none",
                      padding: "12px",
                    }}
                    placeholder="Enter Standout Features here"
                    type="text"
                  />
                </Box>
              </Box>
            </Grid>
          )}
        </Grid>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            sx={{
              padding: "4px 16px",
              border: "1px solid #2079FF",
              borderRadius: "8px",
              fontFamily: "mySecondFont",
              color: "#2079FF",
            }}
            onClick={handleImages}
          >
            <span
              class="material-symbols-outlined"
              style={{ marginRight: "8px" }}
            >
              add
            </span>
            ADD
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default OverviewImageCard;
