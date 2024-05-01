import React, { useState } from "react";

const image1Url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR345t0DCEfMSH4YpmFgr0mtHs9YGvpC-r30XLbkP1qaA&s";
const image2Url =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRin0gO9gxofFDPYoFiqcY4OXiI44nD-n976s1TTiopyw&s";

function Coins() {
  const [coin, setCoin] = useState(false);

  const [point1, setPoint1] = useState(0);
  const [point2, setPoint2] = useState(0);

  function handleCoin() {
    let coinImage = ["image1Url", "image2Url"];

    let randomImage = Math.floor(Math.random() * coinImage.length);

    if (randomImage) {
      setPoint1((prev) => prev + 1);
    } else {
      setPoint2((prev) => prev + 1);
    }

    setCoin(randomImage);
  }

  const generalImg = coin == true ? image1Url : image2Url;

  console.log("coin", coin);
  console.log("generalImg ", generalImg);

  return (
    <div>
         <h2>Task-5</h2>
      <ol>
        <li>Heads :{point1} </li>
        <li>Tails :{point2} </li>
      </ol>

      <img src={generalImg} width={200} />
      <button onClick={handleCoin} >flip</button>
    </div>
  );
}

export default Coins;
