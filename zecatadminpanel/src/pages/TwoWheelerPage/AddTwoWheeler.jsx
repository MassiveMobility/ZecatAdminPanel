import { Box, Button, CircularProgress, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  setImageDetails,
  setProductDetails,
} from "../../redux/actions/createProductSlice";
import { useNavigate } from "react-router-dom";
import useScrollToTop from "../../Hooks/useScrollToTop";

const AddTwoWheeler = () => {
  const { productDetails, loading } = useSelector(
    (state) => state.createProduct
  );
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [lower_price_range, setLowPrice] = useState("");
  const [high_price_range, setHighPrice] = useState("");
  const [overview_image, setOverviewImage] = useState([]);
  const [exterior_image, setExteriorImage] = useState([]);
  const [interior_image, setInteriorImage] = useState([]);
  const [steering_image, setSteeringImage] = useState([]);
  const [standout_image, setStandOutImage] = useState([]);
  const [images, setImages] = useState([]);
  const [featImgs, setFeatImgs] = useState([]);
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState("publish");
  const [publicMode, setPublicMode] = useState(true);
  const [stand_out_features, setStandOutFeatures] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(
      setProductDetails({
        brand,
        model,
        lower_price_range,
        high_price_range,
        price,
        status,
        public: publicMode,
        tags,
        stand_out_features,
      })
    );
  }, [brand, model, price, status, publicMode, stand_out_features, tags]);

  useEffect(() => {
    dispatch(
      setImageDetails({
        overview_image,
        interior_image,
        exterior_image,
        steering_image,
        standout_image,
      })
    );
  }, [
    overview_image,
    interior_image,
    exterior_image,
    steering_image,
    standout_image,
  ]);

  useEffect(() => {
    console.log("updated", productDetails);
  }, [productDetails]);

  useEffect(() => {
    const overview = images.filter((image) => image.tag === "Overview");
    const exterior = images.filter((image) => image.tag === "Exterior");
    const interior = images.filter((image) => image.tag === "Interior");
    const steering = images.filter((image) => image.tag === "Steering");
    setOverviewImage(overview.map((image) => image.file));
    setExteriorImage(exterior.map((image) => image.file));
    setInteriorImage(interior.map((image) => image.file));
    setSteeringImage(steering.map((image) => image.file));
  }, [images]);

  useEffect(() => {
    const standout = featImgs.filter((image) => image.tag === "Standout");
    setStandOutImage(standout.map((image) => image.file));
  }, [featImgs]);

  const handleCreateProduct = () => {
    dispatch(createProduct(productDetails));
  };

  return (
    <>
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
              <BrandModalCard
                model={model}
                selectedBrand={brand}
                setModel={setModel}
                setSelectedBrand={setBrand}
              />
              <PriceRangeCard
                price={price}
                setPrice={setPrice}
                setLow={setLowPrice}
                setHigh={setHighPrice}
              />
              <AddVariantCard />
              <OverviewImageCard allImages={images} setAllImages={setImages} />
              {/* <KeySpecs /> */}

              <Box position={"relative"}>
                <StandOutFeature
                  setFeat={setStandOutFeatures}
                  standOutFeat={stand_out_features}
                  allImages={featImgs}
                  setAllImages={setFeatImgs}
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                  }}
                  mt={3}
                >
                  {loading && (
                    <Box
                      position={"absolute"}
                      zIndex={10}
                      left={"40%"}
                      top={"10%"}
                    >
                      <Typography>
                        uploading product
                        <br />
                        Do not refresh the page
                        <br /> <CircularProgress />
                      </Typography>
                    </Box>
                  )}
                  <Button
                    onClick={handleCreateProduct}
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
                    Submit
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={3}>
            <PublishCard
              selectedStatus={status}
              setSelectedStatus={setStatus}
              publicMode={publicMode}
              setPublicMode={setPublicMode}
            />
            {/* <ScheduleCard /> */}
            <TagsCard name="Product" tags={tags} setTags={setTags} />
            <DeleteModalCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AddTwoWheeler;
