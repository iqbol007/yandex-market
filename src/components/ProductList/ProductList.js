import React from "react";
import ProductItem from "../ProductItem/ProductItem";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Кофемашина De'Longhi ECAM",
      amount: 30300,
      discount: true,
      discountPercent: 12,
      oldPrice: 35090,
      imgUrl:
        "https://avatars.mds.yandex.net/get-mpic/1726038/img_id4577464176292682619/x166_trim"
    },
    {
      id: 2,
      name: "Nutella Паста ореховая",
      amount: 15815,
      discount: false,
      discountPercent: 12,
      oldPrice: 1234,
      imgUrl:
        "https://avatars.mds.yandex.net/get-mpic/1865271/img_id3690065316049468561.jpeg/x166_trim"
    },
    {
      id: 3,
      name: "Пюре Тёма говядина",
      amount: 450,
      discount: false,
      discountPercent: 12,
      oldPrice: 1234,
      imgUrl:
        "https://avatars.mds.yandex.net/get-mpic/1614201/img_id8327003236989896679.jpeg/x166_trim"
    },
    {
      id: 4,
      name: "Орахисовая паста (без сахара)",
      amount: 204,
      discount: true,
      discountPercent: 62,
      oldPrice: 500,
      imgUrl:
        "https://avatars.mds.yandex.net/get-mpic/1478677/img_id7605143035883805280.jpeg/x166_trim"
    }
  ];
  return (
    <div>
      {products.map(o => (
        <ProductItem item={o} />
      ))}
    </div>
  );
}
