import React from "react";
import { useGlobalContext } from "../../../store/global/GlobalProvider";
import { TYPES } from "../../../store/global/types";

function Content() {
  const {
    state: { basket, price },
    dispatch,
  } = useGlobalContext();

  function handleIncrement() {
    dispatch({ type: TYPES.BASKET, payload: basket + 1 });
  }

  function handleDecrement() {
    if (basket <= 0) return;
    dispatch({ type: TYPES.BASKET, payload: basket - 1 });
  }
  return (
    <div style={{ border: "1px solid black" }}>
      <img
        src="https://www.applesfromny.com/wp-content/uploads/2020/05/Braeburn.png"
        alt="apple"
        width={400}
      />
      <div>Apple</div>
      <div>1.49 $</div>

      <div
        style={{
          display: "flex",
          padding: "20px",
          justifyContent: "center",
          gap: "50px",
        }}
      >
       <button style={{ backgroundColor: 'green' }} onClick={handleIncrement}>
          +
        </button>
        <div style={{ fontSize: '28px' }}>{price * basket}</div>
        <button style={{ backgroundColor: 'red' }} onClick={handleDecrement}>
          -
        </button>
      </div>
    </div>
  );
}

export default Content;
