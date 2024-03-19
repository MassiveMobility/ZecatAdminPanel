import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import SidebarCSS from "./Sidebar.module.css";
import { useNavigate } from "react-router-dom";

const NavItems = ({ item, currentMenuItem, setCurrentMenuItem, icon }) => {
  const navigate = useNavigate();
  const [openChildren, setOpenChildren] = useState(false);

  const handleOpenChildren = () => {
    setOpenChildren(!openChildren);
  };

  const handleSetMenuItem = (child) => {
    setCurrentMenuItem(child.title);
    localStorage.setItem("menuItem", item.name);
    navigate(child.path)
  }

  return (
    <>
      <Box
        className={SidebarCSS.dashOptionDiv}
        tabIndex={1}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4px",
          borderLeft:
            currentMenuItem === item.name ? "4px solid #2079ff" : "none",
          borderTopLeftRadius: currentMenuItem === item.name ? "0px 8px" : "0",
        }}
        onClick={() => navigate(item?.path)}
      >
        <Box
          className={SidebarCSS.dashOptions}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            marginLeft: "12px",
            marginBottom: "4px",
            marginRight: "16px",
            borderRadius: "8px",
            background:
              currentMenuItem === item.name && !icon
                ? "#f4f8ff"
                : "transparent",
          }}
          onClick={() => {
            setCurrentMenuItem(item.name);
            localStorage.setItem("menuItem", item.name);
          }}
          tabIndex={1}
        >
          <Typography
            color={currentMenuItem === item.name ? "#2079ff" : "#2f2f2f"}
            fontSize={"14px"}
            fontFamily={"myThirdFont"}
            textAlign={"start"}
            display={"flex"}
            alignItems={"center"}
            gap={"8px"}
            fontWeight={currentMenuItem === item.name ? "600" : "500"}
            className={SidebarCSS.navitems}
            tabIndex={1}
          >
            <span
              style={{ fontWeight: "300" }}
              className="material-symbols-outlined"
            >
              {item.icon}
            </span>
            {item.name}
          </Typography>
          {icon && (
            <Box sx={{ cursor: "pointer" }} onClick={handleOpenChildren}>
              <span
                className={`material-symbols-outlined ${
                  openChildren
                    ? SidebarCSS.iconRotate
                    : SidebarCSS.iconRotateRemove
                }`}
              >
                expand_more
              </span>
            </Box>
          )}
        </Box>
      </Box>
      {openChildren && (
        <Box className={openChildren ? SidebarCSS.childrenSmoothness: ''} pl={"40px"} mt={"8px"}>
          {item.childs.map((child) => (
            <Box borderLeft={"1px solid rgba(47, 47, 47, 0.25)"}
            pl={"10px"}
            
            >
            <Typography
            onClick={() => handleSetMenuItem(child)}
              pl={'12px'}
              color={"#2f2f2f"}
              fontSize={"14px"}
              fontFamily={"myThirdFont"}
              textAlign={"start"}
              py={'8px'}
              sx={{cursor: "pointer"}}
              bgcolor={ currentMenuItem === child.title
                ? "#f4f8ff"
                : "transparent"}
             
            >
              {child.title}
            </Typography>
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default NavItems;
