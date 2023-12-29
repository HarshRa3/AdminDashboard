'use client'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

const TranscHead = (props) => {
  return (
    <Box
    direction={"row"}
    spacing={3}
    sx={{ alignItems: "center", color: props.textColor,width: '25%' }}
  >
    <Typography variant="h6">{props.heading}</Typography>
  </Box>
  )
}

export default TranscHead
