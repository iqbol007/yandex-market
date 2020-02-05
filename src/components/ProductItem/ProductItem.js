import React from "react";

export default function ProductItem({ item }) {
  const rub = <span>₽</span>;
  const op = (
    <div className="old-price">
      {item.oldPrice}
      {rub}
    </div>
  );
  const discImg = (
    <div className="discImg">
      <div className="d"></div>
      {item.discountPercent}%{" "}
    </div>
  );
  return (
    <div className="main">
      <div className="main-block">
        <div className="sale"></div>
        {item.discount && discImg}
        <img src={item.imgUrl} alt="imag" className="image" />
        <div className="price">
          <b>
            {item.amount}
            {rub}
          </b>
          {item.discount && op}
        </div>
        <div className="details">{item.name}</div>
      </div>
    </div>
  );
}
