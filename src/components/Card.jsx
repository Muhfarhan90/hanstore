/* eslint-disable react/prop-types */
// import React from 'react'
import favorite from "../../public/favorite.svg";
import cart from "../../public/cart.svg";
import { Link } from "react-router-dom";
const Card = ({ product }) => {
  return (
    <Link
      to={`/products/${product.id}`}
      className="w-[270px] flex flex-col flex-shrink-0 border border-black rounded-xl shadow-xl transition-transform hover:scale-105"
    >
      <div className="mb-4 relative ">
        <img
          src={product.image}
          alt=""
          className="mx-auto my-auto w-[270px] h-[250px] bg-cover rounded-xl"
        />
        {product.discount ? (
          <div className="absolute top-2 left-3 py-1 px-2 bg-red-500 rounded-lg">
            <p className="text-white text-sm">-{product.discount}%</p>
          </div>
        ) : null}
        <div className="absolute top-2 right-3 flex flex-col gap-2">
          <button className="rounded-full p-2 bg-gray-200">
            <img src={favorite} alt="" className="w-6" />
          </button>
          <button className="rounded-full p-2 bg-gray-200">
            <img src={cart} alt="" className="w-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h1 className="line-clamp-3 text-xl">{product.title}</h1>
        <p className="text-red-500 text-xl">${product.price}</p>
        <div className="flex gap-2 items-center">
          <div className="px-2 py-1 border border-green-500 rounded-xl ">
            <p className="text-green-500">{product.category}</p>
          </div>
          <div className="px-2 py-1 border border-green-500 rounded-xl ">
            <p className="text-green-500">{product.brand}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
//

<img src="" alt="" />;
