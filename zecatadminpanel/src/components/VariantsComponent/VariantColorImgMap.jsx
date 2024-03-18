import { Box, Typography } from "@mui/material";
import React from "react";

const VariantColorImgMap = ({
  item,
  index,
  handleEditData,
  setAllImages,
  allImages,
}) => {
  const handleDeleteImage = (img) => {
    const updatedImgs = allImages.filter((upd) => upd.img !== img);
    // console.log(updatedImgs);
    setAllImages(updatedImgs);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "36px",
      }}
    >
      <Box sx={{ display: "flex", width: "5%" }}>
        <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
          {index + 1}
        </Typography>
      </Box>
      <Box display={"flex"} width={"10%"}>
        <img
          src={item.img}
          style={{ maxWidth: "48px", width: "100%" }}
          alt=""
        />
      </Box>
      <Box display={"flex"} width={"35%"}>
        <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
          {item.color_name}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        width={"25%"}
        gap={"8px"}
        alignItems={"center"}
        textTransform={"uppercase"}
      >
        <Box
          sx={{
            background: item.color_code,
            width: "32px",
            height: "32px",
            borderRadius: "32px",
          }}
        ></Box>
        <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
          {item.color_code}
        </Typography>
      </Box>
      <Box display={"flex"} width={"25%"} gap={"4px"}>
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
          onClick={handleEditData}
        >
          <span
            style={{ color: "#2079FF", fontWeight: "300" }}
            class="material-symbols-outlined"
          >
            edit
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
        >
          <span
            style={{ color: "#2F2F2F", fontWeight: "300" }}
            class="material-symbols-outlined"
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
            class="material-symbols-outlined"
          >
            delete
          </span>
        </Box>
      </Box>
    </Box>
  );
};

export default VariantColorImgMap;
