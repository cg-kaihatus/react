import * as React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';

export interface IChat {
    from: string;
    text: string;
    date: string;
    time: string;
    read: boolean;
} 

const ChatBubble = ({chat, user}:{chat: IChat, user: string}) => {
  const isMe = chat.from === user;
  const bg = isMe ? "#BBBBEE" : "#EEEEEE";
  const align = isMe ? "end" : "start"

  const TimeUnit = () => (
    <Box 
        flexDirection='column' 
        textAlign='center' 
        paddingX='10px'
    >
        <Box>
            <Typography variant='caption' margin={0}>
                {chat.date} {chat.time}
            </Typography>
        </Box>
        {chat.read && isMe && (
            <Typography variant='caption'>
                既読
            </Typography>
        )}
    </Box>
  )

  return (
    <Stack
        flexDirection='row' 
        justifyContent={align}
        spacing={1}
        paddingX='10px'
        paddingY='5px'
    >
                {isMe && <TimeUnit />}
                <Box>
                    <Box sx={{
                        backgroundColor: bg,
                        padding: '10px',
                        borderRadius: '10px',
                        whiteSpace: 'pre-line'
                        }}>
                        {chat.text}
                    </Box>
                    <Box textAlign={align} paddingX='10px'>
                        <Typography variant='caption'>
                            {chat.from}
                        </Typography>
                    </Box>
                </Box>
                {!isMe && <TimeUnit />}
    </Stack>
  );
}

export default ChatBubble;