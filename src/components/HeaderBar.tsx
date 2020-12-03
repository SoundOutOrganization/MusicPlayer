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
    setServerListMenuDisplayed: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function HeaderBar(props: HeaderBarProps) {
    const classes = useStyles()
    const { setServerListMenuDisplayed } = props

    return (
        <AppBar
            position="fixed"
            className = {
                clsx(classes.appBar, {
                    [classes.appBarShift]: true
                })
            }
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    onClick={setServerListMenuDisplayed}
                    edge="start"
                    className={
                        clsx(classes.menuButton, {
                            [classes.hide]: true
                        })
                    }
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
