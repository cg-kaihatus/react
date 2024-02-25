import UserFrame from "../organisms/UserFrame";
import { Container, Box, Typography, Button } from '@mui/material';


const UserMailTemplate = () => {

    return (
        <UserFrame title=''>
            <Container maxWidth='sm'>
                <Box sx={{height: '600px', width: '100%', padding: '20px'}}>
                    <Typography>
                        メールアドレス入力
                    </Typography>
                    <input type="text" size={50}/>
                    <Typography sx={{paddingTop: '10px', color: 'red'}}>
                        管理者へ問い合わせを行って下さい
                    </Typography>
                    <Button variant="outlined">仮パスワード発行</Button>
                </Box>
            </Container>
        </UserFrame>
    )
}

export default UserMailTemplate