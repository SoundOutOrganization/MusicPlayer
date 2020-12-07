import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import MusicIcon from '@material-ui/icons/MusicNote';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
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
    )
}