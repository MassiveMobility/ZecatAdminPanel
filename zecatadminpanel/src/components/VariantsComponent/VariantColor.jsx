import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import VariantColorImgMap from "./VariantColorImgMap";

const VariantColor = () => {
  const [overviewImage, setOverviewImage] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [links, setLinks] = useState("");
  const [colorName, setColorName] = useState("");
  const [colorCode, setColorCode] = useState("");
  const [editData, setEditData] = useState(false);
  const [addData, setAddData] = useState(true);

  const handleEditData = () => {
    setEditData(!editData);
  };
  const handleAddData = () => {
    setAddData(!addData);
  };

  let { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: true,
  });

  let newFiles = acceptedFiles.map((file) => {
    return (
      <li key={file.path}>
        {file.path} - {file.size}
      </li>
    );
  });

  const handleColorName = (event) => {
    setColorName(event.target.value);
  };

  const handleColorCode = (event) => {
    setColorCode(event.target.value);
  };

  const handleImages = () => {
    let imageUrl;
    const files = acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        imageUrl = reader.result;
        setOverviewImage(imageUrl);
      };
    });

    if (links) {
      imageUrl = links;
      setOverviewImage(imageUrl);
    }
  };

  useEffect(() => {
    if (overviewImage || links) {
      const obj = {
        img: overviewImage || links,
        color_name: colorName,
        color_code: colorCode,
      };
      console.log(obj);
      setAllImages([...allImages, obj]);
      setColorName(obj.color_name);
      setColorCode(obj.color_code);
      setOverviewImage("");
      setColorName("");
      setColorCode("");
      setAddData(false);
      setLinks("");
    }
  }, [overviewImage, colorName, colorCode]);

  console.log(allImages);

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
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
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
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
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
