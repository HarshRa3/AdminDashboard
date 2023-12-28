import { Box, Stack,Typography } from '@mui/material'
import React from 'react'
import DashboardCard from '../ui/dashboardcom/wraper/Card'
import Chart from '../ui/dashboardcom/chart/Chart'
const page = () => {
  // const drawerWidth=300
  return (
<>
<Stack direction={'row'} spacing={2} sx={{width: '67%',color:'white'}} >
<DashboardCard title="Card 1" content="Some content for Card 1." />
<DashboardCard title="Card 1" content="Some content for Card 1." />
<DashboardCard title="Card 1" content="Some content for Card 1." />
</Stack>
<Stack sx={{width: '67%',color:'white',mt:'10px'}}>
  <Chart/>
</Stack>
</>
  )
}

export default page
