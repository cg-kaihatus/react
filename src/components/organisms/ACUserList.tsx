import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Button, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ACUserList = (
    {allChecked, checked, handleCheckAll, handleCheck, contents, showList, showType, page, setUnreadCount, chatStatusList, setChatStatusList}
    :
    {
        allChecked: boolean; checked: boolean[]; handleCheckAll: () => void; handleCheck: (idx: number) => void;
        contents: any[], showList: number[], showType: number; page:number;
        setUnreadCount: (unreadCount: number) => void; chatStatusList: string[]; setChatStatusList: (chatStatusList: string[]) => void;
    }
) => {

    const navigate = useNavigate();
    const onHandleChange = (index: number, chatStatus: string) => {
        const tmpStatuses: string[] = [];
        let tmpUnreadCount = 0;
        chatStatusList.forEach((elem, idx) => {
            if (idx === index)  {
                tmpStatuses.push(chatStatus);
                if (chatStatus === "未対応") tmpUnreadCount++;
            } else {
                tmpStatuses.push(chatStatusList[idx]);
                if (chatStatusList[idx] === "未対応") tmpUnreadCount++;
            }
        });
        setChatStatusList(tmpStatuses);
        setUnreadCount(tmpUnreadCount);
    }


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
                    <TableCell width='20%' sx={{textAlign: 'center'}}>対応状況</TableCell>
                    <TableCell width='20%' sx={{textAlign: 'center'}}>新着日</TableCell>
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
                                    onClick={() => navigate("/admin/chat", {state:{userId: p?.id}})}
                                >
                                    チャット
                                </Button>|
                                <Button sx={{height: '8px'}}>csv出力</Button>
                            </div>
                        </TableCell>
                        <TableCell sx={{verticalAlign: 'top'}}>
                            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                                <Select
                                    id="select-small"
                                    value={chatStatusList[idx]}
                                    onChange={(e) => onHandleChange((page * 20 + idx), e.target.value)}
                                >
                                    <MenuItem value='未対応'>未対応</MenuItem>
                                    <MenuItem value='対応済み'>対応済み</MenuItem>
                                    <MenuItem value='保留'>保留</MenuItem>
                                </Select>
                            </FormControl>
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

export default ACUserList;