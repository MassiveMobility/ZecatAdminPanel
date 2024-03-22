import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import EnquiryCard from "../../components/EnquiryComponent/EnquiryCard";
import PublishCard from "../../components/VehicleModalComponent/PublishCard";
import EnquiryStatusCard from "../../components/EnquiryComponent/EnquiryStatusCard";

const EnquiryDetail = () => {
  return (
    <Box>
      <Typography
        textAlign={"start"}
        color={"#1b1b1b"}
        mb={"16px"}
        fontFamily={"myFirstFont"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
      >
        Enquiry ID - #4564154255444
      </Typography>
      <Grid
        container
        columnSpacing={"24px"}
        rowSpacing={"24px"}
        sx={{ display: { md: "flex", xs: "block" } }}
        flex={1}
      >
        <Grid item md={9}>
          <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
            <EnquiryCard />
          </Box>
        </Grid>

        <Grid item md={3}>
          <EnquiryStatusCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default EnquiryDetail;
