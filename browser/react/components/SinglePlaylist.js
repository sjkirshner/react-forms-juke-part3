import React from 'react';
import axios from 'axios';
import { Route, Switch, Link } from 'react-router-dom';
import Songs from './Songs';

/* eslint-disable */
export default class SinglePlaylist extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      playlist: {},
      songs: []
    }
  }

  componentDidMount () {
    const playlistId = this.props.match.params.playlistId;
    const gettingPlaylist = axios.get(`./playlists/${playlistId}`);
    const gettingSongsList = axios.get(`./playlists/${playlistId}/songs`);
    Promise.all([gettingPlaylist, gettingSongsList])
      .then(res => res.map((single)=>single.data))
      .then(([playlist, songs]) => this.setState({playlist, songs}))
  }

  render(){
    return (
      <div>
      <h3>{ this.state.playlist.name }</h3>
      <Songs songs={this.state.playlist.songs} /> {/** Hooray for reusability! */}
      { this.state.songs && !this.state.songs.length && <small>No songs.</small> }
      <hr />
    </div>
    )
  }

}
