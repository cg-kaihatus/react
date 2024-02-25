import { Link } from 'react-router-dom'
import UserFrame from "../organisms/UserFrame";
import UHSlides from "../organisms/UHSlides";
import UHNavigation from '../organisms/UHNavigation';
import UHInformation from '../organisms/UHInformation';
import { Container, Box, AppBar, Typography} from '@mui/material';


const UserHomeTemplate = () => {

    return (
        <UserFrame title=''>
            <UHSlides />
            <UHNavigation />
            <UHInformation />
        </UserFrame>
    )
}

export default UserHomeTemplate