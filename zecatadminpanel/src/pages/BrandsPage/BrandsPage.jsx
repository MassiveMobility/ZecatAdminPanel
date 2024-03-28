import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchInput from "../../components/Inputs/SearchInput";
import Sorting from "../TwoWheelerPage/Sorting";
import { allBrands, brandModelData, brandModelTable, vehicleModelData } from "../../constants/mapItems";
import CustomTable from "../../components/CustomTable/CustomTable";
import { useDispatch } from "react-redux";
import { fetchBrands } from "../../redux/actions/getAllBrandsSlice";

const BrandsPage = () => {
  const [selectBrand, setSelectBrand] = useState("");
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSelectBrand = (e) => {
    setSelectBrand(e.target.value);
  };


  const handleAddBrand= () => {
    navigate(`add_brand`)
  }

  useEffect(() => {
    dispatch(fetchBrands())
  }, [])
  return  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
  <Typography
    color={"#1b1b1b"}
    fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
    fontFamily={"mySecondFont"}
  >
   Brands
  </Typography>
  <Box
    sx={{
      padding: { md: "24px", xs: "16px" },
      background: "#fff",
      borderRadius: "12px",
      width: "100%",
      marginTop: "16px",
      overflow: "auto",
    }}
  >
    <Box
      mt={"12px"}
      display={"flex"}
      alignItems={"center"}
      gap={"12px"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={"12px"}
        flexWrap={"wrap"}
        width={{ xs: "100%", md: "unset" }}
      >
        {/*---------------------------------------- SEARCH INPUT--------------------------------------------- */}
        <Box width={{ xs: "100%", md: "400px" }}>
          <SearchInput />
        </Box>
        {/*---------------------------------------- SORTING --------------------------------------------- */}

        <Box>
          <Sorting />
        </Box>

        {/*---------------------------------------- SELECT ALL BRANDS--------------------------------------------- */}
        <Box width={{ xs: "100%", md: "240px" }}>
          <Select
            value={selectBrand}
            onChange={handleSelectBrand}
            sx={{
              width: "100%",
              p: "8px 16px",
              height: "40px",
              borderRadius: "8px",

              "& .MuiSelect-select": {
                textAlign: "start",
                padding: "0px 0px",
              },
            }}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              <em
                style={{
                  fontStyle: "normal",
                  fontFamily: "mySecondFont",
                  fontSize: "14px",
                  textAlign: "start",
                }}
              >
                All Brands
              </em>
            </MenuItem>
            {allBrands.map((brand) => (
              <MenuItem value={brand.label}>
                <Typography p={"12px"}>{brand.label}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Box>
      </Box>
      {/*---------------------------------------- ADD NEW BUTTON--------------------------------------------- */}

      <Box>
        <Button
          sx={{
            padding: "8px 16px",
            border: "1px solid #2079FF",
            borderRadius: "8px",
            fontFamily: "mySecondFont",
            color: "#2079FF",
          }}
          onClick={handleAddBrand}
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
    </Box>

    {/*---------------------------------------- TABLE --------------------------------------------- */}
    <Box>
      <Typography
        mt={"12px"}
        mb={"8px !important"}
        color={"#2f2f2f"}
        fontSize={"14px"}
        fontFamily={"myFourthFont"}
        textAlign={"left"}
      >
        Showing 1-10 of 80 vehicle models
      </Typography>
      <CustomTable headRow={brandModelTable} rowData={brandModelData} />
    </Box>
  
  </Box>
</Box>
};

export default BrandsPage;
