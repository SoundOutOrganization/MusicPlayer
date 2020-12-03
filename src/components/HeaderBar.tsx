import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Theme,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { createStyles, makeStyles } from '@material-ui/styles'
import clsx from 'clsx'

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) => createStyles({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
}))

type HeaderBarProps = {
    serverListMenuDisplayed: boolean,
    setServerListMenuDisplayed: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function HeaderBar(props: HeaderBarProps) {
    const classes = useStyles()
    const { serverListMenuDisplayed, setServerListMenuDisplayed } = props

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: serverListMenuDisplayed,
              })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={setServerListMenuDisplayed}
                    edge="start"
                    className={clsx(classes.menuButton, {
                        [classes.hide]: serverListMenuDisplayed,
                    })}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    SoundOut
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
