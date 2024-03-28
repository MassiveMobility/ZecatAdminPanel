import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";

const BrandDetails = () => {
  const [age, setAge] = useState("");

  const [brandDetails, setBrandDetails] = useState({
    name: "",
    category: "",
    established_year: "",
    description: "",
  });

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setBrandDetails({
      ...brandDetails,
      [fieldName]: value,
    });
  };
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
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        Brand details
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          flex: 1,
        }}
      >
        <Typography
          textAlign={"start"}
          fontSize={"14px"}
          fontFamily={"myThirdFont"}
          color={"#2f2f2f"}
        >
          Brand name
        </Typography>

        <input
          style={{
            height: "56px",
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid rgba(47, 47, 47, 0.25)",
            outline: "none",
            fontSize: "16px",
            fontFamily: "myFourthFont",
          }}
          type="text"
          placeholder="Enter the Brand name here"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Category
          </Typography>

          <Select
            fullWidth
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              borderRadius: "8px",
              "& .MuiSelect-select": {
                textAlign: "start",
              },
            }}
          >
            <MenuItem value="">
              <em style={{ fontStyle: "normal", color: "#7a7a7a" }}>
                Select vehicle category
              </em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          <Typography
            textAlign={"start"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            color={"#2f2f2f"}
          >
            Brand established year
          </Typography>
          <Select
            fullWidth
            value={age}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              borderRadius: "8px",
              "& .MuiSelect-select": {
                textAlign: "start",
              },
            }}
          >
            <MenuItem value="">
              <em style={{ fontStyle: "normal", color: "#7a7a7a" }}>
                Select the year
              </em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "4px",
          flex: 1,
        }}
      >
        <Typography
          textAlign={"start"}
          fontSize={"14px"}
          fontFamily={"myThirdFont"}
          color={"#2f2f2f"}
        >
          Brand Description
        </Typography>

        <textarea
          style={{
            padding: "12px 16px",
            borderRadius: "8px",
            border: "1px solid rgba(47, 47, 47, 0.25)",
            outline: "none",
            fontSize: "16px",
            fontFamily: "myFourthFont",
            resize: "none",
            height: "240px",
          }}
          type="text"
          placeholder="Enter the Brand name here"
        />
      </Box>
    </Box>
  );
};

export default BrandDetails;
