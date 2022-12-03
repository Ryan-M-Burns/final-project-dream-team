const getFilteredProducts = (state, category, farm) => {
  let result = state.products;

  if (category) {
    result = result.filter(obj => obj.category === category);
  }

  if (farm) {
    const farmObj = state.farms.find(farmObj => farmObj.name === farm);
    const farmFilter = farmObj.id;
    result = result.filter(obj => obj.farm_id === farmFilter);
  }

  return result;
};

const getCategories = (state, category) => {
  let result = state.categories;

  if (category) {
    result = [state.categories.find(eachCategory => eachCategory.category === category)];
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

export { getFilteredProducts, getCategories, getFarms };
