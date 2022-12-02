const getFilteredProducts = (state, filterArr) => {
  let products = state.products;
  const categoryFilter = filterArr[0];
  const priceFilter = filterArr[1];
  const farmFilter = filterArr[2];

  if (categoryFilter) {
    products = products.filter(obj => Object.values(obj).includes(categoryFilter));
  }

  if (priceFilter) {
    products = products.filter(obj => Object.values(obj).includes(priceFilter));
  }

  if (farmFilter) {
    products = products.filter(obj => Object.values(obj).includes(farmFilter));
  }

  return products;
};


const getFarms = (state, farm) => {
  let farms = state.farms;
  if (farm) {
    farms = farm;
  }
  return farms;
};
export { getFilteredProducts, getFarms };
