import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sorting from "../TwoWheelerPage/Sorting";
import CustomTable from "../../components/CustomTable/CustomTable";
import { userModelData, userModelTable } from "../../constants/mapItems";
import SearchInput from "../../components/Inputs/SearchInput";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/actions/getAllUsersSlice";

const AllUsers = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allUsers = useSelector((state) => state.allUsers.allUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const transformApiDataForTable = (apiData) => {
    return apiData.map((product) => ({
      name: product.name,
      phone_number: product.phone_number,
      email: product.email,
      _id: truncateId(product._id),
      created_at: product.createdAt,
      action: ["delete"],
    }));
  };

  const truncateId = (id) => {
    return id.substring(0, 6).replace(/\W/g, "");
  };

  const transformedUserData = transformApiDataForTable(allUsers);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
        fontFamily={"mySecondFont"}
      >
        User list
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
          <CustomTable headRow={userModelTable} rowData={transformedUserData} />
        </Box>
      </Box>
    </Box>
  );
};

export default AllUsers;
