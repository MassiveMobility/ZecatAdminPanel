import { Box, Typography } from "@mui/material";
import React from "react";
import { RangeSlider, InputNumber } from "rsuite";

const PriceRangeCard = () => {
  const [value, setValue] = React.useState([100, 400]);

  return (
    <Box sx={{ padding: "24px", background: "#fff", borderRadius: "12px" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"18px"}
        fontFamily={"mySecondFont"}
        textAlign={"start"}
      >
        Price Range (Ex-showroom)
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "16px",
          gap: "12px",
        }}
      >
        <Box>
          <InputNumber
            min={0}
            max={500}
            value={value[0]}
            style={{
              width: { md: "160px", xs: "120px" },
              height: "40px",
              fontFamily: "mySecondFont",
              color: "#2f2f2f",
              padding: "8px 12px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
            }}
            onChange={(nextValue) => {
              const [start, end] = value;
              if (nextValue > end) {
                return;
              }
              setValue([nextValue, end]);
            }}
          />
        </Box>
        <Box>
          <InputNumber
            min={0}
            max={500}
            value={value[1]}
            style={{
              width: { md: "160px", xs: "120px" },
              height: "40px",
              fontFamily: "mySecondFont",
              color: "#2f2f2f",
              padding: "8px 12px",
              borderRadius: "8px",
            }}
            onChange={(nextValue) => {
              const [start, end] = value;
              if (start > nextValue) {
                return;
              }
              setValue([start, nextValue]);
            }}
          />
        </Box>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <RangeSlider
          min={0}
          max={500}
          progress
          style={{ marginTop: 16 }}
          value={value}
          onChange={(value) => {
            setValue(value);
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Typography fontFamily={"myThirdFont"}>₹0</Typography>
        <Typography fontFamily={"myThirdFont"}>₹10,00,00,000</Typography>
      </Box>
    </Box>
  );
};

export default PriceRangeCard;
