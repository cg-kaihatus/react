import { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, TextField, Button, Link } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const LoginPage = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState<string>(""); //入力ユーザ
    const [password, setPassword] = useState<string>(""); //入力パスワード

    //---------------
    //ログイン処理
    //---------------
    const handleLogin = () => {
        if (uid === 'user' && password === '1234') {
            navigate("/home");
        } else if (uid === 'admin' && password === '1234') {
            navigate("/admin/home");
        } else {
            alert("ID・パスワードを入力してください。")
        }
    }

    return (
        <>
        <Container maxWidth="xs">
          <Box
            sx={{
                '& .MuiTextField-root': { m: 2, width: '36ch' },
            }}
          >
            <Box height={40} />
            <Grid container 
                alignItems='center' 
                justifyContent='center'
                spacing={1}
            >
                <Grid xs={7}>
                    <h1>ZG-Education</h1>
                </Grid>

                <Grid xs={11}>
                    <TextField
                        required
                        id="user_id"
                        label="User"
                        variant="filled"
                        size="small"
                        inputProps={{maxLength: 40}}
                        onChange={e => setUid(e.target.value)}
                        onKeyDown={k => {
                            if (k.keyCode === 13) {
                              handleLogin();
                            }
                          }}
                    />

                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        size="small"
                        inputProps={{maxLength: 40}}
                        onChange={e => setPassword(e.target.value)}
                        onKeyDown={k => {
                            if (k.keyCode === 13) {
                              handleLogin();
                            }
                          }}
                    /> 
                </Grid>

                <Grid xs={5}>
                    <Button 
                        size="large"
                        onClick={handleLogin}
                    >
                            　　Login　　
                    </Button>
                </Grid>

                <Grid xs={9}>
                    <Box height={160}/>
                    <Link href="#" underline="hover">
                        ID・パスワードを忘れた場合はこちら。
                    </Link>
                </Grid>
                          
            </Grid>
          </Box>
        </Container>
        </>
    )
}

export default LoginPage