import React, { Component } from 'react'
import HeaderBar from './HeaderBar'
import ServerListMenu from './ServerListMenu'
import AudioBar from './AudioBar'

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
                    serverListMenuDisplayed={serverListMenuDisplayed}
                    setServerListMenuDisplayed={this.setServerListMenuDisplayed}
                />
                <ServerListMenu
                    open={serverListMenuDisplayed}
                    serverList={FAKE_SERVER_LIST}
                    setServerListMenuDisplayed={this.setServerListMenuDisplayed}
                />
                
                <div style={{
                    //display: "flex",
                    justifyContent: "center",
                    //alignItems: "flex-end",
                    position: "fixed",
                    left: "50%",
                    bottom: "0px",
                    transform: "translate(-50%, -50%)",
                    margin: "0 auto",
                }}>
                    <AudioBar
                    />
                </div>
            </>
        );
    }
}
