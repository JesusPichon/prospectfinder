// layouts/DashboardLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Drawer,
  Typography,
  IconButton,
  Box,
  useTheme,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from "@mui/icons-material";
import SidebarMenu from "../components/common/SideBarList/SideBarMenu";

const drawerWidth = 240;
const miniDrawerWidth = 60;

export default function DashboardLayout() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: "flex" }}>
      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${open ? drawerWidth : miniDrawerWidth}px)`,
          ml: `${open ? drawerWidth : miniDrawerWidth}px`,
          boxShadow: "none",
          backgroundColor: theme.palette.background.default,
          transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap color="textPrimary">
            ProspectFinder
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          width: open ? drawerWidth : miniDrawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          "& .MuiDrawer-paper": {
            width: open ? drawerWidth : miniDrawerWidth,
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.standard,
            }),
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: open ? "flex-end" : "center",
            p: 1,
          }}
        >
          <IconButton
            onClick={toggleDrawer}
            sx={{ color: theme.palette.drawer.text }}
          >
            {open ? <ChevronLeftIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        <SidebarMenu open={open} />
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: theme.palette.background.default,
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.standard,
          }),
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
