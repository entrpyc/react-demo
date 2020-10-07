import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
  render() {
    const { search, onSubmit, updateSearch } = this.props;
    return (
      <div className="search-bar-container container section">
        <form onSubmit={onSubmit}>
          <input type="text" id="input-search" placeholder="Search a beer" value={search} onChange={e => updateSearch(e.target.value)} />
          <input type="submit" value="Search"/>
        </form>
      </div>
    )
  }
}

export default SearchBar;