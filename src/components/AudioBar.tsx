import React from 'react'
import {
    createMuiTheme, 
    ThemeProvider
} from '@material-ui/core'
import AudioPlayer from 'material-ui-audio-player';

const muiTheme = createMuiTheme({});

const src = [
    'https://converter-audio-example-1.s3.eu-central-1.amazonaws.com/Russell%2C%2BMale%2B-%2BEnglish%2C%2BAustralian+(1)+(online-audio-converter.com).wav',
    'https://converter-audio-examples.s3.eu-central-1.amazonaws.com/Russell%2C+Male+-+English%2C+Australian.mp3',
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