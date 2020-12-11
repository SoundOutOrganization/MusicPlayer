import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import {
    Theme,
    Grid
} from '@material-ui/core';
import AlbumPaper from './AlbumPaper'
import FakeAlbumPaperContainer from '../containers/FakeAlbumPaperContainer'

const FAKE_ALBUM_INFO = {
    name: 'Lil Uzi Vert vs. the World 2',
    coverUrl: 'https://images-na.ssl-images-amazon.com/images/I/717VbeZb0bL._AC_SX466_.jpg',
    songsInfos: [
        {
            url: "localhost:5000/play/foo.mp3",
            name: "Baby Pluto",
            duration: 250
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Myron",
            duration: 366
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Lo Mein",
            duration: 241
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Lotus",
            duration: 3
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Bean (Kobe)",
            duration: 120
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Silly Watch",
            duration: 44350
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "Yessirskiii",
            duration: 3684
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
            duration: 3550
        },

        {
            url: "localhost:5000/play/foo.mp3",
            name: "No Auto",
            duration: 35750
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


const ALBUMS = [
    FAKE_ALBUM_INFO,
    FAKE_ALBUM_INFO,
    FAKE_ALBUM_INFO,
    FAKE_ALBUM_INFO,
    FAKE_ALBUM_INFO
]

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        marginLeft: 270,
        marginTop: 94
    }
}))

type AlbumDisplayerProps = {
    albums: any,
    setCurrentMusic: Function
}

export default function AlbumDisplayer(props: any) {
    // const { albums } = props
    const albums = ALBUMS
    const classes = useStyles();    

    const { setCurrentMusic } = props
    return (
        <div className={classes.root}>
            <Grid container xs={12} spacing={10}>
                {
                    albums.map((album, index) => (
                        <Grid item xs={4}>
                            <AlbumPaper
                                albumInfo={album}
                                key={index}
                            />
                        </Grid>
                    ))                    
                }
                <Grid item xs={4}>
                    <FakeAlbumPaperContainer
                        setCurrentMusic={setCurrentMusic}
                    />
                </Grid>

            </Grid>
        </div>
    )
}
