import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import NewVideo from "../../components/AddVideoComponent/NewVideo";
import ThumbnailImg from "../../components/AddVideoComponent/ThumbnailImg";
import VideoCategories from "../../components/AddVideoComponent/VideoCategories";
import PublishCard from "../../components/VehicleModalComponent/PublishCard";
import TagsCard from "../../components/VehicleModalComponent/TagsCard";

const AddVideos = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
        fontFamily={"mySecondFont"}
        mb={"16px"}
      >
        Add new video
      </Typography>
      <Grid container columnSpacing={"24px"} rowSpacing={"24px"}>
        <Grid item md={9}>
          <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
            <NewVideo />
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                textWrap: "wrap",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              <ThumbnailImg />
              <VideoCategories mt={true}/>
            </Box>
          </Box>
        </Grid>

        <Grid item md={3}>
          <PublishCard />
          <TagsCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddVideos;
