import { Box, Typography } from "@mui/material";
import React, { useState } from "react";

const KeySpecs = () => {
  const [formData, setFormData] = useState({
    max_power: "",
    max_torque: "",
    range: "",
    battery_capacity: "",
    top_speed: "",
    charging_time_ac: "",
    fast_charging: "",
    airbags_count: "",
  });

  const handleInputChange = (event, fieldName) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  const handleRadioChange = (event) => {
    const { value } = event.target;
    setFormData({
      ...formData,
      fast_charging: value,
    });
  };

  return (
    <>
      {/*------ heading ------*/}
      <Box
        sx={{
          padding: "8px",
          background: "#f6f8fc",
          marginTop: "16px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <Box display={"flex"} width={"5%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            S.No
          </Typography>
        </Box>
        <Box display={"flex"} width={"45%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Specification/ feature name
          </Typography>
        </Box>
        <Box display={"flex"} width={"50%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Input
          </Typography>
        </Box>
      </Box>
      {/*------ data ------*/}
      <Box
        sx={{
          marginTop: "18px",
          padding: "8px 8px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              1
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Max Power
            </Typography>
          </Box>
          <Box display={"flex"} width={"50%"}>
            <input
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                height: "64px",
              }}
              placeholder="Enter Input here"
              type="text"
              value={formData.input1}
              onChange={(e) => handleInputChange(e, "max_power")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              2
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Max Torque
            </Typography>
          </Box>
          <Box display={"flex"} width={"50%"}>
            <input
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                height: "64px",
              }}
              placeholder="Enter Input here"
              type="text"
              value={formData.input1}
              onChange={(e) => handleInputChange(e, "max_torque")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              3
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Airbags Count
            </Typography>
          </Box>
          <Box display={"flex"} width={"50%"}>
            <input
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                height: "64px",
              }}
              placeholder="Enter Input here"
              type="text"
              value={formData.input1}
              onChange={(e) => handleInputChange(e, "airbags_count")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              4
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Battery Capacity
            </Typography>
          </Box>
          <Box display={"flex"} width={"50%"}>
            <input
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                height: "64px",
              }}
              placeholder="Enter Input here"
              type="text"
              value={formData.input1}
              onChange={(e) => handleInputChange(e, "battery_capacity")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              5
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Range
            </Typography>
          </Box>
          <Box display={"flex"} width={"50%"}>
            <input
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                height: "64px",
              }}
              placeholder="Enter Input here"
              type="text"
              value={formData.input1}
              onChange={(e) => handleInputChange(e, "range")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              6
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Top Speed
            </Typography>
          </Box>
          <Box display={"flex"} width={"50%"}>
            <input
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                height: "64px",
              }}
              placeholder="Enter Input here"
              type="text"
              value={formData.input1}
              onChange={(e) => handleInputChange(e, "top_speed")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              7
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Charging time (AC)
            </Typography>
          </Box>
          <Box display={"flex"} width={"50%"}>
            <input
              style={{
                width: "100%",
                padding: "12px 16px",
                borderRadius: "8px",
                border: "1px solid rgba(47, 47, 47, 0.25)",
                outline: "none",
                height: "64px",
              }}
              placeholder="Enter Input here"
              type="text"
              value={formData.input1}
              onChange={(e) => handleInputChange(e, "charging_time_ac")}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "36px",
          }}
        >
          <Box sx={{ display: "flex", width: "5%" }}>
            <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
              8
            </Typography>
          </Box>
          <Box display={"flex"} width={"45%"}>
            <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
              Fast Charging
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "16px", width: "50%" }}>
            <Box
              sx={{
                border: "1px solid #2f2f2f",
                padding: "8px 12px",
                display: "flex",
                gap: "8px",
                borderRadius: "8px",
                width: "100%",
                fontSize: "16px",
                fontFamily: "mySecondFont",
              }}
            >
              <input
                style={{ width: "20px" }}
                type="radio"
                name="fast_charging"
                value="Yes"
                checked={formData.fast_charging === "Yes"}
                onChange={handleRadioChange}
              />
              Yes
            </Box>
            <Box
              sx={{
                border: "1px solid #2f2f2f",
                padding: "8px 12px",
                display: "flex",
                gap: "8px",
                borderRadius: "8px",
                width: "100%",
                fontSize: "16px",
                fontFamily: "mySecondFont",
              }}
            >
              <input
                style={{ width: "20px" }}
                type="radio"
                name="fast_charging"
                value="No"
                checked={formData.fast_charging === "No"}
                onChange={handleRadioChange}
              />
              No
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default KeySpecs;
