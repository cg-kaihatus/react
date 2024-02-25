import { useLocation } from "react-router-dom";
import AdminPageTemplate from "../templates/AdminPageTemplate";

const AdminUserListPage = () => {
    let companyId = 0;
    const location = useLocation();
    if (location.state?.companyId) {
        companyId = location.state.companyId;
    }

    return (
        <AdminPageTemplate bizType="user" companyId={companyId}/>
    )
}

export default AdminUserListPage