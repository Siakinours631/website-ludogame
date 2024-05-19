import { Box, LinearProgress, Typography } from '@mui/material'

const WLPhaseProgress = () => {
  const total_pack_wl1 = 25 * 3
  const total_sold = 4
  const total_pack = 75 * 6
  const value = 100 - (100 * total_sold / total_pack )
  const value_wl1 = 100 - (total_sold * 100 / total_pack_wl1)


  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography color="secondary" variant='h6'>WL Total Phase countdown</Typography>
      <LinearProgress color="secondary" sx={{ width: '100%' }} variant="determinate" value={value} />
      <Typography noWrap sx={{ display: 'flex', justifyContent: 'end', marginBottom: 2 }} color="secondary" variant="body2">{total_pack - total_sold} Packs remaining...</Typography>
      
      <Typography color="primary" variant='h6'>WL Phase 1 countdown</Typography>
      <LinearProgress color="primary" sx={{ width: '100%' }} variant="determinate" value={value_wl1} />
      <Typography noWrap sx={{ display: 'flex', justifyContent: 'end', marginBottom: 2 }} color="primary" variant="body2">{total_pack_wl1 - total_sold} Packs remaining...</Typography>
    </Box>
  )
}

export default WLPhaseProgress
