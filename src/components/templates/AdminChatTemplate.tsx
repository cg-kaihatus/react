import AdminFrame from "../organisms/AdminFrame";
import { Box, Textarea } from "@mui/joy";
import { Grid, Button, TextField, Stack, Checkbox } from "@mui/material";
import { useLocation } from "react-router-dom";

const AdminChatTemplate = () => {
    const location = useLocation();
    let userId = 0;
    if (location.state?.userId) {
        userId = location.state.userId;
    }

    const company = '会社1';
    const userName = '加藤 ' + ['一郎', '次郎', '三郎'][userId-1];
    const customerChat1 = '利用者のチャットああああああああああああああああああああああああああ。'
    const adminChat1 = '管理者のチャットいいいいいいいいいいいいいいい。'

    return (
        <AdminFrame>
            <Grid container sx={{ marginTop: '80px', marginX: '30px' }}>
                <Grid xs={6}>
                    <div>{company}</div>
                    <div style={{marginBottom: '24px'}}>{userName}</div>
                    <div style={{marginBottom: '24px'}}>
                        <span style={{marginRight: '6px'}}>担当者</span>
                        <TextField size='small'/>
                    </div>
                    <div style={{marginBottom: '24px'}}>チャット文</div>
                    <Box sx={{ height: 380, marginRight: '24px', marginBottom: '24px' }}>
                        <Textarea
                            color="neutral"
                            minRows={16}
                            maxRows={16}
                        />
                    </Box>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="contained">送信</Button>
                    </div>
                </Grid>
                <Grid xs={5}>
                    <div style={{marginTop: '80px', marginBottom: '24px'}}>プレビュー</div>
                    <Box sx={{ height: '434px' }} border={1} borderRadius='12px' borderColor='#dadada' padding='12px' marginBottom='4px'>
                        <Box marginBottom='12px'>
                            <Stack direction="row">
                                <Box sx={{marginRight: '6px', display: 'flex', alignItems: 'flex-end'}}>既読</Box>
                                <Box sx={{maxWidth: '360px', padding: '6px'}} border={1} borderRadius='12px' borderColor='#dadada'>{customerChat1}</Box>
                            </Stack>
                        </Box>
                        <Box display='flex' justifyContent='flex-end'>
                            <Stack direction="row">
                                <Box sx={{marginRight: '6px', display: 'flex', alignItems: 'flex-end'}}>既読</Box>
                                <Box sx={{maxWidth: '360px', padding: '6px'}} border={1} borderRadius='12px' borderColor='#dadada'>{adminChat1}</Box>
                                <Box sx={{marginX: '6px', display: 'flex', alignItems: 'center'}}>
                                    <Checkbox />
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                    <div style={{textAlign: 'center'}}>
                        <Button variant="contained">削除</Button>
                    </div>
                </Grid>
            </Grid>
        </AdminFrame>
    )
}

export default AdminChatTemplate