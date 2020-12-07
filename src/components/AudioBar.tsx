import React from 'react'
import {
    createMuiTheme, 
    ThemeProvider
} from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const src = [
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
];

type AudioBarProps = {
}

export default function AudioBar(props: AudioBarProps) {
    return (
        <ThemeProvider theme={muiTheme}>
            <AudioPlayer 
                src={src}
                width="500px"
            />
        </ThemeProvider>
    )
}