import * as React from 'react';
import UCCategory from "../molecules/UCCategory";
import { Box, TableContainer } from '@mui/material';


const UCList = () => {


  return (
    <Box height={'640px'}>
        <TableContainer sx={{ maxHeight: '640px' }}>
            <UCCategory />
            <UCCategory />
            <UCCategory />
            <UCCategory />
        </TableContainer>
    </Box>
  );
}

export default UCList;