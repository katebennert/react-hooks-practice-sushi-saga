import React, { useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [walletMoney, setWalletMoney] = useState(100);
  const [plates, setPlates] = useState([]);

  function chargeMoney(price) {
    setWalletMoney(walletMoney - price);
  }

  function stackPlates(sushi) {
    setPlates([...plates, sushi]);
  }

  return (
    <div className="app">
      <SushiContainer API={API} chargeMoney={chargeMoney} stackPlates={stackPlates} walletMoney={walletMoney}/>
      <Table walletMoney={walletMoney} plates={plates}/>
    </div>
  );
}

export default App;
