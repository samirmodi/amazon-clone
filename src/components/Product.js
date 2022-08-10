import React from "react";
import { useCartValue } from "../context/StateProvider";
import "./Product.css";

function Product({ id, title, img, price, rating }) {
  const {
    state: { basket },
    dispatch,
  } = useCartValue();

  console.log(basket);

  const addToBasket = () => {
    //dispath item into data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image: img,
        price,
        rating,
      },
    });
  };
  return (
    <div key={id} className='product'>
      <div className='product__info'>
        <p>{title}</p>
        <p className='product__price'>
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className='product__rating'>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>
      <img src={img} alt='' />
      <button onClick={addToBasket} className='product__basketButton'>
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
