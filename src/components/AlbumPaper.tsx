import React, { useState } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import {
    List,
    Card,
    CardMedia,
    ListItem,
    ListItemText,
    ListSubheader,
    Collapse,
    Typography,
    Theme,
    ListItemIcon,
    Button
} from '@material-ui/core'
import {
    ExpandLess,
    ExpandMore,
    PlayCircleFilled
} from '@material-ui/icons'
import { FixedSizeList, ListChildComponentProps } from 'react-window'

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        maxWidth: 345,
        backgroundColor: theme.palette.background.paper,
    },
    media: {
        marginTop: '50px',
        marginBottom: '50px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '50%',
        height: '50%'
    },
    albumTitle: {
        fontWeight: 'bold',
        textAlign: 'center'        
    },
    expandButton: {
        width: '100%'
    }
}))

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//         width: '100%',
//         maxWidth: 360,
//         borderRadius: "10%",
//         backgroundColor: theme.palette.background.paper,
//     },
//   }),
// )

type songInfo = {
    url: string
    name: string,
    duration: number
}

type AlbumInfo = {
    name: string,
    coverUrl: string
    songsInfos: songInfo[]
}

type AlbumPaperProps = {
    albumInfo: AlbumInfo
}



export default function AlbumPaper(props: AlbumPaperProps) {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const { albumInfo } = props


    function RenderSongInList(props: ListChildComponentProps) {
        const { index, style } = props
    
        return (
            <ListItem button style={style} key={index}>
                <ListItemIcon>
                    <PlayCircleFilled color="secondary"/>
                </ListItemIcon>
                <ListItemText primary={ albumInfo.songsInfos[index].name } primaryTypographyProps={{ color: "textSecondary" }}/>
            </ListItem>
        )
    }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                component="img"
                height="140"
                image={albumInfo.coverUrl}
            />
            <Typography gutterBottom variant="h5" component="h2" className={classes.albumTitle}>
                {albumInfo.name}
            </Typography>
            <Button
                className={classes.expandButton}
                onClick={() => {setOpen(!open)}}
            >
                {open ? <ExpandLess/> : <ExpandMore/>}
            </Button>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <FixedSizeList height={250} width={350} itemSize={46} itemCount={albumInfo.songsInfos.length}>
                        {RenderSongInList}
                    </FixedSizeList>                   
                </Collapse>
        </Card>
    )
}