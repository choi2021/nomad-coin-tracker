import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins></Coins>}></Route>
        <Route path="/:coinId" element={<Coin></Coin>}>
          <Route path={`price`} element={<Price></Price>}></Route>
          <Route path={`chart`} element={<Chart></Chart>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
