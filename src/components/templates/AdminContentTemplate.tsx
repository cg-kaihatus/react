import { ChangeEvent, useState, useCallback } from "react";
import { useLocation } from "react-router-dom";
import AdminFrame from "../organisms/AdminFrame";
import { TextField, Button, Container, FormControl, InputLabel, Select, MenuItem, Stack, Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import { Textarea } from "@mui/joy";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar'

type imageDataType = {
    src:string;
    imageFile:File;
  }


const AdminContentTemplate = () => {
    const location = useLocation();
    let isNew = true;
    if (location.state && location.state.pageId) {
        isNew = false;
    }
    const [title, setTitle] = useState('');
    const [pageType, setPageType] = useState('画像');
    const [category, setCategory] = useState('初級');
    const [element, setElement] = useState('メイン');
    const [pageRow, setPageRow] = useState('');
    const [status1, setStatus1] = useState('下書き保存');
    const [status2, setStatus2] = useState('非公開');
    const [status3, setStatus3] = useState('すぐに公開');
    const [reserveYear, setReserveYear] = useState(2024);
    const [reserveMonth, setReserveMonth] = useState(1);
    const [reserveDay, setReserveDay] = useState(1);
    const [reserveHour, setReserveHour] = useState(0);
    const [reserveMinute, setReserveMinute] = useState(0);


    const linkUrl = 'https://www.cross-zeal.com/resourcesite/';
    const levelUrl = ['elementarylevel/', 'intermediatelevel/', 'advancedlevel/'];
    const [titleUrl, setTitleUrl] = useState('');
    const [editingTitleUrl, setEditingTitleUrl] = useState('');

    const onChangeTitle = (value: string) => {
        if (title === titleUrl) {
            setTitleUrl(value);
        }
        setTitle(value);
    } 
    const [editingUrl, setEditingUrl] = useState(false);
    const onEditUrl = () => {
        if (editingUrl && editingTitleUrl.length > 0) {
            setTitleUrl(editingTitleUrl);
        }
        setEditingUrl(!editingUrl);
    }

    const [editingStatus1, setEditingStatus1] = useState(false);
    const [editingStatus2, setEditingStatus2] = useState(false);
    const [editingStatus3, setEditingStatus3] = useState(false);


    const [imageData, setImageData] = useState<imageDataType | null>(null);

    const handleChengeFile = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;
        const isImage = e.target.files[0].type.indexOf("image") != -1;
        const isVideo = e.target.files[0].type.indexOf("video") != -1;
        if((pageType === '画像' && isImage )|| (pageType === '動画' && isVideo)) {
            const URLObj = window.URL || window.webkitURL
            const imgSrc = URLObj.createObjectURL(e.target.files[0])
            setImageData({
                src:imgSrc,
                imageFile: e.target.files[0],
            });
        } else {
            alert(`${pageType}ファイルを設定してください。`);
        }
    }

    const handlePasteImage  = async(event: React.ClipboardEvent<HTMLDivElement>) => {
        const isImage = event.clipboardData.items[0].type.indexOf("image") != -1
        const isVideo = event.clipboardData.items[0].type.indexOf("video") != -1
        if((pageType === '画像' && isImage )|| (pageType === '動画' && isVideo)){
            const imageFile = event.clipboardData.items[0].getAsFile()
            if(imageFile!==null){
                const URLObj = window.URL || window.webkitURL
                const imgSrc = URLObj.createObjectURL(imageFile)
                setImageData({
                    src:imgSrc,
                    imageFile,
                });
            }
        }
    }

    return (
        <AdminFrame>
            <Container maxWidth={'xl'}>
                <Grid container sx={{marginTop: '48px'}} spacing={4}>
                    {isNew ? 
                        <Grid item xs={12} sx={{marginLeft: '20px'}}>新規ページを追加</Grid>
                        :
                        <Grid item xs={12} sx={{marginLeft: '20px'}}>
                            ページを編集
                            <Button sx={{marginLeft: '20px'}}>新規追加</Button>
                        </Grid>
                    }
                    <Grid item xs={7.4} sx={{marginLeft: '20px'}}>
                        <TextField
                            sx={{width: '100%'}}
                            placeholder="タイトルを追加"
                            onChange={(e) => onChangeTitle(e.target.value)}
                        />
                        <div>
                            <FormControl sx={{marginY: '18px', minWidth: '120px'}}>
                                <InputLabel id="page-type-select-label">ページの種類</InputLabel>
                                <Select
                                    labelId="page-type-select-label"
                                    id="page-type-select"
                                    value={pageType}
                                    label="ページの種類"
                                    onChange={(e) => {
                                        setPageType(e.target.value);
                                    }}
                                >
                                    <MenuItem value='画像'>画像</MenuItem>
                                    <MenuItem value='動画'>動画</MenuItem>  
                                </Select>
                            </FormControl>
                            <FormControl sx={{margin: '18px', minWidth: '120px'}}>
                                <InputLabel id="category-select-label">カテゴリー </InputLabel>
                                <Select
                                    labelId="category-select-label"
                                    id="category-select"
                                    value={category}
                                    label="カテゴリー"
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <MenuItem value='初級'>初級</MenuItem>
                                    <MenuItem value='中級'>中級</MenuItem>
                                    <MenuItem value='上級'>上級</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                label='検索タグ'
                                inputProps={{maxLength: 20}}
                                sx={{marginY: '18px', minWidth: '360px'}}
                            />
                        </div>
                        <div>
                            パーマリンク：{linkUrl}{levelUrl[category === '初級' ? 0 : category === '中級' ? 1 : 2]}
                            {!editingUrl ?
                                <span>{titleUrl}</span>
                                :
                                <TextField size="small" value={editingTitleUrl} onChange={(e)=>setEditingTitleUrl(e.target.value)}/>
                            }
                            <Button onClick={()=>onEditUrl()}>
                                {!editingUrl ? '編集' : 'OK'}
                            </Button>
                        </div>
                        <div>
                            ページ文
                            <Button variant="contained" sx={{margin: '12px'}} >
                                ファイルを追加
                                <input
                                    id='imageFile'
                                    type="file"
                                    style={{
                                        opacity:0,
                                        appearance: 'none',
                                        position: 'absolute',
                                    }}
                                    onChange={handleChengeFile}
                                />
                            </Button>
                        </div>
                        <div style={{height: '400px', border: '1px solid #CCC', overflowY: 'scroll'}}>
                            <Textarea
                                color="neutral"
                                minRows={2}
                                variant="plain"
                                sx={{'--Textarea-focusedHighlight': '#FFF'}}
                                onPaste={handlePasteImage}
                            />
                        {pageType === '画像' && imageData && imageData?.imageFile.type.includes('image') &&
                            <Box>
                            <ImageList cols={1} gap={8}>
                                <ImageListItem key={imageData.src}>
                                <ImageListItemBar
                                    position="below"
                                />
                                <img src={imageData.src}/>
                                </ImageListItem>
                            </ImageList>
                            </Box>
                        }
                        {pageType === '動画' && imageData && imageData?.imageFile.type.includes('video') &&
                            <div>
                                {`[動画ファイル：${imageData.imageFile.name}]`}
                            </div>
                            
                        }
                        {((pageType === '画像' && !imageData?.imageFile.type.includes('image')) ||
                         (pageType === '動画' && !imageData?.imageFile.type.includes('video'))) &&
                            <div style={{color: 'red'}}>{`※${pageType}ファイルを追加してください。`}</div>
                        }
                        </div>
                        <div style={{marginTop: '12px'}}>
                            検索結果表示文
                        </div>
                        <Textarea
                            color="neutral"
                            minRows={4}
                            maxRows={4}
                            sx={{marginBottom: '24px'}}
                        />
                    </Grid>

                    <Grid item xs={4} sx={{marginLeft: '10px'}}>
                        <div>
                            <FormControl sx={{minWidth: '48%'}}>
                                <InputLabel id="element-select-label">ページ属性</InputLabel>
                                <Select
                                    labelId="element-select-label"
                                    id="element-select"
                                    value={element}
                                    label="ページ属性"
                                    onChange={(e) => setElement(e.target.value)}
                                >
                                    <MenuItem value='メイン'>メイン</MenuItem>
                                    <MenuItem value='サブ'>サブ</MenuItem>  
                                </Select>
                            </FormControl>
                            <FormControl sx={{marginLeft: '4%', minWidth: '48%'}}>
                                <InputLabel id="page-row-select-label">順列</InputLabel>
                                <Select
                                    labelId="page-row-select-label"
                                    id="page-row-select"
                                    value={pageRow}
                                    label="順列"
                                    onChange={(e) => setPageRow(e.target.value)}
                                >
                                    <MenuItem value={`${element}1-1`}>{element}1-1</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div style={{width: '100%', marginTop: '12px'}}>
                            <div style={{color: '#EEE', backgroundColor: '#666', padding: '6px'}}>
                                ページ構成
                            </div>
                            <div style={{border: '1px solid #CCC', height: '200px', padding: '6px', overflowY: 'scroll'}}>
                                {title === '' ? '作成中ページ' : title}
                            </div>
                        </div>
                        <div><Button>資料選択アイコン選択</Button></div>
                        <div><TextField value='.../gazou-url.png' aria-readonly size="small" sx={{width: '100%'}}></TextField></div>
                        <div style={{marginTop: '6px'}}>資料選択紹介</div>
                        <Textarea
                            color="neutral"
                            minRows={3}
                            maxRows={3}
                            sx={{marginBottom: '24px'}}
                        />
                        <FormControl sx={{minWidth: '100%'}}>
                            <InputLabel id="auther-select-label">作成者</InputLabel>
                            <Select
                                labelId="auther-select-label"
                                id="auther-select"
                                value='Haruki Ishikawa'
                                label="作成者"
                            >
                                <MenuItem value='Haruki Ishikawa'>Haruki Ishikawa</MenuItem>
                            </Select>
                        </FormControl>
                        <div style={{marginTop: '6px'}}>公開</div>
                        <div style={{border: '1px solid #CCC', minHeight: '156px', padding: '6px'}}>
                            <Stack direction='row'>
                                <Box sx={{width: '65%'}}>
                                    <div>
                                        {!editingStatus1 ?
                                            <span style={{width: '180px', display: 'inline-block'}}>{status1}</span>
                                            :
                                            <FormControl sx={{width: '180px'}}>
                                                <Select
                                                    id="status1-select"
                                                    value={status1}
                                                    size="small"
                                                    onChange={(e)=>{
                                                        setStatus1(e.target.value);
                                                        setEditingStatus1(false);
                                                    }}
                                                >
                                                    <MenuItem value='下書き保存'>下書き保存</MenuItem>
                                                    <MenuItem value='レビュー待ち'>レビュー待ち</MenuItem>
                                                </Select>
                                            </FormControl>
                                        }
                                        <Button onClick={()=>setEditingStatus1(!editingStatus1)}>{!editingStatus1 ? '編集' : 'OK'}</Button>
                                    </div>
                                    <div>
                                        {!editingStatus2 ?
                                            <span style={{width: '180px', display: 'inline-block'}}>公開状態：{status2}</span>
                                            :
                                            <FormControl sx={{width: '180px'}}>
                                                <Select
                                                    id="status2-select"
                                                    value={status2}
                                                    size="small"
                                                    onChange={(e)=>{
                                                        setStatus2(e.target.value);
                                                        setEditingStatus2(false);
                                                    }}
                                                >
                                                    <MenuItem value='公開'>公開</MenuItem>
                                                    <MenuItem value='非公開'>非公開</MenuItem>
                                                </Select>
                                            </FormControl>
                                        }
                                        <Button onClick={()=>setEditingStatus2(!editingStatus2)}>{!editingStatus2 ? '編集' : 'OK'}</Button>
                                    </div>
                                    <div>
                                        {!editingStatus3 ?
                                            <span style={{width: '180px', display: 'inline-block'}}>
                                                {status3}
                                                {status3 === '予約' &&
                                                    <span>
                                                        ：{reserveYear}/{reserveMonth}/{reserveDay} {reserveHour}:{'00'.concat(String(reserveMinute)).slice(-2)}
                                                    </span>
                                                }
                                            </span>
                                            :
                                            <FormControl sx={{width: '180px'}}>
                                                <Select
                                                    id="status3-select"
                                                    value={status3}
                                                    size="small"
                                                    onChange={(e)=>{
                                                        setStatus3(e.target.value);
                                                        if (e.target.value !== '予約') {
                                                            setEditingStatus3(false);
                                                        }
                                                    }}
                                                >
                                                    <MenuItem value='すぐに公開'>すぐに公開</MenuItem>
                                                    <MenuItem value='予約'>予約</MenuItem>
                                                </Select>
                                            </FormControl>
                                        }
                                        <Button onClick={()=>setEditingStatus3(!editingStatus3)}>{!editingStatus3 ? '編集' : 'OK'}</Button>
                                    </div>
                                    {editingStatus3 && status3 === '予約' &&
                                        <div>
                                            <div style={{marginTop: '6px'}}>
                                                <TextField size="small" label='年' value={reserveYear} onChange={(e)=>setReserveYear(Number(e.target.value))} inputProps={{maxLength: 4}} sx={{width: '65px'}}/>
                                                <TextField size="small" label='月' value={reserveMonth} onChange={(e)=>setReserveMonth(Number(e.target.value))} inputProps={{maxLength: 2}} sx={{width: '55px'}} />
                                                <TextField size="small" label='日' value={reserveDay} onChange={(e)=>setReserveDay(Number(e.target.value))} inputProps={{maxLength: 2}} sx={{width: '55px'}} />
                                                <TextField size="small" label='時' value={reserveHour} onChange={(e)=>setReserveHour(Number(e.target.value))} inputProps={{maxLength: 2}} sx={{width: '50px', marginLeft: '6px'}} />
                                                <TextField size="small" label='分' value={reserveMinute} onChange={(e)=>setReserveMinute(Number(e.target.value))} inputProps={{maxLength: 2}} sx={{width: '50px'}} />
                                            </div>
                                        </div>
                                    }
                                </Box>
                                <Box sx={{width: '35%', maxHeight: '156px'}}>
                                    <Button>変更をプレビュー</Button>
                                    <div style={{height: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                        <Button sx={{fontSize: '24px', padding: '24px'}}>公開</Button>
                                    </div>
                                </Box>
                            </Stack>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </AdminFrame>
    )
}

export default AdminContentTemplate