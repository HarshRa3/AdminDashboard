"use client";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";
import TranscHead from "./TranscHead";

const Transactions = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#151c3c",
        borderRadius: "0.375rem",
        color: "#fff6",
        p: 2,
      }}
    >
      <Typography variant="h4">Latest Transactions</Typography>
      <Stack direction={"column"} spacing={2} color={"white"}>
        <Stack direction={"row"} sx={{ width: "100%" }}>
          <TranscHead heading={"Name"} />
          <TranscHead heading={"Status"} />
          <TranscHead heading={"Date"} />
          <TranscHead heading={"Amount"} />
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ alignItems: "center", width: "25%" }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <TranscHead heading={"Harsh"} />
          </Stack>
          <TranscHead heading={"pending"} />
          <TranscHead heading={"02/04/2003"} />
          <TranscHead heading={"50M"} />
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ alignItems: "center", width: "25%" }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <TranscHead heading={"Harsh"} />
          </Stack>
          <TranscHead heading={"pending"} />
          <TranscHead heading={"02/04/2003"} />
          <TranscHead heading={"50M"} />
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ alignItems: "center", width: "25%" }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <TranscHead heading={"Harsh"} />
          </Stack>
          <TranscHead heading={"pending"} />
          <TranscHead heading={"02/04/2003"} />
          <TranscHead heading={"50M"} />
        </Stack>
        <Stack
          direction={"row"}
          spacing={2}
          sx={{ width: "100%", alignItems: "center" }}
        >
          <Stack
            direction={"row"}
            spacing={1}
            sx={{ alignItems: "center", width: "25%" }}
          >
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            <TranscHead heading={"Harsh"} />
          </Stack>
          <TranscHead heading={"pending"} />
          <TranscHead heading={"02/04/2003"} />
          <TranscHead heading={"50M"} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Transactions;
