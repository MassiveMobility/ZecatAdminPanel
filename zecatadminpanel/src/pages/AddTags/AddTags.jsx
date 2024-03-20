import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SearchInput from "../../components/Inputs/SearchInput";
import Sorting from "../TwoWheelerPage/Sorting";
import CustomTable from "../../components/CustomTable/CustomTable";
import { tagsModelData, tagsModelTable } from "../../constants/mapItems";

const AddTags = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
      <Typography
        color={"#1b1b1b"}
        fontSize={"clamp(1rem, 0.8962rem + 0.5031vw, 1.5rem)"}
        fontFamily={"mySecondFont"}
      >
        Manage tags
      </Typography>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box
            sx={{
              padding: { md: "24px", xs: "16px" },
              background: "#fff",
              borderRadius: "12px",
              width: "100%",
              marginTop: "16px",
              overflow: "auto",
            }}
          >
            <Box>
              <Typography
                color={"#1b1b1b"}
                fontSize={"18px"}
                fontFamily={"mySecondFont"}
                textAlign={"start"}
              >
                Add new tags
              </Typography>
              <Box
                mt={"12px"}
                display={"flex"}
                alignItems={"center"}
                gap={"8px"}
                flexWrap={"wrap"}
              >
                <Box display={"flex"} flex={3}>
                  <input
                    type="text"
                    placeholder="Enter the tags here"
                    style={{
                      padding: "12px 8px",
                      borderRadius: "8px",
                      border: "1px solid rgba(18, 18, 18, 0.15)",
                      width: "100%",
                      outline: "none",
                      fontFamily: "myFourthFont",
                      color: "#7a7a7a",
                    }}
                  />
                </Box>

                <Box display={"flex"} flex={1}>
                  <Button
                    sx={{
                      width: "100%",
                      padding: "12px 32px",
                      border: "1px solid #2079FF",
                      borderRadius: "8px",
                      fontFamily: "mySecondFont",
                      color: "#2079FF",
                    }}
                  >
                    ADD
                  </Button>
                </Box>
              </Box>
              {/*---------------------------------------- ADD NEW BUTTON--------------------------------------------- */}
            </Box>
          </Box>

          <Box
            sx={{
              padding: { md: "24px", xs: "16px" },
              background: "#fff",
              borderRadius: "12px",
              width: "100%",
              marginTop: "24px",
              overflow: "auto",
            }}
          >
            <Box>
              <Box
                display={"flex"}
                alignItems={"center"}
                gap={"8px"}
                flexWrap={"wrap"}
              >
                <Box width={{ md: "500px" }}>
                  <SearchInput />
                </Box>
                <Box>
                  <Sorting />
                </Box>
              </Box>
            </Box>

            <Box>
          <Typography
            mt={"12px"}
            mb={"8px !important"}
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myFourthFont"}
            textAlign={"left"}
          >
            Showing 1-10 of 80 tags
          </Typography>
          <CustomTable headRow={tagsModelTable} rowData={tagsModelData} view={10}/>
        </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddTags;
