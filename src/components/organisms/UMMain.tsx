import UMDisplay from "../molecules/UMDisplay";
import UMSubMenu from "../molecules/UMSubMenu";
import { Container, Box, Grid, AppBar, Typography} from '@mui/material';

const UMMain = () => {

    return (
        <Container maxWidth='lg'>
            <Box sx={{padding: 1}}>
                <UMDisplay />
                <UMSubMenu />
            </Box>
        </Container>
    );
}

export default UMMain;