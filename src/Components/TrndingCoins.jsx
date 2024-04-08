import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TrndingCoins = () => {
  const [trending, setTrending] = useState([]);
  const getTrending = async () => {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`
    );
    const res = await data.json();
    setTrending(res?.coins);
  };
  console.log(trending);
  useEffect(() => {
    getTrending();
  }, []);
  console.log(trending && trending[0]?.item?.id);
  return (
    <div className="w-[90%] flex flex-col   mx-auto p-2 ">
      <p className="md:text-2xl font-bold py-1 md:py-2">You May Also Like</p>
      <div className="All_Cards flex gap-2 overflow-auto">
        {trending?.map((coin) => (
          <Link
            to={`/coin/${coin?.item?.id}`}
            className="md:w-[19%] h-40 p-2 border-[1px] rounded-lg shrink-0 "
          >
            <div key={coin?.id} className="flex flex-col gap-2  cursor-pointer">
              <div className="Icon_NAME_CHANGE flex gap-1  items-center md:gap-2 h-7">
                <div className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-zinc-200">
                  <img
                    className="w-full h-full rounded-full"
                    src={coin?.item?.large}
                    alt=""
                  />
                </div>
                <p className="w-20 leading-5 text-sm md:text-base ">
                  {coin?.item?.name}
                </p>
                <p className="bg-green-200 opacity-40  px-1  text-green-700 rounded-md  text-sm md:text-base ">
                  {coin?.item?.data?.price_change_percentage_24h?.usd.toFixed(
                    2
                  )}
                  %
                </p>
              </div>
              <div className="PRICE_CHART flex flex-col gap-1">
                <p className="font-semibold    text-lg md:text-xl">
                  ${coin?.item?.data?.price.toFixed(2)}
                </p>
                <div className="w-full   h-20 rounded-lg p-1">
                  <img src={coin?.item?.data?.sparkline} alt="" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrndingCoins;
