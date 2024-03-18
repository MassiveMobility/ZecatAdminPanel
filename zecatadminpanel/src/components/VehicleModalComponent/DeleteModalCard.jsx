import { Box, Button, Typography } from "@mui/material";
import React from "react";

const DeleteModalCard = () => {
  return (
    <Box
      sx={{
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        marginTop: "24px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Typography
          color={"#1b1b1b"}
          fontSize={"18px"}
          fontFamily={"mySecondFont"}
          textAlign={"start"}
        >
          Delete Model
        </Typography>
        <Button
          sx={{
            border: "1px solid #700000",
            borderRadius: "8px",
            padding: "8px 16px",
            fontFamily: "mySecondFont",
            color: "#700000",
          }}
        >
          <span
            style={{ fontWeight: "300", marginRight: "8px" }}
            className="material-symbols-outlined"
          >
            delete
          </span>
          DELETE
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteModalCard;
