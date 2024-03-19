import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import VariantColorImgMap from "./VariantColorImgMap";
import Dropbox from "../dropbox/Dropbox";

const VariantColor = () => {
  const [overviewImage, setOverviewImage] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [editData, setEditData] = useState(false);
  const [addData, setAddData] = useState(true);
  const [files, setFiles] = useState([]);

  const handleEditData = () => {
    setEditData(!editData);
  };
  const handleAddData = () => {
    setAddData(!addData);
  };

  let { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
  });

  const handleColorName = (event) => {
    setColorName(event.target.value);
  };

  const handleColorCode = (event) => {
    setColorCode(event.target.value);
  };

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
    setColorName(colorName);
    setColorCode(colorCode);
   
  };

  useEffect(() => {
    if (overviewImage && colorCode && colorName) {
      const obj = {
        img: overviewImage,
        color_name: colorName,
        color_code: colorCode,
      };
      setAllImages((prevImages) =>  [...prevImages, obj]);
      setOverviewImage("");
      setColorName("");
      setColorCode("");
      setAddData(false);
    }
  }, [overviewImage]);


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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          color={"#1b1b1b"}
          fontSize={"18px"}
          fontFamily={"mySecondFont"}
          textAlign={"start"}
        >
          Variant Colors
        </Typography>
        <Button
          sx={{
            padding: "8px 16px",
            border: "1px solid #2079FF",
            borderRadius: "8px",
            fontFamily: "mySecondFont",
            color: "#2079FF",
          }}
          onClick={handleAddData}
        >
          <span
            class="material-symbols-outlined"
            style={{ marginRight: "8px" }}
          >
            add
          </span>
          ADD NEW
        </Button>
      </Box>
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
        <Box display={"flex"} width={"10%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Image
          </Typography>
        </Box>
        <Box display={"flex"} width={"35%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Color name
          </Typography>
        </Box>
        <Box display={"flex"} width={"25%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Hex code
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
      {allImages.length > 0 ? (
        <>
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
                <VariantColorImgMap
                  item={item}
                  index={index}
                  handleEditData={handleEditData}
                  allImages={allImages}
                  setAllImages={setAllImages}
                />
              );
            })}
          </Box>
          {editData === true ? (
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
                <Grid item md={4}>
                  <Dropbox
                    acceptedFiles={acceptedFiles}
                    getInputProps={getInputProps}
                    getRootProps={getRootProps}
                    files={files}
                    setFiles={setFiles}
                  />
                
                </Grid>
                <Grid item md={8}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <Box>
                      <input
                        value={colorName}
                        onChange={handleColorName}
                        style={{
                          width: "100%",
                          height: "56px",
                          padding: "12px 16px",
                          borderRadius: "8px",
                          border: "1px solid rgba(47, 47, 47, 0.25)",
                          outline: "none",
                          fontSize: "16px",
                          fontFamily: "myFourthFont",
                        }}
                        type="text"
                        placeholder="Enter the color name here"
                      />
                    </Box>
                    <Box sx={{ display: "flex", gap: "8px" }}>
                      <input
                        value={colorCode}
                        onChange={handleColorCode}
                        style={{
                          width: "100%",
                          height: "56px",
                          padding: "12px 16px",
                          borderRadius: "8px",
                          border: "1px solid rgba(47, 47, 47, 0.25)",
                          outline: "none",
                          fontSize: "16px",
                          fontFamily: "myFourthFont",
                        }}
                        type="text"
                        placeholder="# Hex code"
                      />
                      <Button
                        sx={{
                          padding: "8px 16px",
                          border: "1px solid #2079FF",
                          borderRadius: "8px",
                          fontFamily: "mySecondFont",
                          color: "#2079FF",
                          maxWidth: "114px",
                          width: "100%",
                        }}
                        onClick={handleImages}
                      >
                        SAVE
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}

      {/* drag n drop section */}
      {addData === true ? (
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
            <Grid item md={4}>
              <Dropbox
                acceptedFiles={acceptedFiles}
                getInputProps={getInputProps}
                getRootProps={getRootProps}
                files={files}
                setFiles={setFiles}
              />
              
            </Grid>
            <Grid item md={8}>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Box>
                  <input
                    value={colorName}
                    onChange={handleColorName}
                    style={{
                      width: "100%",
                      height: "56px",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(47, 47, 47, 0.25)",
                      outline: "none",
                      fontSize: "16px",
                      fontFamily: "myFourthFont",
                    }}
                    type="text"
                    placeholder="Enter the color name here"
                  />
                </Box>
                <Box sx={{ display: "flex", gap: "8px" }}>
                  <input
                    value={colorCode}
                    onChange={handleColorCode}
                    style={{
                      width: "100%",
                      height: "56px",
                      padding: "12px 16px",
                      borderRadius: "8px",
                      border: "1px solid rgba(47, 47, 47, 0.25)",
                      outline: "none",
                      fontSize: "16px",
                      fontFamily: "myFourthFont",
                    }}
                    type="text"
                    placeholder="# Hex code"
                  />
                  <Button
                    sx={{
                      padding: "8px 16px",
                      border: "1px solid #2079FF",
                      borderRadius: "8px",
                      fontFamily: "mySecondFont",
                      color: "#2079FF",
                      maxWidth: "114px",
                      width: "100%",
                    }}
                    onClick={handleImages}
                  >
                    ADD
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};

export default VariantColor;
