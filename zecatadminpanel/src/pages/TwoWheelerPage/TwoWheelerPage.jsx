import { Box, Button, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomTab from "../../components/CustomTabs/CustomTab";
import {
  addVehicleModeltabItems,
  allBrands,
  vehicleModelData,
  vehicleModelTable,
} from "../../constants/mapItems";
import SearchInput from "../../components/Inputs/SearchInput";
import CustomTable from "../../components/CustomTable/CustomTable";
import Sorting from "./Sorting";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../../redux/actions/getAllProducts";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands } from "../../redux/actions/getAllBrandsSlice";

const TwoWheelerPage = () => {
  const [selectBrand, setSelectBrand] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectBrand = (e) => {
    setSelectBrand(e.target.value);
  };

  const handleAddModel = () => {
    navigate(`add_model`);
  };

  const allProducts = useSelector((state) => state.allProducts.allProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(fetchBrands());
  }, []);

  const { allBrands } = useSelector((state) => state.allBrands);
  console.log(allBrands);

  const transformApiDataForTable = (apiData) => {
    return apiData.map((product) => ({
      model: product.model,
      // id: truncateId(product._id),
      id: product._id,
      brand: product.brand,
      variants: product.variants.map((item) => item.name + "," + " "),
      status: product.status,
      action: ["edit", "hide", "delete"],
    }));
  };

  // const truncateId = (id) => {
  //   return id.substring(0, 6).replace(/\W/g, "");
  // };

  const transformedData = transformApiDataForTable(allProducts);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
        fontFamily={"mySecondFont"}
      >
        2 Wheeler list
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
        <CustomTab item={addVehicleModeltabItems} />
        <Box
          mt={"24px"}
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
                {allBrands?.map((brand) => (
                  <MenuItem value={brand._id}>
                    <Typography p={"12px"}>{brand.name}</Typography>
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
              onClick={handleAddModel}
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
          <CustomTable
            document="product"
            headRow={vehicleModelTable}
            rowData={transformedData}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TwoWheelerPage;
