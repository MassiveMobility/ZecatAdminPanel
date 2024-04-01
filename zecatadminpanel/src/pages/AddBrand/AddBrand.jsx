import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BrandDetails from "../../components/AddBrandComponent/BrandDetails";
import ServiceDetail from "../../components/AddBrandComponent/ServiceDetail";
import ContactDetails from "../../components/AddBrandComponent/ContactDetails";
import BrandLogoCard from "../../components/AddBrandComponent/BrandLogoCard";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBrand } from "../../redux/actions/createBrandSlice";

const AddBrand = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [brandData, setBrandData] = useState({
    name: "",
    category: "",
    established_year: "",
    description: "",
    number_of_showrooms: null,
    number_of_service_centers: null,
    website: "",
    phone_one: "",
    phone_two: "",
    email_one: "",
    email_two: "",
    logo: null,
  });

  const handleAddBrand = () => {
    dispatch(createBrand(brandData));
    setBrandData({
      name: "",
      category: "",
      established_year: "",
      description: "",
      number_of_showrooms: null,
      number_of_service_centers: null,
      website: "",
      phone_one: "",
      phone_two: "",
      email_one: "",
      email_two: "",
      logo: null,
    });
  };

  useEffect(() => {
    console.log("brand", brandData);
  }, [brandData]);
  return (
    <Box>
      <Typography
        textAlign={"start"}
        color={"#1b1b1b"}
        mb={"16px"}
        fontFamily={"myFirstFont"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
      >
        Add new brand
      </Typography>
      <Grid container columnSpacing={"24px"} rowSpacing={"24px"}>
        <Grid item md={9}>
          <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
            <BrandDetails data={brandData} setData={setBrandData} />
            <ServiceDetail data={brandData} setData={setBrandData} />
            <ContactDetails data={brandData} setData={setBrandData} />
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              <Button
                sx={{
                  padding: "12px 24px",
                  background: "#2079FF",
                  borderRadius: "8px",
                  maxWidth: "275px",
                  width: "100%",
                  color: "#fff",
                  fontSize: "16px",
                  fontFamily: "mySecondFont",
                  ":hover": {
                    background: "#2079FF",
                  },
                }}
                onClick={handleAddBrand}
              >
                ADD BRAND
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={3}>
          <BrandLogoCard data={brandData} setData={setBrandData} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddBrand;
