import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";

const TagsCard = ({name= "", tags = [], setTags, }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleSelectTags = (tag) => {
    if (tags.includes(tag)) {
      const tags = tags.filter((tg) => tg !== tag);
      setTags([...tags]);
      return;
    }
    setTags([...tags, tag]);
  };

  const handleDeleteTag = (tag) => {
    setTags(tags.filter((item) => item !== tag));
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
          {`${name} Tags`}
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
              disabled={tags.length > 4 ? true : false}
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
            {tags.map((item) => (
              <Typography
                sx={{ cursor: "pointer" }}
                onClick={() => handleSelectTags(item)}
                display={"flex"}
                gap={"4px"}
                alignItems={"center"}
                p={"4px 16px"}
                borderRadius={"32px"}
                bgcolor={
                  tags.includes(item)
                    ? "rgba(132, 171, 231, 0.10);"
                    : "rgba(47, 47, 47, 0.10);"
                }
                fontFamily={"myThirdFont"}
                fontSize={"14px"}
                color={"#000"}
                mb={"8px !important"}
              >
                {item}

                {tags.includes(item) ? (
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
