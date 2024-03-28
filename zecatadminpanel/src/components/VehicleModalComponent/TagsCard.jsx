import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const TagsCard = ({ variantTags = false }) => {
  const [selectedTags, setSelectedTags] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filters, setFilters] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setFilters([...filters, inputValue.trim()]);
      setInputValue("");
    }
  };
  console.log(inputValue);
  console.log(filters);

  const handleSelectTags = (tag) => {
    if (selectedTags.includes(tag)) {
      const tags = selectedTags.filter((tg) => tg !== tag);
      setSelectedTags([...tags]);
      return;
    }
    setSelectedTags([...selectedTags, tag]);
  };

  const handleDeleteTag = (tag) => {
    setFilters(filters.filter((item) => item !== tag));
    setSelectedTags(selectedTags.filter((item) => item !== tag));
  };

  return (
    <Box
      sx={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        marginTop: "24px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography
          color={"#1b1b1b"}
          fontSize={"18px"}
          fontFamily={"mySecondFont"}
          textAlign={"start"}
        >
          {variantTags ? "Variant Tags" : "Product Search Tags"}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              style={{
                width: "100%",
                height: "40px",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                fontSize: "16px",
                fontFamily: "myFourthFont",
              }}
              type="text"
              placeholder="Enter the model name here"
              value={inputValue}
              onChange={handleInputChange}
            />
            <Button
              sx={{
                border: "1px solid #2079FF",
                borderRadius: "8px",
                fontFamily: "mySecondFont",
              }}
              onClick={handleAddTag}
            >
              ADD
            </Button>
          </Box>
          <Typography
            color={"#727272"}
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Separate tags with commas
          </Typography>
          <Box display={"flex"} gap={"8px"} flexWrap={"wrap"}>
            {filters.map((item) => (
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => handleSelectTags(item)}
                display={"flex"}
                gap={"4px"}
                alignItems={"center"}
                p={"4px 16px"}
                borderRadius={"32px"}
                bgcolor={
                  selectedTags.includes(item)
                    ? "rgba(132, 171, 231, 0.10);"
                    : "rgba(47, 47, 47, 0.10);"
                }
                fontFamily={"myThirdFont"}
                fontSize={"14px"}
                color={"#000"}
                mb={"8px !important"}
              >
                {item}

                {selectedTags.includes(item) ? (
                  <span
                    style={{ fontWeight: "300", fontSize: "20px" }}
                    className="material-symbols-outlined"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteTag(item);
                    }}
                  >
                    cancel
                  </span>
                ) : null}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TagsCard;
