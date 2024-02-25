import AdminFrame from "../organisms/AdminFrame";
import { Box, Textarea } from "@mui/joy";

const AdminHomeTemplate = () => {

    return (
        <AdminFrame>
            <Box sx={{ height: 380, marginTop: '80px', marginX: '24px' }}>
                <Textarea
                    readOnly
                    color="neutral"
                    placeholder="掲示板"
                    minRows={16}
                    maxRows={16}
                />
            </Box>
            <Box sx={{ height: 230, marginTop: '60px', marginX: '24px' }}>
                <Textarea
                    readOnly
                    color="neutral"
                    placeholder="チャット履歴"
                    minRows={7}
                    maxRows={7}
                />
            </Box>
        </AdminFrame>
    )
}

export default AdminHomeTemplate