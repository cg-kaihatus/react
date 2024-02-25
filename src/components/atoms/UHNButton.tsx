import {Link} from "react-router-dom";
import { Grid, Box, Paper, Button } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

type Props = {
    text: string[]
}

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 75,
    lineHeight: '13px',
  }));

const UHNButton = (props: Props) => {

    return (
        <>
        <Grid item xs={12} sm={5.98} md={3.99} lg={2.39}>
            <Box
              sx={{
                height: 80,
                bgcolor: 'background.default',
                '&:hover': {
                        opacity: [0.7, 0.7, 0.7],
                    },
              }}
            >
              <Link to="/collection"
                style={{textDecoration: 'none'}}
              >
                <Item elevation={1}>
                    {props.text[0]}<br />
                    {props.text[1]}<br />
                    {props.text[2]}<br />
                    {props.text[3]}<br />
                    {props.text[4]}<br />
                </Item>
              </Link>             
            </Box>  
        </Grid>
        </>
    );
}

export default UHNButton;