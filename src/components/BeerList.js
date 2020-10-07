import React from 'react';
import BeerPreview from './BeerPreview';
import SearchBar from './SearchBar';
import './BeerList.scss';

class BeerList extends React.Component {
  state = {
    ready: false,
    data: [],
    page: 1,
    search: ''
  };

  disableScroll = false;

  componentDidMount() {
    this.getBeerList()
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    // remove listeners after unmount
    window.removeEventListener('scroll', this.handleScroll)
  }

  getBeerList = async () => {
    this.disableScroll = true

    const {
      page,
      data,
      search
    } = this.state

    const beerURL = `https://api.punkapi.com/v2/beers`;

    let queryObject = {
      ...this.props.query,
      beer_name: search.replace(' ', '_') || undefined,
      page,
      per_page: 15,
    }

    queryObject = JSON.parse(JSON.stringify(queryObject))

    const queryParams = new URLSearchParams(queryObject).toString();

    this.setState({ready: false})

    const beerList = await fetch(`${beerURL}?${queryParams}`)
      .then(response => response.json());

    this.setState({
      ready: true,
      data: [...data, ...beerList],
      page: page + 1
    }, () => this.disableScroll = false);
  }

  onSearchSubmit = (e) => {
    // this.getBeerList executes after this.setSTate has finished
    e.preventDefault();
    this.setState({ready: false, data: [], page: 1}, this.getBeerList)
  }

  handleScroll = () => {
    if (this.disableScroll)
      return

    let docHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight,
      document.getElementsByTagName('html')[0].clientHeight, document.getElementsByTagName('html')[0].scrollHeight, document.getElementsByTagName('html')[0].offsetHeight)

    if (window.scrollY + window.innerHeight === docHeight) {
      this.getBeerList()
    }
  }

  render() {
    const { data, search } = this.state

    return (
      <>
        { this.props.searchBar && <SearchBar search={search} updateSearch={(val) => this.setState({search: val})} onSubmit={this.onSearchSubmit} /> }
        <div className="beer-list-container container section">
          {data.map(beer => <BeerPreview key={beer.id} {...beer} />)}
        </div>
      </>
    )
  }
}

BeerList.defaultProps = { searchBar: true };
export default BeerList;