import React, { useEffect, useState } from "react";
import CoinData from "./CoinData";

const CoinsData = () => {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [button, setButton] = useState(null);

  const getCoins = async () => {
    const data = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=true&price_change_percentage=1h%2C24h%2C7d&locale=en&precision=6`
    );
    const res = await data.json();
    setCoins(res);
  };
  useEffect(() => {
    console.log("Api Called");
    getCoins();
  }, [page]);
  const handleClick = (pageNo) => {
    setPage(pageNo);
    setButton(pageNo);
  };
  console.log(page);
  console.log(coins);
  return (
    <>
      <div className="pt-16">
        {coins?.map((coin, i) => (
          <CoinData key={coin?.id} coin={coin} />
        ))}
      </div>
      <div className="flex justify-center m-2">
        {[...Array(20).fill(1)].map((n, i) => (
          <p
            key={i}
            className={`border-2 px-2 py-1 mx-1 cursor-pointer active:bg-blue-300 ${
              button == i + 1 && "bg-black text-white"
            }`}
            onClick={() => handleClick(i + 1)}
          >
            {i + 1}
          </p>
        ))}
      </div>
    </>
  );
};

export default CoinsData;
