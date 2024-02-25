import AdminFrame from "../organisms/AdminFrame";
import { Box, Textarea } from "@mui/joy";
import { Grid, Button, TextField, Stack, Checkbox, Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const AdminUserTemplate = () => {
    const location = useLocation();
    let userId = 0;
    if (location.state?.userId) {
        userId = location.state.userId;
    }
    let companyId = 0;
    if (location.state?.companyId) {
        companyId = location.state.companyId;
    }

    const [isCompanyUser, setIsCompanyUser] = useState(companyId !== 0);
    const companies = [{value: 0 , label: ''}, {value: 1 , label: '会社1'}, {value: 2 , label: '会社2'}, {value: 3 , label: '会社3'}];
    const [company, setCompany] = useState(companies[companyId]);

    const [lockUserId, setLockUserId] = useState(true);
    const [lockPassword, setLockPassword] = useState(true);
    const [lockNoteAddress, setLockNoteAddress] = useState(true);
    
    const userName = '加藤 ' + ['一郎', '次郎', '三郎'][userId-1];
    const customerChat1 = '利用者のチャットああああああああああああああああああああああああああ。'
    const adminChat1 = '管理者のチャットいいいいいいいいいいいいいいい。'

    return (
        <AdminFrame>
            <div style={{margin: '64px', maxWidth:'600px'}}>
                <div style={{marginBottom: '24px'}}>
                    ユーザー{userId === 0 ? '新規登録' : '編集'}
                </div>
                <div style={{marginBottom: '24px'}}>
                    <Checkbox checked={isCompanyUser} onChange={()=>setIsCompanyUser(true)}/>企業
                    <Checkbox checked={!isCompanyUser} onChange={()=>setIsCompanyUser(false)}/>一般
                </div>
                <div style={{marginBottom: '24px'}}>
                    <InputLabel id="company-select-label">企業名選択</InputLabel>
                    <Select
                        sx={{minWidth: '220px', marginRight: '24px'}}
                        labelId='company-select-label'
                        value={company.value}
                        defaultValue={company.value}
                        onChange={(e)=> {
                            setCompany(companies[e.target.value as number]);

                         }}
                    >
                        {companies.map((item) => (
                            <MenuItem value={item.value}>{item.label}</MenuItem>
                        ))}
                    </Select>
                    <TextField label='企業名追加'/>
                </div>
                <div style={{marginBottom: '24px'}}>
                    <TextField label='ユーザーID' sx={{marginRight: '24px'}} disabled={lockUserId}/>
                    <TextField label='ユーザーID確認' sx={{marginRight: '24px'}} disabled={lockUserId}/>
                    <Button onClick={()=>setLockUserId(true)}>固定</Button>
                    <Button onClick={()=>setLockUserId(false)}>編集</Button>
                </div>
                <div style={{marginBottom: '24px'}}>
                    <TextField label='パスワード' sx={{marginRight: '24px'}} disabled={lockPassword}/>
                    <TextField label='パスワード確認' sx={{marginRight: '24px'}} disabled={lockPassword}/>
                    <Button onClick={()=>setLockPassword(true)}>固定</Button>
                    <Button onClick={()=>setLockPassword(false)}>編集</Button>
                </div>
                <div style={{marginBottom: '24px'}}>
                    <TextField label='通知先' sx={{minWidth: '400px',marginRight: '24px'}} disabled={lockNoteAddress}/>
                    <Button onClick={()=>setLockNoteAddress(true)}>固定</Button>
                    <Button onClick={()=>setLockNoteAddress(false)}>編集</Button>
                </div>
                <div style={{marginBottom: '24px'}}>
                    <TextField label='作成者' sx={{minWidth: '400px',marginRight: '24px'}}/>
                </div>
                <div style={{textAlign: 'center'}}>
                    <Button variant="contained">登録</Button>
                </div>
            </div>
        </AdminFrame>
    )
}

export default AdminUserTemplate