import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import BrandModalCard from "../../components/VehicleModalComponent/BrandModalCard";
import PriceRangeCard from "../../components/VehicleModalComponent/PriceRangeCard";
import AddVariantCard from "../../components/VehicleModalComponent/AddVariantCard";
import OverviewImageCard from "../../components/VehicleModalComponent/OverviewImageCard";
import StandOutFeature from "../../components/VehicleModalComponent/StandOutFeature";
import KeySpecs from "../../components/VehicleModalComponent/KeySpecs";
import PublishCard from "../../components/VehicleModalComponent/PublishCard";
import ScheduleCard from "../../components/VehicleModalComponent/ScheduleCard";
import TagsCard from "../../components/VehicleModalComponent/TagsCard";
import DeleteModalCard from "../../components/VehicleModalComponent/DeleteModalCard";

const AddTwoWheeler = () => {
  return (
    <Box>
      <Typography
        textAlign={"start"}
        color={"#1b1b1b"}
        mb={"16px"}
        fontFamily={"myFirstFont"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
      >
        Add new 2 wheeler
      </Typography>
      <Grid container columnSpacing={"24px"} rowSpacing={"24px"}>
        <Grid item md={9}>
          <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
            <BrandModalCard />
            <PriceRangeCard />
            <AddVariantCard />
            <OverviewImageCard />
            {/* <KeySpecs /> */}
            <StandOutFeature />
          </Box>
        </Grid>

        <Grid item md={3}>
          <PublishCard />
          <ScheduleCard />
          <TagsCard />
          <DeleteModalCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTwoWheeler;
