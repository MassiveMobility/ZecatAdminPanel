import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../redux/actions/getAllBrandsSlice";

const BrandModalCard = ({model, selectedBrand, setModel, setSelectedBrand}) => {
  const dispatch = useDispatch();
  const { allBrands } = useSelector((state) => state.allBrands);
  const [availableBrands, setAvailableBrands] = useState([]);
  

  const handleChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  useEffect(() => {
    if (allBrands) {
      const brands = allBrands.map((brand) => brand.name);
      setAvailableBrands(brands);
    }
  }, [allBrands]);
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
        Brand & Modal
      </Typography>
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
            Brand
          </Typography>

          <Select
            fullWidth
            value={selectedBrand}
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
                Select the Brand
              </em>
            </MenuItem>
            {availableBrands.map((brand) => (
              <MenuItem style={{textTransform: 'capitalize'}} key={brand} value={brand}>
                {brand}
              </MenuItem>
            ))}
          </Select>

          <Typography
            mt={"8px"}
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myFourthFont"}
            textAlign={"left"}
          >
            If your desired brand is not here, add first in brand section
          </Typography>
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
            Model Name
          </Typography>
          <input
          value={model}
          onChange={(e) => setModel(e.target.value)}
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
            placeholder="Enter the model name here"
          />
          <Typography
            mt={"8px"}
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myFourthFont"}
            textAlign={"left"}
            visibility={"hidden"}
          >
            If your desired brand is not here, add first in brand section
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandModalCard;
