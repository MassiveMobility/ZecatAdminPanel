import { Box, MenuItem, Select, Typography } from "@mui/material";
import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#1890ff",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));

const PublishCard = ({selectedStatus, setSelectedStatus, publicMode, setPublicMode}) => {

  const handleChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const handleToggleVisibility = () => {
    setPublicMode(!publicMode)
  }
  return (
    <Box sx={{ padding: "24px", background: "#fff", borderRadius: "12px" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography
          color={"#1b1b1b"}
          fontSize={"18px"}
          fontFamily={"mySecondFont"}
          textAlign={"start"}
        >
          Publish
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <Typography
            color={"#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"mySecondFont"}
            textAlign={"start"}
          >
            Status
          </Typography>
          <Select
            fullWidth
            value={selectedStatus}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              borderRadius: "8px",
              "& .MuiSelect-select": {
                textAlign: "start",
              },
            }}
          >
            
            <MenuItem value={'publish'}>Publish</MenuItem>
            <MenuItem value={'draft'}>Draft</MenuItem>
          </Select>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
            <span
              style={{ fontWeight: "300" }}
              className="material-symbols-outlined"
            >
              visibility
            </span>
            <Typography
              color={"#2f2f2f"}
              fontSize={"14px"}
              fontFamily={"myThirdFont"}
              textAlign={"start"}
            >
              Public visibility
            </Typography>
          </Box>
          <Box>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography
                fontSize={"12px"}
                color={"#2f2f2f"}
                fontFamily={"mySecondFont"}
              >
                OFF
              </Typography>
              <AntSwitch
                defaultChecked
                inputProps={{ "aria-label": "ant design" }}
                onChange={handleToggleVisibility}
              />
              <Typography
                fontSize={"12px"}
                color={"#2f2f2f"}
                fontFamily={"mySecondFont"}
              >
                ON
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            alignItems: "center",
            color: "#700000",
          }}
        >
          <span
            style={{ fontWeight: "300" }}
            className="material-symbols-outlined"
          >
            delete
          </span>
          <Typography
            fontSize={"14px"}
            fontFamily={"mySecondFont"}
            textAlign={"start"}
            sx={{ textDecoration: "underline" }}
          >
            Move to trash
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PublishCard;
