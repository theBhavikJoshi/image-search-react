import React from 'react';
import unsplash from '../API/unsplash';
import SearchBar from "./SearchBar";

class App extends React.Component {

  state = { images: [] }

  async onSearchSubmit(searchTerm) {
    const imageRes = await unsplash.get('/search/photos', {
        params: { query: searchTerm }
      }
    )
    this.setState({ images: imageRes.data.results });
  }
  
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={e => this.onSearchSubmit(e)} />
        found: {this.state.images.length}
      </div>
    )
  }
}

export default App;
