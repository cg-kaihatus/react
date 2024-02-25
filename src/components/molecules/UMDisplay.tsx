import { Box, Grid} from '@mui/material';

import sampleImg from "../../statics/img/cat240.png";

const UMDisplay = () => {

    return (
        <Box overflow='scroll' sx={{height: '480px'}}>
            <Grid container direction="column" alignItems="center">
                <img src={sampleImg} height={400} width={400} alt=""/>
            </Grid>
        </Box>
    );
}

export default UMDisplay;