const KEY = 'favouriteBeers';
export const getFavouriteBeers = (transformToArray) => {
  const beers = localStorage.getItem(KEY) || '';

  if(transformToArray)
    return beers.split('|') || []

  return beers
}

export const updateFavouriteBeers = (beersArray) => {
  const params = beersArray.filter(beer => beer.toString().trim()).join('|');
  return localStorage.setItem(KEY, params)
}

export const addBeerToFavourite = (id) => {
  const beerList = getFavouriteBeers(true)

  beerList.push(id)

  updateFavouriteBeers(beerList)
}

export const removeBeerFromFavourite = (id) => {
  let beerList = getFavouriteBeers(true)

  beerList = beerList.filter(beer => {
    return +beer !== id
  })

  updateFavouriteBeers(beerList)
}

export const checkIfBeerIsInFavourite = (id) => {
  const beerList = getFavouriteBeers(true)

  return beerList.includes(id.toString())
}

export const toggleBeerInFavourite = (id) => {
  checkIfBeerIsInFavourite(id) ? removeBeerFromFavourite(id) : addBeerToFavourite(id)
}
