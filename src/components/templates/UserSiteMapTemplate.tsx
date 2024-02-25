import { useState } from 'react';
import UserFrame from "../organisms/UserFrame";
import USCollection from "../organisms/USCollection";
import { Container, Box, Grid } from '@mui/material';


const UserSiteMapTemplate = () => {
    const [windowWidth, setWindowWidth] = useState(window.outerWidth);
    const updateWidth = () => {
        setWindowWidth(window.outerWidth);
    }
    window.addEventListener('resize', updateWidth);

    return (
        <UserFrame title=''>
            <Container maxWidth='xl'>
                <Box sx={{height: '640px', maxWidth: '100%', overflowY: 'scroll'}}>
                    <USCollection windowWidth={windowWidth}/>
                    <USCollection windowWidth={windowWidth}/>
                    <USCollection windowWidth={windowWidth}/>
                </Box>
            </Container>
        </UserFrame>
    )
}

export default UserSiteMapTemplate