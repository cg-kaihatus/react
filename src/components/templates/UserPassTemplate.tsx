import UserFrame from "../organisms/UserFrame";
import { Container, Box, Typography, Grid, Button } from '@mui/material';


const UserPassTemplate = () => {

    return (
        <UserFrame title=''>
            <Container maxWidth='sm'>
                <Box sx={{height: '600px', width: '100%', padding: '20px'}}>
                    <Grid 
                            container alignItems="center" direction="column" 
                    >
                        <Box>
                            <Typography>
                                現在のパスワード
                            </Typography>
                            <input type="password" size={50} />
                            <Typography sx={{paddingTop: '10px'}}>
                                新しいパスワード
                            </Typography>
                            <input type="password" size={50} />
                            <Typography sx={{paddingTop: '10px'}}>
                                新しいパスワードの確認
                            </Typography>
                            <input type="password" size={50} />
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

export default UserPassTemplate