import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ACCompanyList = (
    {allChecked, checked, handleCheckAll, handleCheck, contents, showList, showType}
    :
    {
        allChecked: boolean; checked: boolean[]; handleCheckAll: () => void; handleCheck: (idx: number) => void;
        contents: any[], showList: number[], showType: number;
    }
) => {

    const navigate = useNavigate();


  return (
    <TableContainer component={Paper} sx={{border: 1, height: '540px', marginTop: '3px'}}>
        <Table stickyHeader sx={{ minWidth: 650 }}>
            <TableHead>
                <TableRow>
                    <TableCell width='60%'>
                        <Checkbox
                            checked={allChecked}
                            indeterminate={checked.includes(true) && !allChecked}
                            onChange={handleCheckAll}
                        />
                        企業名
                    </TableCell>
                    <TableCell width='20%' sx={{textAlign: 'center'}}>新着日</TableCell>
                    <TableCell width='20%' sx={{textAlign: 'center'}}>更新日</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
            {showList.map((id, idx) => {
                const p = contents.find(elem => elem.id === id)
                return (
                    <TableRow  key={id}>
                        <TableCell className="td-title" sx={{verticalAlign: 'top'}}>
                            <Checkbox  checked={checked[idx]} onChange={() => handleCheck(idx)} />
                            <Button  onClick={()=>navigate("/admin/chat-user", {state: {companyId: String(p?.id)}})}>{p?.title}</Button>
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

export default ACCompanyList;