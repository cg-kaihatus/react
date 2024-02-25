import { useLocation } from "react-router-dom";
import AdminPageTemplate from "../templates/AdminPageTemplate";

const AdminChatUserPage = () => {
    let companyId = 0;
    const location = useLocation();
    if (location.state?.companyId) {
        companyId = location.state.companyId;
    }

    return (
        <AdminPageTemplate bizType="chatUser" companyId={companyId}/>
    )
}

export default AdminChatUserPage