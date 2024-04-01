import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { RangeSlider, InputNumber } from "rsuite";

const PriceRangeCard = ({price, setPrice, setLow, setHigh}) => {
  const [value, setValue] = useState([200000, 4500000]);


  useEffect(() => {
    setLow(value[0])
    setHigh(value[1])
    const formatNumber = (num) => {
      return num.toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,');
  };

  const low = formatNumber(value[0]);
  const high = formatNumber(value[1]);

  const range = `${low}-${high}`;

   
    setPrice(range)
  }, [value])

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
            min={200000}
            max={4500000}
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
            min={200000}
            max={4500000}
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
          min={200000}
          max={4500000}
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
        <Typography fontFamily={"myThirdFont"}>₹2,00,000</Typography>
        <Typography fontFamily={"myThirdFont"}>₹45,00,000</Typography>
      </Box>
    </Box>
  );
};

export default PriceRangeCard;
