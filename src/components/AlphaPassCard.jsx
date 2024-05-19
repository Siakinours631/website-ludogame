import { useTheme } from '@mui/material/styles'
import { Box, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material'

import WLPhaseProgress from './WLPhaseProgress'
import PassCard from './PassCard'
import AlphaButtonOnApp from './AlphaButtonOnApp'



const AlphaPassCard = () => {
  const theme = useTheme()
  return (
    <Card sx={{ display: 'flex', flexDirection: window.innerWidth < 1200 ? 'column':'row', backgroundColor: theme.palette.background.paper}}>
      
     <Grid>
      <CardMedia
        component="img"
        sx={{ width: '95%', 
          margin: '1rem', 
          border: '1px solid',
          boxShadow: 1,
          borderRadius: "70px",
          p: 2,
        }}
        image="img/wl-pass.png"
        alt="WL Pass cover"
      />

      </Grid>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5" color="primary">
            The ALPHA Phase
          </Typography>
          <Typography variant="subtitle2" color="secondary">
            First come, first served! Be among the first to support the project and believe in it!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            To enter the ALPHA Phase, you need to obtain the <strong style={{ color: theme.palette.primary.main }}>discord <span style={{ color: theme.palette.secondary.main }}>WL</span> role</strong>.
            All you need to do is purchase one or more of our following NFTs packs.<br />
            Don't forget, as mentioned in our presentation pitch above, our best prices, rewards and bonuses are available to early adopters.<br />
            This first launch phase only includes 75 packs! 
          </Typography>
          <Typography sx={{ textAlign: 'end' }} variant="body1">Join us and take advantage of the best bonuses right now!</Typography>

          <Box sx={{ width: '100%' }}>
            <WLPhaseProgress value={22} />
            <PassCard/>  
            <AlphaButtonOnApp />
          </Box>
            
        </CardContent>

      </Box>

    </Card>
  )
}

export default AlphaPassCard
