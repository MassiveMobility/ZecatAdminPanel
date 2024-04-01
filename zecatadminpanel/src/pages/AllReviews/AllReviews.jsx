import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import SearchInput from "../../components/Inputs/SearchInput";
import Sorting from "../TwoWheelerPage/Sorting";
import CustomTable from "../../components/CustomTable/CustomTable";
import { reviewsModelData, reviewsModelTable } from "../../constants/mapItems";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../redux/actions/getAllReviewsSlice";

const AllReviews = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allReviews = useSelector((state) => state.allReviews.allReviews);

  useEffect(() => {
    dispatch(fetchReviews());
  }, []);

  const transformApiDataForTable = (apiData) => {
    return apiData.map((product) => ({
      product: product.name,
      _id: truncateId(product?.user?._id),
      review: product.title,
      created_at: product.createdAt,
      action: ["view", "delete"],
    }));
  };

  const truncateId = (id) => {
    if (id) {
      return id.substring(0, 6).replace(/\W/g, "");
    }
    return "";
  };

  const transformedReviewData = transformApiDataForTable(allReviews);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
        fontFamily={"mySecondFont"}
      >
        Manage Reviews
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
            {/* <Box width={{ xs: "100%", md: "240px" }}>
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
          </Box> */}
          </Box>
          {/*---------------------------------------- ADD NEW BUTTON--------------------------------------------- */}
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
          <CustomTable
            headRow={reviewsModelTable}
            rowData={transformedReviewData}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AllReviews;
