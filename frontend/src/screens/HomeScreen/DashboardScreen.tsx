import { Box, Grid } from '@mantine/core'
import React from 'react'
import DasboardCardItem from '../../components/DasboardCard/DasboardCardItem'

const DashboardScreen = () => {
  return <Box>
        <Grid>
      <Grid.Col span={9}>
        <Grid>
        <DasboardCardItem/>
        <DasboardCardItem/>
        <DasboardCardItem/>
        <DasboardCardItem/>
        </Grid>

      </Grid.Col>
      <Grid.Col span={3}>2</Grid.Col>
    </Grid>
  </Box>
}

export default DashboardScreen
