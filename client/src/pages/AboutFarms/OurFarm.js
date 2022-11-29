import {useState, useEffect, React} from 'react';
import {useParams} from 'react-router-dom';
import './AboutFarms.scss';
import axios from 'axios';
const OurFarm = () => {
 const [state, setState] = useState({
    farm: {},
    products: []
  });



  const params = useParams();
  const farmId = Number(params.id);



  useEffect(() => {
    Promise.all([
      (axios.get(`/farms/${farmId}`)),
      (axios.get(`/farms/${farmId}/products`))
    ]).then((all) => {
      console.log('test2', all);
      setState({
        farm: all[0].data[0],
        products: all[1].data
      });
    });
  }, []);

  //generating the information per product
  const farmProducts = state.products.map(product => {
    return (
      <p>{product.title}</p>
    );
  });

  return (
    <div>
      <p>hello {state.farm.description}</p>
      <ul>
        {farmProducts}
      </ul>
    </div>
  );

};

export default OurFarm;
