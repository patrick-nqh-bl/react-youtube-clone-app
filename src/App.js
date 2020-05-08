import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail, VideoList } from './components';
import youtube from './api/youtube';

export class App extends Component {
  handleSubmit = async (searchTerm) => {
    const response = await youtube.get('search', {
      params: {
        part: 'snippet',
        maxResults: 5,
        key: 'AIzaSyCStNQBcibyGypy17t23L2RZNnflvHnfNU',
        q: searchTerm,
      },
    });
    console.log(response);
  };
  render() {
    return (
      <Grid justify='center' container spacing={10}>
        <Grid item xs={12}>
          <Grid container spacing={10}>
            <Grid item xs={12}>
              <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              {/* <VideoList></VideoList> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
