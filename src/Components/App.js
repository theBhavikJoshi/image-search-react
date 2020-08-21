import React from 'react';
import unsplash from '../API/unsplash';

import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {

  state = { images: [] }

  async onSearchSubmit(searchTerm) {
    const imageRes = await unsplash.get('/search/photos', {
        params: { query: searchTerm, per_page: 25 }
      }
    )
    this.setState({ images: imageRes.data.results });
  }
  
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={e => this.onSearchSubmit(e)} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
}

export default App;
