/* eslint-disable react/prop-types */
// import React from 'react'
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import Button from "./Button";

const Detail = ({ gambar, title, desc, price, warna }) => {
  const [count, setCount] = useState(0);
  const [love, setLove] = useState(true);

  const loveProduct = () => {
    love ? setLove(false) : setLove(true);
  };
  console.log(love);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    if (count === 0) return;
    setCount(count - 1);
  };
  return (
    <div className="flex items-center justify-center gap-10 mx-auto container pt-20">
      <div className="w-[500px] h-[600px] flex">
        <img
          src={gambar}
          alt={title}
          className="max-w-full object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 w-3/5">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <h3 className="text-2xl font-normal">${price}</h3>
        <p className="text-base text-justify">
          Description: <br />
          {desc}
        </p>
        <p>Colours: {warna}</p>
        <div className="flex items-center gap-16">
          <div className="flex border rounded-lg">
            <button onClick={decrease} className="p-4 hover:bg-red-100 ">
              <FaMinus />
            </button>
            <p className="text-center text-lg font-semibold w-[100px] border border-l-black/20 border-r-black/20 py-4 px-6">
              {count}
            </p>
            <button
              onClick={increase}
              className="p-4 bg-red-500 hover:bg-red-600 text-white"
            >
              <FaPlus />
            </button>
          </div>
          <div>
            <Button btnName={"Buy Now"} jenis={"primary"} />
          </div>
          <div>
            {love ? (
              <button
                className="p-4 rounded-lg border border-black hover:bg-red-100"
                onClick={loveProduct}
              >
                <MdFavorite size={"24px"} />
              </button>
            ) : (
              <button
                className="p-4 rounded-lg border border-black text-red-500 hover:bg-red-100"
                onClick={loveProduct}
              >
                <MdFavorite size={"24px"} />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
