import React from 'react'

class SearchBar extends React.Component{
  state = { searchTerm: '' };

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={e => this.onFormSubmit(e)}>
          <div className='field'>
            <label>Search for Image</label>
            <input 
              type="text" 
              value={this.state.searchTerm} 
              onChange={e => this.setState({ searchTerm: e.target.value })} 
            />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
