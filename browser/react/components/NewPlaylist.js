import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';

export default class NewPlaylist extends Component {

  constructor () {
    super();
    this.state = {
      input: "",
      dirty: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitPlaylistTitle = this.submitPlaylistTitle.bind(this)
  }

  // componentDidMount () {
  //   axios.get('/api/artists')
  //     .then(res => res.data)
  //     .then(artists => this.setState({ artists }));
  // }

  handleChange (event) {
    this.setState({ input: event.target.value });
    this.setState({ dirty: true})
  }

  submitPlaylistTitle (event) {
    event.preventDefault();
    axios.post('/api/playlists', { name: this.state.input })
    .then(res => res.data)
    .then(result => {
      console.log(result) // response json from the server!
    });
    this.setState({ input: '', dirty: false});
  }


  render () {
    const isTitleTooLong = this.state.input.length > 16;
    const isTitleBlank = this.state.input.length < 1;
    const isSubmitDisabled = isTitleBlank || isTitleTooLong;
    return (
      <div className="well">
      <form className="form-horizontal" onChange={this.handleChange} onSubmit={this.submitPlaylistTitle}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" value={this.state.input} type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" disabled={isSubmitDisabled} className="btn btn-success">Create Playlist</button>
              {this.state.dirty && isTitleBlank && <div className="alert alert-warning">Please enter a name</div>}
              {isTitleTooLong && <div className="alert alert-warning">Please enter less than 16 characters</div>}
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    )
  }
}
