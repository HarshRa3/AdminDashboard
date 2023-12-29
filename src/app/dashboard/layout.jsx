"use client";
import React from "react";
import Box from "@mui/material/Box";
import Navbar from "../ui/dashboardcom/navbar/navbar";
import { Stack } from "@mui/material";
import OpenedMixin from "../ui/dashboardcom/sidebar/sidebar";
const layout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <OpenedMixin />
      </Box>
      <Stack
      direction={'column'}
      spacing={10}
        sx={{
          width: "100%",
          ml:'10px'
        }}
      >
        <Box>
          <Navbar />
        </Box>
        <Box sx={{width:'100%'}}>{children}</Box>
      </Stack>
    </Box>
  );
};

export default layout;
