import UserFrame from "../organisms/UserFrame";
import { Container, Box, Typography, Grid, Button } from '@mui/material';

const UserContactTemplate = () => {

    return (
        <UserFrame title=''>
            <Container maxWidth='sm'>
                <Box sx={{height: '600px', width: '100%', padding: '20px'}}>
                    <Grid 
                            container alignItems="center" direction="column" 
                    >
                        <Box>
                            <Typography>
                                Login ID
                            </Typography>
                            <input type="text" size={50} />
                            <Typography sx={{paddingTop: '10px'}}>
                                Title
                            </Typography>
                            <input type="text" size={50} />
                            <Typography sx={{paddingTop: '10px'}}>
                                Message
                            </Typography>
                            <textarea rows={20} cols={48} maxLength={500}/>
                        </Box>
                        <Button variant='outlined' sx={{marginTop: '20px'}}>
                            送信
                        </Button>
                    </Grid>
                </Box>
            </Container>
        </UserFrame>
    )
}

export default UserContactTemplate