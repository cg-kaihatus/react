import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Checkbox, Button, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const APageList = (
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
                        タイトル
                    </TableCell>
                    <TableCell width='20%' sx={{textAlign: 'center'}}>作成者</TableCell>
                    <TableCell width='20%' sx={{textAlign: 'center'}}>日付</TableCell>
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
                            {showType !== 4 ?
                                <div className="inside-menu" style={{marginLeft: '24px'}}>
                                    <Button
                                        sx={{height: '10px'}}
                                        onClick={() => navigate("/admin/content", {state:{pageId: p?.id}})}
                                    >
                                        編集
                                    </Button>|
                                    <Button sx={{height: '10px', marginX: '6px'}}>ゴミ箱へ移動</Button>|
                                    <Button sx={{height: '10px'}}>表示</Button>
                                </div>
                                :
                                <div className="inside-menu" style={{marginLeft: '24px'}}>
                                    <Button sx={{height: '10px'}}>復元</Button>|
                                    <Button sx={{height: '10px', marginX: '6px'}}>完全に削除</Button>
                                </div>
                            }
                        </TableCell>
                        <TableCell sx={{verticalAlign: 'top'}}>
                            {p?.auther}
                        </TableCell>
                        <TableCell sx={{verticalAlign: 'top'}}>
                            <div>{p?.pageStatus}</div>
                            <div>
                                {
                                    p?.date.getFullYear() + "年" +
                                    (p && p?.date.getMonth()+1) + "月" +
                                    p?.date.getDate() + "日"
                                }
                            </div>
                            <div>{p?.time}</div>
                        </TableCell>
                    </TableRow>
                )
            })}
            </TableBody>
        </Table>
    </TableContainer>
  );
}

export default APageList;