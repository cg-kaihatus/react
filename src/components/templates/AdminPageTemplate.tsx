import AdminFrame from "../organisms/AdminFrame";
import { useState, useEffect } from "react";
import { Box } from "@mui/joy";
import {
    Button, ButtonGroup, Grid, TextField, Select, Container, MenuItem, FormControl, InputLabel
} from "@mui/material";
import { formatDate } from "../../utils/util";
import '../../statics/styles/table.css';
import { useNavigate } from "react-router-dom";
import APageList from "../organisms/APageList";
import ACCompanyList from "../organisms/ACCompanyList";
import ACUserList from "../organisms/ACUserList";
import AUCompanyList from "../organisms/AUCompanyList";
import AUUserList from "../organisms/AUUserList";

interface PageI{
    id: number;
    title: string;
    auther: string;
    pageStatus: string;
    date: Date;
    time: string;
    lastEdit: string;
    chatStatus: string;
    deleteFlg: boolean;
}

const AdminPageTemplate = ({bizType, companyId = 0} : {
    bizType: "contents" | "chatCompany" | "userCompany" | "chatUser" | "user" ; companyId?: number;
}) => {
    const sample: PageI[] = [];
    for (let i = 0; i < 56; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        sample.push({
            id: i + 1,
            title: "コンテンツ" + i,
            auther: "h-ishikawa@cross-zeal.com",
            pageStatus: i%4 === 0 ? "最終更新日" : i%3 === 0 ? "公開済み" : i%3 === 1 ? "非公開" : "編集",
            date,
            time: "00:00",
            lastEdit: "",
            chatStatus: "",
            deleteFlg: i%4 === 0
        })
    }
    sample.sort(function(a, b){
        return (a.date < b.date ? 1 : -1);
    });

    const sampleCompanies: PageI[] = [];
    for (let i = 0; i < 3; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        sampleCompanies.push({
            id: i + 1,
            title: "会社" + (i + 1),
            auther: '',
            pageStatus: i%3 === 0 ?  "非公開" : "公開済み",
            date,
            time: '00:00',
            lastEdit: date.getFullYear() + "年" +
                (date.getMonth()+1) + "月" +
                date.getDate() + "日 " +
                "00:00",
            chatStatus: "",
            deleteFlg: false,
        })
    }
    sampleCompanies.sort(function(a, b){
        return (a.id >= b.id ? 1 : -1);
    });

    const sampleUsers: PageI[] = [];
    const unread = 1;
    const cStatuses = ["未対応", "対応済み", "保留"];
    for (let i = 0; i < 3; i++) {
        const date = new Date();
        date.setDate(date.getDate() + i);
        sampleUsers.push({
            id: i + 1,
            title: "加藤 " + ["一郎", "次郎", "三郎"][i],
            auther: '',
            pageStatus: "公開済み",
            date,
            time: '00:00',
            lastEdit: date.getFullYear() + "年" +
                (date.getMonth()+1) + "月" +
                date.getDate() + "日 " +
                "00:00",
            chatStatus: cStatuses[i],
            deleteFlg: false,
        });
    }
    sampleUsers.sort(function(a, b){
        return (a.id >= b.id ? 1 : -1);
    });

    const companyName = '会社' + companyId;

    const contents: PageI[] = bizType === 'contents' ? sample 
        : (bizType === 'chatCompany' || bizType === 'userCompany') ? sampleCompanies : sampleUsers;

    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const pageSize = 20;
    const [maxPage, setMaxPage] = useState(1);
    const [lists, setLists] = useState<number[][]>([]);
    const [showList, setShowList] = useState<number[]>([]);
    // 0: all, 1: published, 2: unpublished, 3: editing, 4: deleted
    const [showType, setShowType] = useState(0);
    const [searchWord, setSearchWord] = useState('');
    const [writenSearchWord, setWritenSearchWord] = useState('');
    const [dateList, setDateList] = useState<string[]>([]);
    const [selectedDate, setSelectedDate] = useState('all');
    const [searchDate, setSearchDate] = useState('all');
    const [checked, setChecked] = useState([
        false, false, false, false, false, false, false, false, false, false, 
        false, false, false, false, false, false, false, false, false, false, 
    ]);
    const [allChecked, setAllChecked] = useState(false);
    const [unreadCount, setUnreadCount] = useState(unread);
    const [chatStatusList, setChatStatusList] = useState<string[]>(cStatuses);

    const setList = () => {
        const listAll : number[] = [];
        const listPublished : number[] =[];
        const listUnpublised : number[] = [];
        const listEditing : number[] = [];
        const listDeleted : number[] = [];
        const tmpDateList : string[] = [];

        contents.forEach(elem => {
            if(elem.deleteFlg) {
                listDeleted.push(elem.id);
            } else {
                listAll.push(elem.id);
                tmpDateList.push(formatDate(elem.date));
                switch(elem.pageStatus) {
                    case '公開済み' :
                        listPublished.push(elem.id); break;
                    case '非公開' :
                        listUnpublised.push(elem.id); break;
                    case '編集' :
                        listEditing.push(elem.id); break;
                    default :
                }
            }
        });

        setLists([listAll, listPublished, listUnpublised, listEditing, listDeleted]);
        setMaxPage(Math.ceil(listAll.length / pageSize));
        const defaultList = Array.from(listAll);
        setShowList(defaultList.splice(0, Math.min(pageSize, listAll.length)));
        setDateList(tmpDateList);
    }

    const setListItems = (forSerch: boolean, forSerchDate: boolean) => {
        const tmpShowList1: number[] = [];
        const tmpDateList: string[] = [];
        if(lists[showType]){
            lists[showType].forEach(elem => {
                const p = contents.find(page => page.id === elem);
                if(p) tmpDateList.push(formatDate(p.date));
                if(
                    p?.title.includes(forSerch ? writenSearchWord : searchWord)
                    && ((forSerchDate ? selectedDate : searchDate) === 'all'
                        || (forSerchDate ? selectedDate : searchDate) === formatDate(p.date))
                ) {
                    tmpShowList1.push(elem);
                }
            });
            const tmpShowList2: number[] = [];
            for(let i = 0; i < Math.min(tmpShowList1.length - page * pageSize, pageSize); i++) {
                tmpShowList2.push(tmpShowList1[pageSize * page + i]);
            }
            setShowList(tmpShowList2);
            setMaxPage(Math.ceil(tmpShowList1.length / pageSize));
            setDateList(tmpDateList);
            setChecked([
                false, false, false, false, false, false, false, false, false, false, 
                false, false, false, false, false, false, false, false, false, false, 
            ])
            setAllChecked(false);
        }  
    }

    const handleCheck = (idx: number) => {
        const tmpChecked = [];
        let isAllChecked = true;
        for(let i = 0; i < 20; i++) {
            tmpChecked.push(i === idx ? !checked[i] : checked[i]);
            if(i < showList.length && !tmpChecked[i]) isAllChecked = false;
        }
        setChecked(tmpChecked);
        setAllChecked(isAllChecked);
    }

    const handleCheckAll = () => {
        if(allChecked) {
            setAllChecked(false);
            setChecked([
                false, false, false, false, false, false, false, false, false, false, 
                false, false, false, false, false, false, false, false, false, false, 
            ])
        } else {
            setAllChecked(true);
            const tmpChecked = [];
            for(let i = 0; i < 20; i++) {
                tmpChecked.push(i < showList.length ? true : false);
            }
            setChecked(tmpChecked);
        }
    } 

    useEffect(() => {
        setList();
    }, [])

    useEffect(() => {
        setListItems(false, false);
    }, [showType, page])

    return (
        <AdminFrame>
            <Box sx={{ marginTop: '60px', marginX: '24px' }}>
                <Grid container>
                    <Grid xs={6}>
                        {bizType === 'contents' &&
                            <div>
                                <span style={{fontWeight: 'bold', margin: '0 10px'}}>ページ</span>
                                <Button onClick={() => navigate("/admin/content")}>新規追加</Button>
                            </div>
                        }
                        {bizType === 'contents' &&
                            <ButtonGroup variant="text" aria-label="text button group">
                                {['すべて', '公開済み', '非公開', '編集', 'ゴミ箱'].map((t, index) => (
                                    <Button
                                        key={t}
                                        onClick={()=>{
                                            setShowType(index);
                                            setPage(0);
                                        }}
                                        sx={{fontWeight: showType === index ? 'bold' : 'nomal'}}
                                    >
                                    {t} （{lists[index] && lists[index].length}）
                                    </Button>
                                ))}
                            </ButtonGroup>
                        }
                        {bizType === 'chatCompany' &&
                            <div>
                                <span style={{fontWeight: 'bold', margin: '0 10px'}}>チャット</span>
                            </div>
                        }
                        {bizType === 'userCompany' &&
                            <div>
                                <span style={{fontWeight: 'bold', margin: '0 10px'}}>企業</span>
                            </div>
                        }
                        {(bizType === 'chatCompany' || bizType === 'userCompany') &&
                            <ButtonGroup variant="text" aria-label="text button group">
                                {['すべて', '公開済み'].map((t, index) => (
                                    <Button
                                        key={t}
                                        onClick={()=>{
                                            setShowType(index);
                                            setPage(0);
                                        }}
                                        sx={{fontWeight: showType === index ? 'bold' : 'nomal'}}
                                    >
                                    {t} （{lists[index] && lists[index].length}）
                                    </Button>
                                ))}
                            </ButtonGroup>
                        }
                        {(bizType === 'chatUser' || bizType === 'user') &&
                            <div>
                                {companyId === 0 ?
                                    <span style={{fontWeight: 'bold', margin: '0 10px'}}>一般</span>
                                :
                                    <span style={{fontWeight: 'bold', margin: '0 10px'}}>{companyName}</span>
                                }
                                { bizType === 'user' &&
                                    <Button onClick={() => navigate("/admin/user", {state:{companyId}})}>新規追加</Button>
                                }
                            </div>
                        }
                        {bizType === 'chatUser' &&
                            <div style={{fontWeight: 'bold', margin: '4px 10px'}}>
                                未対応（{unreadCount}）
                            </div>
                        }
                        {bizType === 'user' &&
                            <ButtonGroup variant="text" aria-label="text button group">
                                {[`ユーザー数（${lists[0] && lists[0].length}）`, 'ゴミ箱'].map((t, index) => (
                                    <Button
                                        key={t}
                                        onClick={()=>{}}
                                        sx={{fontWeight: showType === index ? 'bold' : 'nomal'}}
                                    >
                                    {t}
                                    </Button>
                                ))}
                            </ButtonGroup>
                        }
                        <div>
                            <FormControl>
                            <InputLabel id="bulk-select" size="small">一括選択</InputLabel>
                                <Select
                                    labelId="bulk-select"
                                    size='small'
                                    sx={{marginX: '6px', width: '150px'}}
                                >
                                    <MenuItem value='del'>ゴミ箱へ移動</MenuItem>
                                </Select>
                            </FormControl>
                            <Button variant="contained" size="small" sx={{marginLeft: '6px', marginRight: '24px'}}>適用</Button>
                            <FormControl>
                                <Select
                                    size='small'
                                    sx={{marginX: '6px', width: '130px'}}
                                    value={selectedDate}
                                    defaultValue={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    placeholder={searchDate}
                                >
                                    <MenuItem value='all'>全ての日付</MenuItem>
                                    {dateList.map((item) => (
                                        <MenuItem value={item}>{item}</MenuItem>
                                    ))}
                                    {!dateList.includes(selectedDate) && 
                                        <MenuItem value={selectedDate}>
                                            {selectedDate === 'all' ? '全ての日付' : selectedDate}
                                        </MenuItem>
                                    }
                                </Select>
                            </FormControl>
                            <Button
                                variant="contained"
                                size="small"
                                sx={{marginLeft: '6px'}}
                                onClick={()=>{
                                    setSearchDate(selectedDate);
                                    setPage(0);
                                    setListItems(true, true);
                                }}
                            >
                                絞り込み
                            </Button>
                        </div>
                    </Grid>
                    <Grid xs={6} textAlign='right' marginTop={2}>
                        <Box sx={{margin: '6px'}}>
                            <TextField
                                size="small"
                                sx={{marginRight: '12px'}}
                                value={writenSearchWord}
                                onChange={(e)=>setWritenSearchWord(e.target.value)}
                            />
                            <Button
                                variant="contained"
                                onClick={()=>{
                                    setSearchWord(writenSearchWord);
                                    setPage(0);
                                    setListItems(true, false);
                                }}
                            >
                                ページを検索
                            </Button>
                        </Box>
                        <Box>
                            <span style={{margin: '0 12px'}}>{lists[showType] && lists[showType].length}個の項目</span>
                            <Button sx={{marginX: '3px'}} variant="contained" onClick={()=>setPage(0)}>«</Button>
                            <Button 
                                sx={{marginX: '3px'}} 
                                variant="contained"
                                onClick={()=>setPage(Math.max(0, page - 1))}
                            >
                                ‹
                            </Button>
                            <TextField
                                size="small"
                                sx={{marginX: '12px', width: '50px'}}
                                type='number'
                                value={page + 1}
                                onChange={(e)=>setPage(Math.min(Math.max(Number(e.target.value), 1), maxPage) - 1)}
                            />
                            <span style={{marginRight: '12px'}}>/ {maxPage}</span>
                            <Button 
                                sx={{marginX: '3px'}} 
                                variant="contained"
                                onClick={()=>setPage(Math.min(maxPage - 1, page + 1))}
                            >
                                ›
                            </Button>
                            <Button sx={{marginX: '3px'}} variant="contained" onClick={()=>setPage(maxPage - 1)}>»</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Container maxWidth='xl'>
                {bizType === "contents" && 
                    <APageList
                        allChecked={allChecked} checked={checked} handleCheckAll={handleCheckAll} handleCheck={handleCheck}
                        contents={contents} showList={showList} showType={showType}
                    />
                }
                {bizType === 'chatCompany' && 
                    <ACCompanyList
                        allChecked={allChecked} checked={checked} handleCheckAll={handleCheckAll} handleCheck={handleCheck}
                        contents={contents} showList={showList} showType={showType}
                    />
                }
                {bizType === 'userCompany' && 
                    <AUCompanyList
                        allChecked={allChecked} checked={checked} handleCheckAll={handleCheckAll} handleCheck={handleCheck}
                        contents={contents} showList={showList} showType={showType}
                    />
                }
                {bizType === "chatUser" && 
                    <ACUserList
                        allChecked={allChecked} checked={checked} handleCheckAll={handleCheckAll} handleCheck={handleCheck}
                        contents={contents} showList={showList} showType={showType} page={page}
                        setUnreadCount={setUnreadCount} chatStatusList={chatStatusList} setChatStatusList={setChatStatusList}
                    />
                }
                {bizType === "user" && 
                    <AUUserList
                        allChecked={allChecked} checked={checked} handleCheckAll={handleCheckAll} handleCheck={handleCheck}
                        contents={contents} showList={showList} showType={showType} page={page} companyId={companyId}
                        setUnreadCount={setUnreadCount} chatStatusList={chatStatusList} setChatStatusList={setChatStatusList}
                    />
                }
            </Container>
        </AdminFrame>
    )
}

export default AdminPageTemplate