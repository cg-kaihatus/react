import { useState } from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import USItem from '../atoms/USItem';


const USCollection = ({windowWidth}: {windowWidth: number}) => {
  const title = "〇新入社員向け・初級コース"
  const contents = [1,1,1,1,1,1,1,1,1,1,1]
  const [pos, setPos] = useState(0);
  const move = 261;

  return (
    <Box height={'400px'} sx={{ maxWidth: windowWidth*0.93}}>
      <Grid container maxWidth='100%'>
        <Grid item xs={1}>
          <Box paddingX='50%' paddingY='200px'>
            {pos < 0 &&
              <IconButton onClick={() => setPos(pos+1)}>
                <ArrowBackIosNewIcon fontSize='large'/>
              </IconButton>
            }
            </Box>
        </Grid>
        <Grid item xs={10}>
          <Box sx={{padding: '10px', maxWidth: '100%'}}>
            <Typography variant='h5'>
              {title}
            </Typography>
            <hr />
            <Box overflow='hidden' maxWidth='100%'>
              <div style={{
                display: 'flex',
                width: 'fit-content',
                transform: 'translateX('.concat(String(pos*move)).concat('px)'),
                transition: 'transform 0.3s ease'
                }} >
                  {contents.map((item) => (
                    <USItem />
                  ))}
              </div>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={1}>
          <Box paddingX='10px' paddingY='200px'>
            {pos > -(contents.length-1) &&
              <IconButton onClick={() => setPos(pos-1)}>
                <ArrowForwardIosIcon fontSize='large'/>
              </IconButton>
            }
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default USCollection;