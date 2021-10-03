import React from 'react';
import './Product.css';

export default function Product(props) {
  return (
    <div className="product">
        <div>
          <img src={`/images/${props.image}`} />
          <h1>{ props.name }</h1>
          <h2>{props.warning}</h2>
          <b>{ props.seller }</b>
          <p className="rating">{props.rating}</p>
          <div>${ props.price }</div>
        </div>
    </div>
  )
}
