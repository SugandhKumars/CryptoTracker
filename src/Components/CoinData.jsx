import React from "react";
import { Link } from "react-router-dom";
import { ConvertNumber } from "./utils/ConvertNumber";

const CoinData = ({ coin }) => {
  return (
    <>
      <Link to={`/coin/${coin?.id}`}>
        <div className="flex font-semibold w-full hover:bg-zinc-200 border-b-[1px] py-5">
          <div className=" py-2 flex items-center    w-[20%]">
            {/* <p>{index}</p> */}
            <div className="w-7 h-7 mx-10">
              <img src={coin?.image} alt="" />
            </div>
            {coin?.name}
          </div>
          <div className=" py-2   flex justify-center w-[5%]">
            ${ConvertNumber(parseInt(coin?.current_price.toFixed(2)))}
          </div>
          <div
            className={`py-2   flex justify-center w-[5%] ${
              coin?.price_change_percentage_1h_in_currency.toFixed(2) < 0
                ? `text-red-600`
                : `text-green-500`
            }`}
          >
            {coin?.price_change_percentage_1h_in_currency.toFixed(2)}%
          </div>
          <div
            className={`py-2   flex justify-center w-[5%] ${
              coin?.price_change_percentage_24h.toFixed(2) < 0
                ? `text-red-600`
                : `text-green-500`
            }`}
          >
            {coin?.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div
            className={`py-2   flex justify-center w-[5%] ${
              coin?.price_change_percentage_7d_in_currency?.toFixed(2) < 0
                ? `text-red-600`
                : `text-green-500`
            }`}
          >
            {coin?.price_change_percentage_7d_in_currency?.toFixed(2)}%
          </div>
          <div className=" py-2   flex justify-center w-[16%]">
            ${ConvertNumber(parseInt(coin?.market_cap))}
          </div>
          <div className=" py-2  flex justify-center w-[15%]">
            ${ConvertNumber(parseInt(coin?.total_volume))}
          </div>
          <div className=" py-2  flex justify-center w-[15%]">
            {ConvertNumber(parseInt(coin?.circulating_supply.toFixed(2)))}{" "}
            {coin?.symbol.toUpperCase()}
          </div>
          <div className="py-2  flex justify-center w-[15%]">Last 7 Days</div>
        </div>
      </Link>
    </>
  );
};

export default CoinData;
