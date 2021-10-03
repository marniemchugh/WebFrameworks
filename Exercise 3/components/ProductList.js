import React from 'react';
import './ProductList.modules.css';

import Product from './Product';

export default function ProductList(props) {

  return (
    <div>
      <div className="presentationModeGrid" >
      {
        props.items.map(item => <Product key={item.id} {...item} />)
      }
      </div>
    </div>
  )
}
