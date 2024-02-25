import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Container, Box, Grid, Button} from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import ChatBubble, {IChat} from '../molecules/ChatBubble';


const UserChat = ({height}:{height: number}) => {
    const maxHeight = height + "px";
    const user = "自分";
    const [chat, setChat] = useState<IChat[]>([
        {from: "担当者", text: "そもさん", date: "8/1", time: "9:10", read: true},
        
        {from: "自分", text: "説破。", date: "8/1", time: "9:11", read: true},
        
        {from: "担当者", text: "むかしむかしあるところに、おじいさんとおばあさんがいました。\r\n おじいさんは山へ芝刈りに、おばあさんは川へ選択に行きました。すると、川からは大きな桃がドンブラコドンブラこと流れてきたり来なかったり。", date: "8/1", time: "09:11", read: true},
        
        {from: "自分", text: "どんぶらこ、どんぶらこ", date: "8/1", time: "9:12", read: true},
        
        {from: "自分", text: "どんぶらこ、", date: "8/1", time: "9:14", read: true},
        
        {from: "担当者", text: "どんぶらこ\nどんぶらこ\nどんぶらこ", date: "8/1", time: "9:15", read: true},
    ])
    let target = document.getElementById('chatBottom');
    const scrollBottomRef = useRef<HTMLDivElement>(null);
    const [writingText, setWritingText] = useState<string>("");
    const onClick = () => {
        if(writingText !== "") {
            const now = new Date();
            setChat([...chat,{from: user,
                text: writingText, 
                date: String(now.getMonth()+1).concat("/").concat(String(now.getDate())), 
                time: String(now.getHours()).concat(":").concat("00".concat(String(now.getMinutes())).slice(-2)), 
                read: false}]);
            setWritingText("");
        }
    }

    useLayoutEffect(() => {
        scrollBottomRef?.current?.scrollIntoView();
    }, [chat])




    return (
        <Box sx={{backgroundColor: '#DDDDFF' }}>
            <Box 
                minHeight='50px'
                maxHeight={maxHeight}
                sx={{overflowY:'scroll'}}
            >
                {chat.map((item) => (
                        <ChatBubble chat={item} user={user}/>
                ))}
                <div id='chatBottom' ref={scrollBottomRef}/>
            </Box>
            <Grid container sx={{backgroundColor: '#CCCCE0' }}>
                <Grid item xs={10} padding='10px'>
                    <Textarea 
                        minRows={2} maxRows={3} variant="soft" 
                        onChange={(e) => (setWritingText(e.target.value))}
                        value={writingText}
                    />
                </Grid>
                <Grid item xs={2} padding='10px'>
                    <Button onClick={onClick} variant="contained" sx={{marginTop: '20px'}}>
                        送信
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default UserChat;