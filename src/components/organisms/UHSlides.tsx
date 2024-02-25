import { Box, Container } from '@mui/material';

import sampleImg from "../../statics/img/cat.png";
import sampleImgS from "../../statics/img/cats.png";

const UHSlides = () => {

    return (
        <Box sx={{ height: 400, maxWidth:{xs: 200, sm: 500}}}>
                <picture>
                    <source srcSet={sampleImgS} media='(max-width:1000px)'
                        type='image/png' height={390} width={600}/>
                    <img src={sampleImg} height={390} width={1500} alt=""/>
                </picture>
        </Box>

    );
}

export default UHSlides;