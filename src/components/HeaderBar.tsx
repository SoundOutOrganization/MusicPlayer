import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default function HeaderBar() {
    return (
        <AppBar>
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6">
                    SoundOut
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
