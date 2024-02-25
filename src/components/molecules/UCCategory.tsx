import * as React from 'react';
import UCItem from "../atoms/UCItem";
import { Box, Typography, Divider } from '@mui/material';

const categoryTitle: string = "〇カテゴリタイトル"


const UCCategory = () => {


  return (
    <Box sx={{padding: '10px'}}>
      <Typography variant="h6">
        {categoryTitle}
      </Typography>
      <Divider />
      <UCItem />
      <UCItem />
      <UCItem />
    </Box>
  );
}

export default UCCategory;