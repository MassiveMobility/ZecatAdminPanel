import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import VariantNamePriceCard from "../../components/VariantsComponent/VariantNamePriceCard";
import VariantSpecFeature from "../../components/VariantsComponent/VariantSpecFeature";
import VariantColor from "../../components/VariantsComponent/VariantColor";
import VariantStatus from "../../components/VariantsComponent/VariantStatus";
import TagsCard from "../../components/VehicleModalComponent/TagsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  setImageDetails,
  setVariants,
} from "../../redux/actions/createProductSlice";
import { useNavigate } from "react-router-dom";

const AddVariant = () => {
  const { productDetails } = useSelector((state) => state.createProduct);
  const dispatch = useDispatch();
  const [tags, setTags] = useState([]);
  const [allImages, setAllImages] = useState([]);
  const [images, setImages] = useState([]);
  const [colors_available, setColorsAvailable] = useState([]);
  const [priceData, setPriceData] = useState({
    name: "",
    price: null,
    emi_starts_at: null,
    insurance_price: null,
    onroad_price: null,
    max_power: null,
    max_torque: null,
    range: null,
    battery_capacity: null,
    top_speed: null,
    charging_time_ac: null,
    fast_charging: false,
    airbags_count: null,
    public: true,
    tags: [],
    colors_available: [],
  });

  const navigate = useNavigate();
  const addVariantHandler = () => {
    dispatch(setVariants(priceData));
  };

  const backToAddModel = () => {
    navigate(-1);
  };

  useEffect(() => {
    setPriceData({
      ...priceData,
      ["tags"]: tags,
    });
  }, [tags]);

  useEffect(() => {
    setImages(allImages.map((img) => img.file));
  }, [allImages]);

  useEffect(() => {
    dispatch(
      setImageDetails({
        images,
      })
    );
  }, [images]);

  useEffect(() => {
    console.log("updated", productDetails);
  }, [productDetails]);

  useEffect(() => {
    setPriceData({
      ...priceData,
      ["colors_available"]: colors_available,
    });
  }, [colors_available]);

  useEffect(() => {
    console.log("dfdf", priceData);
  }, [priceData]);
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
            <VariantNamePriceCard
              setPriceData={setPriceData}
              priceData={priceData}
            />
            <VariantSpecFeature
              setFormData={setPriceData}
              formData={priceData}
            />
            <VariantColor
              allImages={allImages}
              setAllImages={setAllImages}
              setColorsAvailable={setColorsAvailable}
            />
          </Box>
          <Box
            sx={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
            }}
          >
            <Button
              onClick={backToAddModel}
              sx={{
                background: "#fff",
                borderRadius: "8px",
                padding: "12px 24px",
                color: "#000",
                maxWidth: "175px",
                border: "1px solid #000",
                width: "100%",
                fontFamily: "mySecondFont",
                ":hover": {
                  background: "#fff",
                },
              }}
            >
              BACK
            </Button>
            <Button
              onClick={addVariantHandler}
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
        </Grid>

        <Grid item md={3}>
          <VariantStatus setFormData={setPriceData} formData={priceData} />
          <TagsCard name={"Variant"} tags={tags} setTags={setTags} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddVariant;
