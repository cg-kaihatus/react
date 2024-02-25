import Box from '@mui/joy/Box';
import Textarea from '@mui/joy/Textarea';

const UHInformation = () => {
    const sampleInfo: string = 
    "2023/12/24 クリスマスイヴ\n2023/12/25 クリスマス\n2023/12/31 大晦日\n2024/01/01 お正月\n2023/12/24 クリスマスイヴ\n2023/12/25 クリスマス\n2023/12/31 大晦日\n2024/01/01 お正月\n2023/12/24 クリスマスイヴ\n2023/12/25 クリスマス";

    return (
        <Box sx={{ height: 230, paddingX: 6, paddingY: 2 }}>
            <Textarea
                readOnly
                color="neutral"
                placeholder="お知らせ"
                defaultValue={sampleInfo}
                minRows={7}
                maxRows={7}
            />
        </Box>

    );
}

export default UHInformation;