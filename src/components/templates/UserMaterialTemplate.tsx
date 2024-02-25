import { Link } from 'react-router-dom'
import UserFrame from "../organisms/UserFrame";
import UMMain from "../organisms/UMMain";
import UHNavigation from '../organisms/UHNavigation';
import UHInformation from '../organisms/UHInformation';
import UMIndex from "../molecules/UMIndex";
import { Container, Box, Grid, AppBar, Typography} from '@mui/material';

const materialTitle: string = "資料タイトル"

const UserMaterialTemplate = () => {

    return (
        <UserFrame title={materialTitle}>
            <Grid container>
                <Grid xs={12} md={8}>
                    <UMMain />
                </Grid>
                <Grid xs={12} md={4}>
                    <Container maxWidth='md'>
                        <UMIndex />
                    </Container>
                </Grid>
            </Grid>
        </UserFrame>
    )
}

export default UserMaterialTemplate