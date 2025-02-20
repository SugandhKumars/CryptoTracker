import React from "react";
import { ConvertNumber } from "./utils/ConvertNumber";
import Fundamentals from "./Fundamentals";
import AboutCoin from "./AboutCoin";
const Performance = ({ coin }) => {
  return (
    <>
      <div className="w-[90%] bg-zinc-100   p-2 px-4 rounded-lg ">
        <p className="font-bold md:font-bold py-1 md:py-2 text-xl md:text-2xl">
          Performance
        </p>
        <div className=" flex flex-col gap-4">
          <div className=" flex  justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-zinc-400  text-sm ">Today's Low</p>
              <p className="text-zinc-400 font-semibold">
                {ConvertNumber(
                  parseInt(coin?.market_data?.low_24h?.usd.toFixed(2))
                )}
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-zinc-400 text-sm">Today's High</p>
              <p className="text-zinc-400 font-semibold">
                {ConvertNumber(
                  parseInt(coin?.market_data?.high_24h?.usd.toFixed(2))
                )}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <p className="text-zinc-400 text-sm">52 Week Low</p>
              <p className="text-zinc-400 font-semibold">67253.00</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-zinc-400 text-sm">52 Week High</p>
              <p className="text-zinc-400 font-semibold">70000.45</p>
            </div>
          </div>
        </div>
        <Fundamentals coin={coin} />
      </div>
      <AboutCoin coin={coin} />
    </>
  );
};

export default Performance;
