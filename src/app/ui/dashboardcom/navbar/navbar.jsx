import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'

const navbar = () => {
    const drawerWidth=300
  return (
    <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px `,
          background: "#151c2c",
          color: "white",
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            ADMIN DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
  )
}

export default navbar
