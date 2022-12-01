import React, { useState } from "react";

function Sushi({ sushi, chargeMoney, stackPlates, walletMoney }) {

  const [isEaten, setIsEaten] = useState(false);

  function handleEatSushi() {
    if (walletMoney >= sushi.price) {
      setIsEaten(true);
      chargeMoney(sushi.price);
      stackPlates(sushi);
    } else {
      alert("You are out of money!!!!");
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEatSushi}>
        {isEaten ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
