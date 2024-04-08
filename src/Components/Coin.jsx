import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Performance from "./Performance";
import { ConvertNumber, ConvertNumberInRupee } from "./utils/ConvertNumber";
import TrndingCoins from "./TrndingCoins";

const Coin = () => {
  const [coin, setCoin] = useState({});
  const { id } = useParams();
  console.log(id);
  const getSingleCoinData = async () => {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?localization=false&market_data=true&community_data=true&developer_data=false&sparkline=true`
    );
    const res = await data.json();
    setCoin(res);
  };
  console.log(coin);
  useEffect(() => {
    getSingleCoinData();
  }, [id]);
  return (
    <>
      <div className="w-full mt-2 flex flex-col bg-purple-200 items-center gap-2 px-auto">
        <div className="w-[90%] bg-zinc-100 p-2 rounded-lg ">
          <div className="h-32 w-full   mb-2 flex-col p-2">
            <div className="flex mb-5 md:mb-10 items-center gap-2">
              <div className="coinImage w-8 h-8   rounded-full">
                <img
                  className="w-full h-full object-cover rounded-full"
                  src={coin?.image?.large}
                  alt=""
                />
              </div>
              <p className="font-bold text-lg">{coin?.name}</p>
              <p className="font-bold text-sm text-zinc-300">
                {coin?.symbol?.toUpperCase()}
              </p>
              <p className="bg-zinc-600 px-2 py-2 font-medium rounded-lg text-xs text-white">
                Rank #{coin?.market_cap_rank}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <p className="font-bold text-3xl">
                $
                {ConvertNumber(
                  parseInt(coin?.market_data?.current_price?.usd.toFixed(10))
                )}
              </p>
              <p className="bg-green-400 bg-opacity-25 px-1 rounded-sm text-green-600 font-medium text-sm">
                {coin?.market_data?.market_cap_change_percentage_24h.toFixed(2)}
                %
              </p>
              <p className="font-medium text-sm text-zinc-400">(24H)</p>
            </div>
            <p className="font-medium text-sm">
              ₹
              {ConvertNumberInRupee(
                parseInt(coin?.market_data?.current_price?.inr.toFixed(2))
              )}
            </p>
          </div>
          <div className="h-28 w-full bg-red-200 flex flex-col p-2"></div>
        </div>
        <Performance coin={coin} />
      </div>
      <TrndingCoins />
    </>
  );
};

export default Coin;
