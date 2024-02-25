import * as React from 'react';
import { Box, Typography, Divider, CardActionArea, CardActions, Button  } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import sampleImg from "../../statics/img/cat240.png";

const titleSample : string = "Title";
const discriptiponSample : string = "補足メモ"

const UCItem = () => {

  return (
    <Card sx={{ display: 'flex', margin: 2 }}>
        <CardActionArea href='/material'>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                    component="img"
                    sx={{ width: '240px' }}
                    image={sampleImg}
                    alt=""
                />
      
                <CardContent>
                    <Typography variant='h5'>
                        {titleSample}
                    </Typography>
                    <Typography variant='subtitle2'>
                        {discriptiponSample}
                    </Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
  );
}

export default UCItem;