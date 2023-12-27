'use client'
import React from 'react'
import Box from '@mui/material/Box'
import Navbar from '../ui/dashboardcom/navbar/navbar'
import Sidebar from '../ui/dashboardcom/sidebar/sidebar'
const layout = ({children}) => {
  return (
    <div>
        <Box sx={{display:'flex'}} >
        <Sidebar/>
        <Box sx={{display:'flex',flexDirection:'column'}}>
        <Navbar/>
        {children}
        </Box>
        </Box>
    </div>
  )
}

export default layout
