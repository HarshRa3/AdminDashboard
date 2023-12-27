"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { data } from "../../staticData/DrawerData";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Avatar from '@mui/material/Avatar';
import Link from "next/link";

const drawerWidth = 300;

export default function PermanentDrawerLeft() {
  const [openStates, setOpenStates] = React.useState({});

  const handleClick = (index) => {
    setOpenStates((prevOpenStates) => ({
      ...prevOpenStates,
      [index]: !prevOpenStates[index],
    }));
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#151c2c",
            color: "white",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{display:'flex',justifyContent:'space-between'}}>
        <Avatar>H</Avatar>
        <Typography variant="h6" align="center" >
            Huy Nguyen
            </Typography>
        </Toolbar>
        <Divider />
        {data.map((e, i) => {
          const isOpen = openStates[i] || false;
          return (
            <List key={i}>
              <ListItemButton sx={{ color: "#d9d9d9" }} onClick={() => handleClick(i)}>
                <ListItemIcon sx={{ color: "#d9d9d9" }}>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={e.title} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={isOpen} timeout="auto" unmountOnExit>
                {e.list.map((item, index) => (
                  <List key={index} component="div" disablePadding>
                   <Link href={item.path} style={{color:'white',textDecoration:'none'}} > <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon sx={{ color: "inherit" }} >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                    </Link>
                  </List>
                ))}
                <Divider sx={{ bgcolor: "#d9d9d9" }} />
              </Collapse>
            </List>
          );
        })}
      </Drawer>
    </Box>
  );
}
