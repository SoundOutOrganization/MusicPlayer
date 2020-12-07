import React from 'react'
import {
    createMuiTheme, 
    ThemeProvider
} from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const src = [
    'http://localhost:5000/play/1',
];

type AudioBarProps = {
}

export default function AudioBar(props: AudioBarProps) {
    return (
        <ThemeProvider theme={muiTheme}>
            <AudioPlayer 
                src={src}
                width="500px"
                loop={true}
                spacing={3}
                elevation={3}
            />
        </ThemeProvider>
    )
}