import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import VariantNamePriceCard from "../../components/VariantsComponent/VariantNamePriceCard";
import VariantSpecFeature from "../../components/VariantsComponent/VariantSpecFeature";
import VariantColor from "../../components/VariantsComponent/VariantColor";
import VariantStatus from "../../components/VariantsComponent/VariantStatus";
import TagsCard from "../../components/VehicleModalComponent/TagsCard";
const AddVariant = () => {
  return (
    // variant
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
          <VariantStatus />
          <TagsCard variantTags={true} />
        </Grid>
      </Grid>
      <Box
        sx={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          sx={{
            background: "#2079FF",
            borderRadius: "8px",
            padding: "12px 24px",
            color: "#fff",
            maxWidth: "275px",
            width: "100%",
            fontFamily: "mySecondFont",
            ":hover": {
              background: "#2079FF",
            },
          }}
        >
          ADD VARIANT
        </Button>
      </Box>
    </Box>
  );
};

export default AddVariant;
