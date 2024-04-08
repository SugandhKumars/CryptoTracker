const Navbar = () => {
  return (
    <>
      <div className="flex font-bold w-full py-3 border-b-[1px] fixed mt-0 ml-0 bg-zinc-300">
        <div className=" py-2  flex  justify-center w-[20%]">Name</div>
        <div className=" py-2  flex justify-center w-[5%]">Price</div>
        <div className=" py-2  flex justify-center w-[5%]">1h%</div>
        <div className=" py-2  flex justify-center w-[5%]">24h%</div>
        <div className=" py-2  flex justify-center w-[5%]">7d%</div>
        <div className=" py-2  flex justify-center w-[16%]">Market Cap</div>
        <div className=" py-2  flex justify-center w-[15%]">Volume(24h)</div>
        <div className=" py-2  flex justify-center w-[15%]">
          Circulating Supply
        </div>
        <div className="py-2  flex justify-center w-[15%]">Last 7 Days</div>
      </div>
    </>
  );
};

export default Navbar;
