import { Box, Typography } from "@mui/material";
import React from "react";

const KeySpecs = () => {
  const keySpecs = [
    {
      specification: "Max Power",
    },
    {
      specification: "Range",
    },
    {
      specification: "Battery Capacity",
    },
    {
      specification: "Top Speed",
    },
    {
      specification: "Charging time (AC)",
    },
    {
      specification: "Fast Charging",
    },
  ];
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
        {keySpecs.map((item, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "36px",
              }}
            >
              <Box sx={{ display: "flex", width: "5%" }}>
                <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
                  {index}
                </Typography>
              </Box>
              <Box display={"flex"} width={"45%"}>
                <Typography fontSize={"16px"} fontFamily={"mySecondFont"}>
                  {item.specification}
                </Typography>
              </Box>
              <Box display={"flex"} width={"50%"}>
                {item.specification !== "Fast Charging" ? (
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
                  />
                ) : (
                  <Box sx={{ display: "flex", gap: "16px", width: "100%" }}>
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
                        name="option"
                      />{" "}
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
                        name="option"
                      />{" "}
                      No
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default KeySpecs;
