import React from 'react';
import './BeerPreview.scss';
import IconStar from './IconStar';
import { toggleBeerInFavourite, checkIfBeerIsInFavourite } from '../helpers/favourites'

class BeerPreview extends React.Component {
  state = { 
    ready: false, 
    favourite: checkIfBeerIsInFavourite(this.props.id) 
  };

  handleFavouritesClick = (id) => {
    toggleBeerInFavourite(id)
    this.setState({ favourite: !this.state.favourite })
  }

  render() {
    const { image_url, name, description, id } = this.props;
    const { favourite } = this.state;

    return (
      <div className="beer-container">
        <div className="beer-img-container">
          <img src={image_url} alt={name} />
        </div>
        <div className="beer-description">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
        <button className={`btn favourite-btn ${favourite ? 'check' : ''}`} onClick={() => this.handleFavouritesClick(id)}>
          <IconStar />
        </button>
      </div>
    )
  }
}

export default BeerPreview;