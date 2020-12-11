import React, { Component } from 'react'
import axios from 'axios'
import FakeAlbumPaper from '../components/FakeAlbumPaper'

type FakeAlbumPaperContainerProps = {
    setCurrentMusic: Function
}

type FakeMusic = {
    author: string,
    genre: string,
    id: number,
    link: string,
    title: string
}

type FakeAlbumPaperContainerStates = {
    musicList: FakeMusic[]
}

export default class FakeAlbumPaperContainer extends Component<FakeAlbumPaperContainerProps, FakeAlbumPaperContainerStates> {
    constructor(props: FakeAlbumPaperContainerProps) {
        super(props)
        this.state = {
            musicList: []
        }
        this.getMusicList = this.getMusicList.bind(this)
    }

    getMusicList() {
        fetch(`http://localhost:5000/musics`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                musicList: json
            })
        })
    }

    componentDidMount() {
        console.log("bah salut")
        this.getMusicList()
    }
    render() {
        const { setCurrentMusic } = this.props
        const { musicList } = this.state
        return (
            <FakeAlbumPaper
                setCurrentMusic={setCurrentMusic}
                musicList={musicList}
            />
        )
    }
}