import React from 'react';
import BeerList from '../components/BeerList';
import { getFavouriteBeers } from '../helpers/favourites'

class Favourites extends React.Component {
  render() {
    return (
      <BeerList searchBar={false} query={{ids: getFavouriteBeers()}} />
    )
  }
}

export default Favourites;