import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

const ImagesMap = ({ item, id, setAllImages, allImages, features }) => {
  const imageTag = ["Overview", "Exterior", "Interior", "Steering"];
  const [tag, setTag] = useState(imageTag[0]);
  const [feat, setFeat] = useState(features);

  const handleChange = (event) => {
    setTag(event.target.value);
  };


  const handleDeleteImage = (img) => {
    const updatedImgs = allImages.filter((upd) => upd.img !== img);
    setAllImages(updatedImgs);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Box sx={{ display: "flex", width: "5%" }}>
        <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
          {id + 1}
        </Typography>
      </Box>
      <Box display={"flex"} width={"25%"}>
        <img
          style={{
            width: "100%",
            maxWidth: "128px",
            height: "64px",
            objectFit: "cover",
          }}
          src={item.img}
          alt=""
        />
      </Box>
      <Box display={"flex"} width={"40%"}>

        {features ?
       <input
       value={feat}
       onChange={(e) => setFeat(e.target.value)}
        style={{
          width: "100%",
          padding: "12px 16px",
          borderRadius: "8px",
          border: "1px solid rgba(47, 47, 47, 0.25)",
          outline: "none",
          height: "64px",
        }}
        type="text"
      /> 
      :
        <Select
          fullWidth
          value={tag}
          onChange={handleChange}
          displayEmpty
          inputProps={{ "aria-label": "Without label" }}
          sx={{
            borderRadius: "8px",
            height: "40px",
            "& .MuiSelect-select": {
              textAlign: "start",
            },
          }}
        >
         
          {imageTag.map((newitem, index) => {
            return (
              <MenuItem value={newitem} key={index}>
                <Typography p={"12px"}>{newitem}</Typography>
              </MenuItem>
            );
          })}
        </Select>
           }

      </Box>
      <Box
        display={"flex"}
        flex={1}
        gap={"4px"}
        width={"25%"}
        marginLeft={"28px"}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            padding: "4px",
            border: "1px solid #D0D0D0",
            cursor: "pointer",
          }}
        >
          <span
            style={{ color: "#2F2F2F", fontWeight: "300" }}
            className="material-symbols-outlined"
          >
            visibility
          </span>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "4px",
            padding: "4px",
            border: "1px solid #D0D0D0",
            cursor: "pointer",
          }}
          onClick={() => handleDeleteImage(item.img)}
        >
          <span
            style={{ color: "#700000", fontWeight: "300" }}
            className="material-symbols-outlined"
          >
            delete
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default ImagesMap;
