import Coin from "./Components/Coin";
import CoinData from "./Components/CoinData";
import CoinsData from "./Components/CoinsData";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <CoinsData />
            </>
          }
        />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </>
  );
}

export default App;
