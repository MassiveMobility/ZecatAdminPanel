import { Box, Select, Typography, MenuItem, Grid, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import ImagesMap from "./ImagesMap";

const OverviewImageCard = (props) => {
  const [overviewImage, setOverviewImage] = useState("");
  const [allImages, setAllImages] = useState([]);
  const [links, setLinks] = useState("");

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
    // console.log(links);
  };

  const removeFiles = () => {
    acceptedFiles = [];
    newFiles = acceptedFiles;
    console.log(newFiles);
  };

  useEffect(() => {
    if (overviewImage || links) {
      const obj = {
        img: overviewImage || links,
      };
      console.log(obj);
      setAllImages([...allImages, obj]);
      setOverviewImage("");
      setLinks("");
      removeFiles();
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
        Overview Images
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
      {allImages.length > 0 ? (
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
              />
            );
          })}
        </Box>
      ) : (
        ""
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
          <Grid item md={4}>
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
          </Grid>
          <Grid item md={8}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <Box>
                <textarea
                  value={links}
                  onChange={(e) => setLinks(e.target.value)}
                  style={{
                    resize: "none",
                    width: "100%",
                    height: "120px",
                    borderRadius: "8px",
                    border: "1px solid #C4C4C4",
                    outline: "none",
                    padding: "12px",
                  }}
                  placeholder="Add image links here"
                  type="text"
                />
              </Box>
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
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default OverviewImageCard;
