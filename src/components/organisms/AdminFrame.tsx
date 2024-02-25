import * as React from 'react';
import { AppBar, Toolbar, Box, Button, Drawer, IconButton,
    List, ListItem, ListItemButton, ListItemText, Collapse,
    Paper, MenuList, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface AdminTemplateProps {
    children: React.ReactNode;
}

const AdminFrame: React.FC<AdminTemplateProps>  = ({children}) => {
    const UnreadCompanyChat = 30;
    const UnreadIndivisualChat = 11;

    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [openPageSub, setOpenPageSub] = useState(false);
    const [openChatSub, setOpenChatSub] = useState(false);
    const [openUserSub, setOpenUserSub] = useState(false);

    const menuWidth = 180;
    const [menuOpenPage, setMenuOpenPage] = useState(false);
    const [menuOpenChat, setMenuOpenChat] = useState(false);
    const [menuOpenUser, setMenuOpenUser] = useState(false);


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar 
                position="fixed" 
                sx={{backgroundColor: 'white', color: 'black',
                    zIndex:(theme)=>theme.zIndex.drawer+1}} 
            >
                <Toolbar variant="dense">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        sx={{ ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    {[
                        {name: "管理画面", url: "/admin/home"},
                        {name: "サイト表示", url: "/#"},
                        {name: "ページの管理", url: "/admin/page"},
                        {name: "チャットの管理", url: "/admin/chat-company"},
                        {name: "お知らせの管理", url: "/#"},
                        {name: "ユーザーの管理", url: "/admin/user-company"}
                    ].map((item, index) => (
                        <Button onClick={() => navigate(item.url)} key={index} sx={{width: '125px', color: 'black'}}>
                            <b>{item.name}</b>
                        </Button>
                    ))}
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                width: '200px',
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: '200px',
                },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <List sx={{marginTop: '48px'}}>
                    <ListItem disablePadding>
                        <ListItemButton href="/admin/home">
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    HOME
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenPageSub(!openPageSub)}
                            onMouseOver={() => setMenuOpenPage(true)}
                            onMouseLeave={() => setMenuOpenPage(false)}
                        >
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    ページ
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>  
                    <ListItem disablePadding>
                        <ListItemButton 
                            onClick={() => setOpenChatSub(!openChatSub)}
                            onMouseOver={() => setMenuOpenChat(true)}
                            onMouseLeave={() => setMenuOpenChat(false)}
                        >
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    チャット
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    お知らせ
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            onClick={() => setOpenUserSub(!openUserSub)}
                            onMouseOver={() => setMenuOpenUser(true)}
                            onMouseLeave={() => setMenuOpenUser(false)}
                        >
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    ユーザー
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton href="#">
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    メディア
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton href="#">
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    ツール
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={handleDrawerClose}>
                            <ListItemText>
                                <div style={{textAlign: 'center'}}>
                                    メニューを閉じる
                                </div>
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Drawer>

            <div hidden={!menuOpenPage} style={{position: 'absolute', zIndex: 99, top: '100px', left: '200px'}}>
                <Paper sx={{ width: menuWidth }}>
                    <MenuList
                        dense
                        onMouseOver={() => setMenuOpenPage(true)}
                        onMouseLeave={() => setMenuOpenPage(false)}
                    >
                        <MenuItem
                            onClick={() => navigate("/admin/content")}
                        >
                            <ListItemText inset><div style={{textAlign: 'left'}}>追加</div></ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </div>
            <div hidden={!menuOpenChat} style={{position: 'absolute', zIndex: 99, top: '150px', left: '200px'}}>
                <Paper sx={{ width: menuWidth }}>
                    <MenuList
                        dense
                        onMouseOver={() => setMenuOpenChat(true)}
                        onMouseLeave={() => setMenuOpenChat(false)}
                    >
                        <MenuItem
                            onClick={() => navigate("/admin/chat-company")}
                        >
                            <ListItemText inset><div style={{textAlign: 'left'}}>企業（{UnreadCompanyChat}）</div></ListItemText>
                        </MenuItem>
                        <MenuItem
                            onClick={() => navigate("/admin/chat-user")}
                        >
                            <ListItemText inset><div style={{textAlign: 'left'}}>一般（{UnreadIndivisualChat}）</div></ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </div>
            <div hidden={!menuOpenUser} style={{position: 'absolute', zIndex: 99, top: '250px', left: '200px'}}>
                <Paper sx={{ width: menuWidth }}>
                    <MenuList
                        dense
                        onMouseOver={() => setMenuOpenUser(true)}
                        onMouseLeave={() => setMenuOpenUser(false)}
                    >
                        <MenuItem
                            onClick={() => navigate("/admin/user-company")}
                        >
                            <ListItemText inset><div style={{textAlign: 'left'}}>企業</div></ListItemText>
                        </MenuItem>
                        <MenuItem
                            onClick={() => navigate("/admin/user-list", {state:{companyId: 0}})}
                        >
                            <ListItemText inset><div style={{textAlign: 'left'}}>一般</div></ListItemText>
                        </MenuItem>
                    </MenuList>
                </Paper>
            </div>

            <Box sx={{width:'100%'}}>
                {children}
            </Box>
        </Box>
    );
}

export default AdminFrame;