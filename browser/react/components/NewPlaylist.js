import React, { Component } from 'react';
import axios from 'axios';
import Songs from '../components/Songs';

export default class NewPlaylist extends Component {

  constructor () {
    super();
    this.state = {
      input: ""
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
  }

  submitPlaylistTitle (event) {
    //FILL ME IN !
  }

  render () {
    return (
      <div className="well">
      <form className="form-horizontal" onSubmit={submitPlaylistTitle}>
        <fieldset>
          <legend>New Playlist</legend>
          <div className="form-group">
            <label className="col-xs-2 control-label">Name</label>
            <div className="col-xs-10">
              <input className="form-control" type="text"/>
            </div>
          </div>
          <div className="form-group">
            <div className="col-xs-10 col-xs-offset-2">
              <button type="submit" className="btn btn-success">Create Playlist</button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
    )
  }
}
