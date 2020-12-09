import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MusicIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
        width: '100%',
        maxWidth: 360,
        borderRadius: "10%",
        backgroundColor: theme.palette.background.paper,
    },
  }),
);

type MusicListProps = {
    musicList: string[],
}

export default function MusicList(props: MusicListProps) {
    const {musicList} = props
    const classes = useStyles();

    return (
        <Card>
            <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
            />
            <List className={classes.root}>
                {
                    musicList.map((musicName: String, index) => (
                        <ListItem button key={index}>
                            <ListItemAvatar>
                                <MusicIcon />
                            </ListItemAvatar>
                            <ListItemText primary={musicName} />
                        </ListItem>
                    ))
                }
            </List>
        </Card>
    )
}