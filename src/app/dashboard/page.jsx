import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DashboardCard from "../ui/dashboardcom/wraper/Card";
import Chart from "../ui/dashboardcom/chart/Chart";
import Transactions from "../ui/dashboardcom/Transaction/Transactions";
const page = () => {
  // const drawerWidth=300
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Box sx={{ width: "67%" }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={2}
          sx={{ width: "100%", color: "white" }}
        >
          <DashboardCard title="Card 1" content="Some content for Card 1." />
          <DashboardCard title="Card 1" content="Some content for Card 1." />
          <DashboardCard title="Card 1" content="Some content for Card 1." />
        </Stack>
        <Stack sx={{ width: "100%", color: "white", mt: "10px" }}>
          <Transactions />
        </Stack>
        <Stack sx={{ width: "100%", color: "white", mt: "10px" }}>
          <Chart />
        </Stack>
      </Box>
      <Box sx={{ width: "31%", bgcolor: "red" }}>
        
      </Box>
    </Box>
  );
};

export default page;
