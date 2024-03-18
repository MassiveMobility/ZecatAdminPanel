import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import VariantNamePriceCard from "../../components/VariantsComponent/VariantNamePriceCard";
import VariantSpecFeature from "../../components/VariantsComponent/VariantSpecFeature";
import VariantColor from "../../components/VariantsComponent/VariantColor";
const AddVariant = () => {
  return (
    <Box>
      <Typography
        textAlign={"start"}
        color={"#1b1b1b"}
        mb={"16px"}
        fontFamily={"myFirstFont"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
      >
        Add variant 1
      </Typography>
      <Grid container columnSpacing={"24px"} rowSpacing={"24px"}>
        <Grid item md={9}>
          <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
            <VariantNamePriceCard />
            <VariantSpecFeature />
            <VariantColor />
          </Box>
        </Grid>

        <Grid item md={3}>
          Right
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddVariant;
