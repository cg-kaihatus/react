import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Button, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AUUserList = (
    {allChecked, checked, handleCheckAll, handleCheck, contents, showList, showType, page, companyId, setUnreadCount, chatStatusList, setChatStatusList}
    :
    {
        allChecked: boolean; checked: boolean[]; handleCheckAll: () => void; handleCheck: (idx: number) => void;
        contents: any[], showList: number[], showType: number; page:number; companyId: number;
        setUnreadCount: (unreadCount: number) => void; chatStatusList: string[]; setChatStatusList: (chatStatusList: string[]) => void;
    }
) => {

    const navigate = useNavigate();


  return (
    <TableContainer component={Paper} sx={{border: 1, height: '540px', marginTop: '3px'}}>
        <Table stickyHeader sx={{ minWidth: 650 }}>
            <TableHead>
                <TableRow>
                    <TableCell width='40%'>
                        <Checkbox
                            checked={allChecked}
                            indeterminate={checked.includes(true) && !allChecked}
                            onChange={handleCheckAll}
                        />
                        氏名
                    </TableCell>
                    <TableCell width='20%' sx={{textAlign: 'center'}}>作成日</TableCell>
                    <TableCell width='20%' sx={{textAlign: 'center'}}>更新日</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {showList.map((id, idx) => {
                const p = contents.find(elem => elem.id === id)
                return (
                    <TableRow  key={id} >
                        <TableCell className="td-title" sx={{verticalAlign: 'top'}}>
                            <Checkbox  checked={checked[idx]} onChange={() => handleCheck(idx)} />
                            {p?.title}
                            <div className="inside-menu" style={{marginLeft: '24px'}}>
                                <Button
                                    sx={{height: '8px'}}
                                    onClick={() => navigate("/admin/user", {state:{userId: p?.id , companyId}})}
                                >
                                    編集
                                </Button>|
                                <Button sx={{height: '8px'}}>csv出力</Button>|
                                <Button sx={{height: '8px'}}>ゴミ箱へ</Button>
                            </div>
                        </TableCell>
                        <TableCell sx={{textAlign: 'center'}}>
                            {
                                p?.date.getFullYear() + "年" +
                                (p && p?.date.getMonth()+1) + "月" +
                                p?.date.getDate() + "日 " +
                                p?.time
                            }
                        </TableCell>
                        <TableCell sx={{textAlign: 'center'}}>
                            {p?.lastEdit}
                        </TableCell>
                    </TableRow>
                )
            })}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

export default AUUserList;