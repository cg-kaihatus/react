import UHNButton from "../atoms/UHNButton";
import { Container, Grid } from '@mui/material';

const UHNavigation = () => {

    const buttonTitle: string[][] = [
        ["","新入社員向け","","初級コース",""],
        ["","ExcelVBA/AccessVBA","","中級コース",""],
        ["","仮想Server構築(Esxi)","","中級コース",""],
        ["","フロント・バックエンド開発","","上級コース",""],
        ["仮想Server構築(コンテナ)","","Amazon AWS構築","","上級コース"]
    ];

    return (
        <Container maxWidth='xl'>
        <Grid 
            container alignItems="center" direction="row" 
            paddingX={6} paddingY={1} gap={0.1}
        >
            {buttonTitle.map((text, index) => (
                <UHNButton text={text}/>
            ))}
        </Grid>
        </Container>
    );
}

export default UHNavigation;