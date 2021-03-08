import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProducatDetail = () => {
    const {productKey} = useParams();
   const product = fakeData.find(pd => pd.key === productKey);
//    const {name, price, img} = product;
    return (
        <div>
          <Product showAddCard={false} product={product}></Product>
        </div>
    );
};

export default ProducatDetail;