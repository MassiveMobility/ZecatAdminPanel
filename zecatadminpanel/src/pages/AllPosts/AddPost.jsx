import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import NewPost from "../../components/AllPostComponents/NewPost";
import SeoSettings from "../../components/AllPostComponents/SeoSettings";
import PublishCard from "../../components/VehicleModalComponent/PublishCard";
import FeatureCard from "../../components/AllPostComponents/FeatureCard";
import VideoCategories from "../../components/AddVideoComponent/VideoCategories";
import TagsCard from "../../components/VehicleModalComponent/TagsCard";

const AddPost = () => {
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
            <NewPost />
            <SeoSettings />
          </Box>
        </Grid>

        <Grid item md={3}>
          <PublishCard />
          <FeatureCard />
          <VideoCategories />
          <TagsCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddPost;
