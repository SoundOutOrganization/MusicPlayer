import React, { Component } from 'react'
import HeaderBar from './HeaderBar'
import ServerListMenu from './ServerListMenu'

const FAKE_SERVER_LIST = [
    'Server1', 'Server2', 'Server3', 'Server4', 'Server5'
]

type AppState = {
  serverListMenuDisplayed: boolean
}

export default class App extends Component<{}, AppState> {

    constructor(props: {})   {
        super(props)
        this.state = {
            serverListMenuDisplayed: true
        }
        this.setServerListMenuDisplayed = this.setServerListMenuDisplayed.bind(this)
    }

    setServerListMenuDisplayed() {
        const newServerListMenuDisplayed = !this.state.serverListMenuDisplayed
        this.setState({
            serverListMenuDisplayed: newServerListMenuDisplayed
        })
    }

    render() {
        const { serverListMenuDisplayed } = this.state
        return (
            <>
                <HeaderBar
                    setServerListMenuDisplayed={this.setServerListMenuDisplayed}
                />
                <ServerListMenu
                    open={serverListMenuDisplayed}
                    serverList={FAKE_SERVER_LIST}
                    setServerListMenuDisplayed={this.setServerListMenuDisplayed}
                />
            </>
        );
    }
}
