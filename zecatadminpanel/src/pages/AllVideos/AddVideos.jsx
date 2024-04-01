import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import NewVideo from "../../components/AddVideoComponent/NewVideo";
import ThumbnailImg from "../../components/AddVideoComponent/ThumbnailImg";
import VideoCategories from "../../components/AddVideoComponent/VideoCategories";
import PublishCard from "../../components/VehicleModalComponent/PublishCard";
import TagsCard from "../../components/VehicleModalComponent/TagsCard";
import { createVideo } from "../../redux/actions/createVideoSlice";
import { useDispatch } from "react-redux";

const AddVideos = () => {
  const dispatch = useDispatch()
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("publish");
  const [publicMode, setPublicMode] = useState(true);
  const [videoData, setVideoData] = useState({
    title: "",
    url: "",
    tags: [],
    public: publicMode,
    status: status,
  });

  useEffect(() => {
    setVideoData({
      ...videoData,
      ["tags"]: tags,
    });
  }, [tags]);

  useEffect(() => {
    setVideoData({
      ...videoData,
      ["status"]: status,
    });
  }, [status]);

  useEffect(() => {
    setVideoData({
      ...videoData,
      ["public"]: publicMode,
    });
  }, [publicMode]);

  useEffect(() => {
    console.log("video", videoData);
  }, [videoData]);


  const addVideoHandler = () => {
    dispatch(createVideo(videoData))
    setVideoData({
      title: "",
      url: "",
      tags: [],
      public: publicMode,
      status: status,
    })
  }


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
            <NewVideo data={videoData} setData={setVideoData} />
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                textWrap: "wrap",
                flexDirection: { md: "row", xs: "column" },
              }}
            >
              {/* <ThumbnailImg /> */}
              {/* <VideoCategories mt={true}/> */}
            </Box>
          </Box>
          <Box display={"flex"} justifyContent={"flex-end"}>
            <Button
              onClick={addVideoHandler}
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
              ADD VIDEO
            </Button>
          </Box>
        </Grid>

        <Grid item md={3}>
          <PublishCard
            selectedStatus={status}
            setSelectedStatus={setStatus}
            publicMode={publicMode}
            setPublicMode={setPublicMode}
          />
          <TagsCard name="Video" tags={tags} setTags={setTags} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddVideos;
