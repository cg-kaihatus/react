import UserFrame from "../organisms/UserFrame";
import { Container, Box, Grid, Typography } from '@mui/material';


const UserTermsTemplate = () => {

    return (
        <UserFrame title=''>
            <Container maxWidth='lg'>
                <Box sx={{height: '640px', width: '100%', overflow: 'scroll'}}>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={2}>
                            <Typography variant="h5" sx={{margin: '20px'}}>
                                利用規約
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </UserFrame>
    )
}

export default UserTermsTemplate