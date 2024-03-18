import { Box } from "@mui/material";
import React from "react";

const SearchInput = () => {
  return (
    <Box position={"relative"} width={'100%'}>
      <input
        type="text"
        placeholder="Search"
        style={{
          padding: "14px 16px",
          borderRadius: "8px",
          border: "1px solid rgba(18, 18, 18, 0.15)",
          width: "100%",
          outline: "none",
          fontFamily: "myFourthFont",
        }}
      />
      <Box position={'absolute'} top={15} right={10}>
      <span class="material-symbols-outlined" style={{fontWeight: 200}}>search</span>
      </Box>
    </Box>
  );
};

export default SearchInput;
