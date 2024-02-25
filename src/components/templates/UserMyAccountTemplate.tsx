import UserFrame from "../organisms/UserFrame";
import { Container, Box, Grid, Card, CardActionArea, CardMedia, CardContent, Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';


const UserMyAccountTemplate = () => {

    return (
        <UserFrame title=''>
            <Container maxWidth='lg'>
                <Box sx={{height: '600px'}}>
                    <Grid 
                        container alignItems="center" direction="row" 
                        paddingX={6} paddingY={3}
                    >
                        <Grid xs={6}>
                            <Card sx={{ display: 'flex', margin: 2 }}>
                                <CardActionArea href="/userInfo">
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <CardMedia>
                                            <PersonIcon sx={{fontSize: '120px'}}/>
                                        </CardMedia>
                                        <CardContent sx={{width: '280px'}}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                アカウント情報
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid xs={6}>
                            <Card sx={{ display: 'flex', margin: 2 }}>
                                <CardActionArea href="/userPass">
                                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                        <CardMedia>
                                            <LockOpenIcon sx={{fontSize: '120px'}}/>
                                        </CardMedia>
                                        <CardContent sx={{width: '280px'}}>
                                            <Typography gutterBottom variant="h6" component="div">
                                                パスワード確認・変更
                                            </Typography>
                                        </CardContent>
                                    </Box>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            
        </UserFrame>
    )
}

export default UserMyAccountTemplate