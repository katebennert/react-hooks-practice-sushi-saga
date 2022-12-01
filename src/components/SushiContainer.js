import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ API, chargeMoney, stackPlates, walletMoney }) {

  const [sushis, setSushis] = useState([]);
  let [min, setMin] = useState(1);
  let [max, setMax] = useState(4);

  const sushisToRender = sushis.filter(sushi => (sushi.id >= min && sushi.id <= max));

  function handleMoreClick() {
    setMin(min+=4);
    setMax(max+=4);
  }
 
  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(sushiData => setSushis(sushiData));
  }, []);

  return (
    <div className="belt">
      {sushisToRender.map(sushi => <Sushi key={sushi.id} sushi={sushi} chargeMoney={chargeMoney} stackPlates={stackPlates} walletMoney={walletMoney}/>)}
      <MoreButton handleMoreClick={handleMoreClick}/>
    </div>
  );
}

export default SushiContainer;
