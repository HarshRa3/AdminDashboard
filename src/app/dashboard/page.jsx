import { Box, Stack } from '@mui/material'
import React from 'react'

const page = () => {
  // const drawerWidth=300
  return (
<>
<Stack direction={'row'} sx={{width: '70%',margin:'auto'}} >
  <Box sx={{width:'30%', bgcolor:'red'}}>
    <h1>About Me</h1>
  </Box>
  <Box sx={{width:'30%', bgcolor:'red'}}>
    <h1>About Me</h1>
  </Box>
  <Box sx={{width:'30%', bgcolor:'red'}}>
    <h1>About Me</h1>
  </Box>
</Stack>
</>
  )
}

export default page
