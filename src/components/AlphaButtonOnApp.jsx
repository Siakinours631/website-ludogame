import {useTheme} from '@mui/material/styles'

import { CardActions, Typography, Grid } from '@mui/material';
import AlphaPhaseButton from './AlphaPhaseButton';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';



const AlphaButtonOnApp = () => {
  const theme = useTheme(); // Utiliser useTheme de MUI ici

  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', width:'100%' }}>

      <Grid>
      <Typography sx={{ textAlign: 'center' }} variant="body1" color="primary">
        Already have your <strong style={{ color: theme.palette.secondary.main }}>LUDOGame</strong> pack?<br />
        <TurnLeftIcon style={{ verticalAlign: 'middle', transform: 'rotate(-90deg)' }} />
        Join the ALPHA now!
        <TurnRightIcon style={{ verticalAlign: 'middle', transform: 'rotate(90deg)' }} />
      </Typography>
      </Grid>
      <CardActions>
        <AlphaPhaseButton />
      </CardActions>
    </div>
  );
};

export default AlphaButtonOnApp
