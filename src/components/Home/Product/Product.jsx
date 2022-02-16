import React from "react";
import "./Product.css";
const Product = (props) => {
  const { name, image, price } = props;
  return (
    <div className="card">
      <img className="card__img" src={image} alt={name} />

      <div className="card__body">
        <div className="card__info">
          <h3 className="card__title">{name}</h3>
          <p className="card__price">{`Precio ${price}`}</p>
        </div>
        <div className="card__buttons">
          <a href="/" className="card__info card__details card__button">Ver detalles</a>
        </div>
      </div>
      <div className="card__footer">
        <p className="card__info card__advertiser">Anunciante</p>
      </div>

    </div>
  );
};

export default Product;
