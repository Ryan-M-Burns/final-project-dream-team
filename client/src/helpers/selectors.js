const getFilteredProducts = (state, category, price, farm) => {
  let result = state.products;

  // if (categoryFilter) {
  //   products = products.filter(obj => Object.values(obj).includes(categoryFilter));
  // }

  // if (priceFilter) {
  //   products = products.filter(obj => Object.values(obj).includes(priceFilter));
  // }

  if (farm) {
    const farmObj = state.farms.find(farmObj => farmObj.name === farm);
    const farmFilter = farmObj.id;
    result = result.filter(obj => obj.farm_id === farmFilter);
  }

  return result;
};


const getFarms = (state, farm) => {
  let result = state.farms;

  if (farm) {
     result = [state.farms.find(farmObj => farmObj.name === farm)];
  }

  return result;
};

export { getFilteredProducts, getFarms };
