import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  enquiryModelData,
  enquiryModelTable,
  enquiryOptions,
  enquiryTabItems,
} from "../../constants/mapItems";
import SearchInput from "../../components/Inputs/SearchInput";
import { useNavigate } from "react-router-dom";
import Sorting from "../TwoWheelerPage/Sorting";
import CustomTable from "../../components/CustomTable/CustomTable";
import CustomTab from "../../components/CustomTabs/CustomTab";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnquiries } from "../../redux/actions/getAllEnquiriesSlice";

const EnquiryPage = () => {
  const [selectBrand, setSelectBrand] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSelectBrand = (e) => {
    setSelectBrand(e.target.value);
  };

  const allEnquiries = useSelector((state) => state.allEnquiries.allEnquiries);

  useEffect(() => {
    dispatch(fetchEnquiries());
  }, []);

  const transformApiDataForTable = (apiData) => {
    return apiData.map((product) => ({
      _id: truncateId(product._id),
      name: product?.user?.name,
      phone_number: product?.user?.phone_number,
      created_at: product.createdAt,
      status: product.status,
      action: ["view", "delete"],
    }));
  };

  const truncateId = (id) => {
    return id.substring(0, 6).replace(/\W/g, "");
  };

  const transformedEnquiryData = transformApiDataForTable(allEnquiries);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
        fontFamily={"mySecondFont"}
      >
        Enquiries
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
        <CustomTab item={enquiryTabItems} />
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
                    All
                  </em>
                </MenuItem>
                {enquiryOptions.map((brand) => (
                  <MenuItem value={brand.label}>
                    <Typography p={"12px"}>{brand.label}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </Box>
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
          <CustomTable
            headRow={enquiryModelTable}
            rowData={transformedEnquiryData}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default EnquiryPage;
