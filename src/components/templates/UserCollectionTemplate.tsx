import UserFrame from "../organisms/UserFrame";
import { Container } from '@mui/material';
import UCList from '../organisms/UCList';


const UserCollectionTemplate = () => {

    return (
        <UserFrame title=''>
            <Container maxWidth='lg'>
                <UCList />
            </Container>
        </UserFrame>
    )
}

export default UserCollectionTemplate