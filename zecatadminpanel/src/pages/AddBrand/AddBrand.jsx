import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import BrandDetails from "../../components/AddBrandComponent/BrandDetails";
import ServiceDetail from "../../components/AddBrandComponent/ServiceDetail";
import ContactDetails from "../../components/AddBrandComponent/ContactDetails";
import BrandLogoCard from "../../components/AddBrandComponent/BrandLogoCard";
import { useNavigate } from "react-router-dom";

const AddBrand = () => {
  const navigate = useNavigate();

  const handleAddModal = () => {
    navigate("add_brand");
  };
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
            <BrandDetails />
            <ServiceDetail />
            <ContactDetails />
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
                onClick={handleAddModal}
              >
                ADD BRAND
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item md={3}>
          <BrandLogoCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddBrand;
