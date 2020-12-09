import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
    Theme
} from '@material-ui/core';
import AlbumPaper from './AlbumPaper'

const FAKE_ALBUM_INFO = {
    name: 'Lil Uzi Vert vs. the World 2',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/717VbeZb0bL._AC_SX466_.jpg',
    songsInfos: [
        {
            url: "localhost:5000/play/foo.mp3",
            name: "Baby Pluto",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Myron",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Lo Mein",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Lotus",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Bean (Kobe)",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Silly Watch",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Yessirskiii",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Pop",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "You Better Move",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Wassup",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Homecoming",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Strawberry Peels",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "I Can Show You",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "I'm Sorry",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Celebration Station",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Moon Relate",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Come This Way",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Bigger Than Life",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Trap This Way (This Way)",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Chrome Heart Tags",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "No Auto",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Bust Me",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Money Spread",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Prices",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Urgency",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Got the Guap",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Leaders",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Venetia",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Secure the Bag",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "P2",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Futsal Shuffle 2020",
            duration: 350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "That Way",
            duration: 350
        },
    ]
}

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {        
        marginLeft: 270,
        marginTop: 94
    }
}))

type songInfo = {
    url: string
    name: string
}

type AlbumInfo = {
    name: string,
    coverUrl: string
    songsInfos: songInfo[]
}

type AlbumPaperProps = {
    albumInfo: AlbumInfo
}

export default function AlbumDisplayer() {
    const classes = useStyles();    

    return (
        <div className={classes.root}>
            <AlbumPaper
                albumInfo={FAKE_ALBUM_INFO}
            />
        </div>
    )
}
