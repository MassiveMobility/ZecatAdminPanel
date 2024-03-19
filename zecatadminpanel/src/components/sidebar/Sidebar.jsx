import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useRef } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavItems from "./NavItems";
import { useNavigate } from "react-router-dom";


const drawerWidth = 240;
const dashboardOptions = [
  {
    name: "Dashboard",
    icon: "dashboard",
    path: "/",
    children: false,
  },
  {
    name: "2 Wheelers",
    icon: "electric_moped",
    path: "/two_wheelers",
    children: false,
  },
  {
    name: "4 Wheelers/Cars",
    icon: "electric_car",
    path: "/four_wheelers",
    children: false,
  },
  {
    name: "Brands",
    icon: "storefront",
    path: "/brands",
    children: false,
  },
  {
    name: "Posts",
    icon: "article",
    children: true,
    childs: [
      {
        title: "All posts",
        path: "/all_posts"
      },
      {
        title:  "Videos",
        path: "/videos"
      },
      {
        title: "Manage categories",
        path: "/posts_categories"
      },
      {
        title: "Manage tags",
        path: "/posts_tags"
      },
    ]
  },
  {
    name: "Users",
    icon: "group",
    // path: "/user_list",
    children: true,
    childs: [
      {
        title: "User list",
        path: "/all_user_list"
      },
      {
        title: "Manage Reviews",
        path: "/user_reviews"
      },
    ]
  },
  {
    name: "Enquiries",
    icon: "contact_support",
    path: "/enquiry",
    children: false,
  },
  {
    name: "Loan applications",
    icon: "request_page",
    path: "/loan_application",
    children: false,
  },
  {
    name: "Lease applications",
    icon: "contract",
    path: "/lease_application",
    children: false,
  },
];

function ResponsiveDrawer(props) {
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(
    localStorage.getItem("menuItem") || dashboardOptions[0].name
  );

  const navigate = useNavigate();

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };



  const drawer = (
    <div>
      {/* <Toolbar /> */}
      <Box
        sx={{
          minHeight: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <img src="/images/mainlogo.png" alt="" />
      </Box>
      {/* <Divider /> */}
      {dashboardOptions.map((item, index) => {
        return (
          <>
          
               <NavItems
               icon={item.children ? true: false}
                  key={item.name}
                  item={item}
                  setCurrentMenuItem={setCurrentMenuItem}
                  currentMenuItem={currentMenuItem}
                />
            
          </>
        );
      })}
      <Box
        sx={{ padding: "0px 32px", marginTop: "24px", marginBottom: "24px" }}
      >
        <Divider />
      </Box>
      <Box
        sx={{
          padding: "12px 16px",
          marginLeft: "12px",
          marginRight: "16px",
          borderRadius: "8px",
          background:
            currentMenuItem === "Settings" ? "#f4f8ff" : "transparent",
        }}
        onClick={() => {
          setCurrentMenuItem("Settings");
          localStorage.setItem("menuItem", "Settings");
          navigate("/setting");
        }}
        tabIndex={1}
      >
        <Typography
          color={currentMenuItem === "Settings" ? "#2079ff" : "#2f2f2f"}
          fontSize={"14px"}
          fontFamily={"myThirdFont"}
          textAlign={"start"}
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          fontWeight={currentMenuItem === "Settings" ? "600" : "500"}
          tabIndex={1}
        >
          <span style={{ fontWeight: "300" }} class="material-symbols-outlined">
            settings
          </span>
          Settings
        </Typography>
      </Box>
      <Box
        sx={{
          padding: "12px 16px",
          marginLeft: "12px",
          marginRight: "16px",
          borderRadius: "8px",
          background: currentMenuItem === "Logout" ? "#f4f8ff" : "transparent",
        }}
        onClick={() => {
          setCurrentMenuItem("Logout");
          localStorage.setItem("menuItem", "Logout");
        }}
        tabIndex={1}
      >
        <Typography
          color={currentMenuItem === "Logout" ? "#2079ff" : "#2f2f2f"}
          fontSize={"14px"}
          fontFamily={"myThirdFont"}
          textAlign={"start"}
          display={"flex"}
          alignItems={"center"}
          gap={"8px"}
          fontWeight={currentMenuItem === "Logout" ? "600" : "500"}
          tabIndex={1}
        >
          <span style={{ fontWeight: "300" }} class="material-symbols-outlined">
            Logout
          </span>
          Logout
        </Typography>
      </Box>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background: "#fff !important",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: "0px 4px 4px 0px rgba(41, 45, 51, 0.05)",
        }}
      >
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flex: "1",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "24px",
                alignItems: "center",
                padding: "12px 32px",
              }}
            >
              <Box
                sx={{
                  width: "56px",
                  height: "56px",
                  background: "#f4f8ff",
                  borderRadius: "56px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span
                  style={{ color: "#2f2f2f", fontWeight: "300" }}
                  className="material-symbols-outlined"
                >
                  notifications
                </span>
              </Box>
              <Box sx={{ display: "flex", gap: "16px", alignItems: "center" }}>
                <Box
                  sx={{
                    width: "56px",
                    height: "56px",
                    background: "#f4f8ff",
                    borderRadius: "56px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src="/images/usericon.png" alt="" />
                </Box>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
                >
                  <Typography
                    color={"#2f2f2f"}
                    fontFamily={"mySecondFont"}
                    fontSize={"16px"}
                    textAlign={"start"}
                  >
                    Sahil Gour
                  </Typography>
                  <Typography
                    color={"#2f2f2f"}
                    fontFamily={"myThirdFont"}
                    fontSize={"14px"}
                    textAlign={"start"}
                  >
                    Admin
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: { md: "32px 24px 32px 32px", xs: "32px 16px 32px 16px" },
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          overflow: "auto",
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
