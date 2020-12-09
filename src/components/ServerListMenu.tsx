import React from 'react'
import {
    Drawer,
    Divider,
    List,
    ListItemText,
    ListItem,
    ListItemIcon,
    IconButton,
    Theme
} from '@material-ui/core'
import { createStyles, makeStyles, useTheme} from '@material-ui/styles'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import clsx from 'clsx'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) => createStyles({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
}))

type ServerListMenuProps = {
    open: boolean,
    serverList: string[],
    setServerListMenuDisplayed: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function ServerListMenu(props: ServerListMenuProps) {
    const { open, serverList, setServerListMenuDisplayed } = props
    const classes = useStyles()
    // const theme = useTheme()

    return (
        <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        >
            <div className={classes.toolbar}>
                <IconButton onClick={setServerListMenuDisplayed}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>
                {
                    serverList.map((serverName: String, index) => (
                        <ListItem button key={index}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={serverName} />
                        </ListItem>
                    ))
                }
            </List>
        </Drawer>
    )
}
