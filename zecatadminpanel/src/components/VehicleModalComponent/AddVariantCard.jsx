import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeVariants } from "../../redux/actions/createProductSlice";

const AddVariantCard = ({ variants = [] }) => {
  const { productDetails } = useSelector((state) => state.createProduct);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleVisibility = (index) => {
    // const newVisibilityStates = [...visibilityStates];
    // newVisibilityStates[index] = !newVisibilityStates[index];
    // setVisibilityStates(newVisibilityStates);
  };

  const handleAddVariant = () => {
    navigate("add_variant");
  };

  const handleRemoveVariant = (name) => {
    dispatch(removeVariants(name));
  };
  return (
    <Box
      sx={{
        padding: "24px",
        borderRadius: "12px",
        background: "#fff",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          color={"#1b1b1b"}
          fontSize={"18px"}
          fontFamily={"mySecondFont"}
          textAlign={"start"}
        >
          Variants
        </Typography>
        <Button
          onClick={handleAddVariant}
          sx={{
            padding: "8px 16px",
            border: "1px solid #2079FF",
            borderRadius: "8px",
            fontFamily: "mySecondFont",
            color: "#2079FF",
          }}
        >
          <span
            class="material-symbols-outlined"
            style={{ marginRight: "8px" }}
          >
            add
          </span>
          ADD VARIANT
        </Button>
      </Box>

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
            Variant
          </Typography>
        </Box>
        <Box display={"flex"} width={"25%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Price (Ex-showroom)
          </Typography>
        </Box>
        <Box display={"flex"} width={"25%"}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
          >
            Action
          </Typography>
        </Box>
      </Box>
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
        {productDetails?.variants?.map((item, index) => {
          // {variants?.map((item, index) => {
          return (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Box sx={{ display: "flex", width: "5%" }}>
                <Typography fontSize={"14px"} fontFamily={"mySecondFont"}>
                  {index + 1}
                </Typography>
              </Box>
              <Box
                display={"flex"}
                sx={{ flexDirection: "column", gap: "4px" }}
                // flex={2}
                width={"45%"}
              >
                <Typography
                  textAlign={"start"}
                  color={"#2F2F2F"}
                  fontSize={"16px"}
                  fontFamily={"mySecondFont"}
                >
                  {item?.name}
                </Typography>
                <Typography
                  color={"#727272"}
                  fontSize={"14px"}
                  fontFamily={"myThirdFont"}
                  textAlign={"start"}
                >
                  {item?.max_torque}
                </Typography>
              </Box>
              <Box display={"flex"} width={"25%"}>
                <Typography
                  textAlign={"start"}
                  color={"#2F2F2F"}
                  fontSize={"16px"}
                  fontFamily={"mySecondFont"}
                >
                  {item?.price}
                </Typography>
              </Box>
              <Box display={"flex"} flex={1} gap={"4px"} width={"25%"}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    padding: "4px",
                    border: "1px solid #D0D0D0",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{ color: "#2079FF", fontWeight: "300" }}
                    class="material-symbols-outlined"
                  >
                    edit
                  </span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    padding: "4px",
                    border: "1px solid #D0D0D0",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{ color: "#2079FF", fontWeight: "300" }}
                    class="material-symbols-outlined"
                  >
                    content_copy
                  </span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    padding: "4px",
                    border: "1px solid #D0D0D0",
                    cursor: "pointer",
                  }}
                  onClick={() => handleVisibility(index)}
                >
                  {/* {visibilityStates[index] ? (
                    <span
                      style={{ color: "#2F2F2F", fontWeight: "300" }}
                      class="material-symbols-outlined"
                    >
                      visibility
                    </span>
                  ) : ( */}
                  <span class="material-symbols-outlined">visibility_off</span>
                  {/* )} */}
                </Box>
                <Box
                  onClick={() => handleRemoveVariant(item?.name)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "4px",
                    padding: "4px",
                    border: "1px solid #D0D0D0",
                    cursor: "pointer",
                  }}
                >
                  <span
                    style={{ color: "#700000", fontWeight: "300" }}
                    class="material-symbols-outlined"
                  >
                    delete
                  </span>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default AddVariantCard;
