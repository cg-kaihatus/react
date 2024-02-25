import React, {useState} from "react";
import { Grid, Box, Modal, Link } from '@mui/material';
import { styled, useTheme, alpha, makeStyles } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import UserChat from "./UserChat";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: 900,
      [theme.breakpoints.down('lg')]: {
        width: 600,
      },
      [theme.breakpoints.down('md')]: {
        width: 300,
      },
      [theme.breakpoints.down('sm')]: {
        width: 100,
      },
    },
  }));

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
        open?: boolean;
    }>(({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(0),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
    }));


interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));
  
  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  }));



export interface SearchTemplateProps {
    children: React.ReactNode;
    title: string;
}

const UserFrame: React.FC<SearchTemplateProps> = ({
    children,
    title,
}) => {

    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [chatOpen, setChatOpen] = useState(false);
    const handleOpen = () => setChatOpen(true);
    const handleClose = () => setChatOpen(false);

    const style = {
      position: 'absolute' as 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p:4,
    };
    

    return (
      <Box sx={{ display: 'flex' , maxWidth: '100%'}}>
        <CssBaseline />
        <AppBar position="fixed" open={open} sx={{
            backgroundColor: 'white', color: 'black'
        }}>
            <Box sx={{backgroundColor: 'darkgrey', color: '#eeeeee',
              height: 28, paddingTop: 0.5, paddingLeft: 1}}>
                <Typography variant="subtitle2" gutterBottom>
                    ZealGroup Educational Materials Websit
                </Typography>
            </Box>
            <Toolbar>
                <Typography 
                    variant="h6"
                    noWrap 
                    sx={{ flexGrow: 1,
                        width: 200,
                        minWidth: 140,
                        '&:hover': {
                          opacity: [0.7, 0.7, 0.7],
                      },
                    }} 
                    component="div"
                >
                    <Link href="/home" underline="none" color="black">
                      ZG-Education
                    </Link>
                </Typography>
                <Grid container direction="column" alignItems="center">
                {title === '' ?
                  <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="資料を検索　例：Java、AWS等"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                :
                  <Typography variant='h4' sx={{width: '100%'}}>
                    {title}
                  </Typography >
                }
                </Grid>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="end"
                    onClick={handleDrawerOpen}
                    sx={{ ...(open && { display: 'none' }) }}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
        <Main open={open}>
            <DrawerHeader />
            <Box sx={{height: 28,  width:'100%'}}/>
            {children}
            <Box
                sx={{
                    bgcolor: 'black',
                    color: 'white',
                    height: 140,
                    }}
            >
              <Grid container direction="column" alignItems="center">
                <Grid xs={12}>
                  <Box margin={2}>
                    <Box><Link href="/contact" underline="hover" color="inherit">
                      お問い合わせ
                    </Link></Box>
                    <Box><Link href="/sitemap" underline="hover" color="inherit">
                      サイトマップ
                    </Link></Box>
                    <Box><Link href="/terms" underline="hover" color="inherit">
                      利用規約
                    </Link></Box>
                  </Box>
                </Grid>
                <Grid xs={12}>
                  <Box>
                    Copyright © ZEAL HOLDINGS All Rights Reserved.
                  </Box>
                </Grid>
              </Grid>
            </Box>
        
        </Main>
        <Drawer
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
                width: drawerWidth,
            },
            }}
            variant="persistent"
            anchor="right"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
                   <ListItem key="Myアカウント" disablePadding>
                        <ListItemButton href="/myAccount">
                            <ListItemText primary="Myアカウント" />
                        </ListItemButton>
                    </ListItem>
            </List>
            <List>
                {['インフラ', 'システム'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton href="/collection">
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <List>
                   <ListItem key="教育担当者へチャット" disablePadding>
                        <ListItemButton onClick={handleOpen}>
                            <ListItemText primary="教育担当者へチャット" />
                        </ListItemButton>
                    </ListItem>
            </List>
            <Divider />
            <List>
                   <ListItem key="ログアウト" disablePadding>
                        <ListItemButton href="/login">
                            <ListItemText primary="ログアウト" />
                        </ListItemButton>
                    </ListItem>
            </List>
        </Drawer>
        <Modal
          open={chatOpen}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <UserChat 
              height={Math.floor(document.documentElement.clientHeight*0.7)}
            />
          </Box>
        </Modal>
      </Box>
    );
};

export default UserFrame;