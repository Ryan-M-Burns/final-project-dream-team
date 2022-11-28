import React from 'react';
import FarmerListItem from './FarmerListItem';

const FarmerList = ({farms, value, onChange}) => {

  const mockFarms = [{
    id: 1, 
    name: 'Brambly Hedge Farm', 
    image: 'https://imgs.search.brave.com/DKMov-EvGZSqPSNViUPvGybLQddcJjspp1hDEHkX25w/rs:fit:564:564:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC9jMS82My81Ny9j/MTYzNTcwNGQzMDZh/ZWEwOTVlMmJmY2My/YTI5ZTJlMC5qcGc', 
    email: 'tay@harvest.com', 
    description: 'Our small farm is producing fresh, home-grown vegetables and fruit. Apples, rhubarb, tomatoes, broccoli, carrots, squash, pumpkins, beans, beets, vegetable baskets toorder, mint, basil, sweet pea flowers and free range eggs. Local hay sometimes available.', 
    is_family_owned: true, 
    is_organic: true
  }];

  const farmList = mockFarms.map(farm => {
  return (
      <FarmerListItem
        key={farm.id}
        name={farm.name}
        about={farm.description}
        image={farm.image}
        is_family_owned={farm.is_family_owned}
        is_organic={farm.is_organic}
        selected={'Brambly Hedge Farm' === farm.name}
        onChange={() => {}}
      />
  );
});

return (
  <ul>
    {farmList}
  </ul>
)
}

export default FarmerList;