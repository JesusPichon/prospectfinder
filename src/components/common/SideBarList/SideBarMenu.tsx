// components/common/SideBarList/SideBarMenu.tsx
import React from "react";
import {
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Tooltip,
  useTheme,
  ListItemButton,
} from "@mui/material";
import { Home as HomeIcon } from "@mui/icons-material";

interface SidebarMenuProps {
  open: boolean;
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ open }) => {
  const theme = useTheme();

  return (
    <List>
      <Divider />
      <Tooltip title="Home" placement="right" disableHoverListener={open}>
        <ListItemButton
          sx={{ "&:hover": { backgroundColor: theme.palette.action.hover } }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <HomeIcon />
          </ListItemIcon>
          {open && (
            <ListItemText
              primary="Home"
              primaryTypographyProps={{ color: theme.palette.text.primary }}
            />
          )}
        </ListItemButton>
      </Tooltip>
      <Divider />
    </List>
  );
};

export default SidebarMenu;
