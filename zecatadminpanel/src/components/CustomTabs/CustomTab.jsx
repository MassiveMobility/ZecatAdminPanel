import { useState } from "react";
import { Box, Typography } from "@mui/material";

const CustomTab = ({ item }) => {
  const [isActive, setIsActive] = useState(item[0].label);

  const handleChangeActive = (val) => {
    setIsActive(val)
  }
  return (
    <Box display={"flex"} gap={"25px"} borderBottom={"1px solid #D7D7D7"} overflow={'auto'}>
      {item.map((opt) => (
        <Box
          onClick={() => handleChangeActive(opt.label)}
          pb={"6px"}
          borderBottom={isActive === opt.label && "3px solid #2079ff"}
          sx={{cursor: "pointer"}}
        >
          <Typography
            px={"8px"}
            py={"2px"}
            color={isActive === opt.label ? "#575757" : "#727272"}
            fontFamily={"mySecondFont"}
          >
            {opt.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CustomTab;
