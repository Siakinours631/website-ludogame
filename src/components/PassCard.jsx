import { useTheme } from '@mui/material/styles'
import {Card, Grid } from '@mui/material'

import AlphaButtonOnApp from './AlphaButtonOnApp'

import WLPackCard from './WLPackCard'

const PassCard = () => {
  const theme = useTheme()
  console.log(theme)
  return (
    <Card sx={{ display: 'flex', flexDirection: window.innerWidth < 1200 ? 'column':'row'}}>

    <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <WLPackCard pack="racer" phase="1" />
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <WLPackCard pack="elite" phase="1" />
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <WLPackCard pack="prestige" phase="1" />
            </Grid>
          </Grid>
          
          </Card>

  )
}

export default PassCard
