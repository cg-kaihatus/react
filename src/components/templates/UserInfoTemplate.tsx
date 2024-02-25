import UserFrame from "../organisms/UserFrame";
import { Container, Box, Typography } from '@mui/material';


const UserInfoTemplate = () => {

    return (
        <UserFrame title=''>
            <Container maxWidth='sm'>
                <Box sx={{height: '600px', width: '100%', padding: '20px'}}>
                    <Typography>
                        LoginID
                    </Typography>
                    <input readOnly type="text" size={50} value="sample@test.com"/>
                    <Typography sx={{paddingTop: '10px'}}>
                        Company Name
                    </Typography>
                    <input readOnly type="text" size={50} value="○○株式会社"/>
                </Box>
            </Container>
        </UserFrame>
    )
}

export default UserInfoTemplate