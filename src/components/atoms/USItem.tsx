import * as React from 'react';
import { Box, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import sampleImg from "../../statics/img/cat240.png";

const categoryTitle: string = "〇カテゴリタイトル"


const USItem = () => {


  return (
    <Card sx={{ display: 'flex', margin: 2 }}>
        <CardActionArea href='/material' target='_blank'>
            <Box>
                <CardMedia
                    component="img"
                    sx={{ width: '230px', height: '230px' }}
                    image={sampleImg}
                    alt=""
                />
      
                <CardContent>
                    <Typography variant='subtitle2'>
                      資料解説文資料解説文資料解説文資料解説文資料解説文。
                    </Typography>
                </CardContent>
            </Box>
        </CardActionArea>
    </Card>
  );
}

export default USItem;