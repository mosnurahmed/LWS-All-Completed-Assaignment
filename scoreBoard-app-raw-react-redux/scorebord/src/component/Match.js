import React, { useState } from "react";
import { useDispatch } from "react-redux";
import deleteIcon from "../assets/image/delete.svg";
import { actionType } from "../store/actionType";
const { DECREMENT, DELETE, INCREMENT } = actionType;

export default function Match({ match }) {
  const [incrementValue, setIncrementValue] = useState(null);
  const [decrementValue, setDecrementValue] = useState(null);
  const dispatch = useDispatch();

  const incrementHandler = (e) => {
    e.preventDefault();
    dispatch({ type: INCREMENT, payload: { id: match.id, value: parseInt(incrementValue) } });
  };
  const decrementHandler = (e) => {
    e.preventDefault();
    dispatch({ type: DECREMENT, payload: { id: match.id, value: parseInt(decrementValue) } });
  };

  const deleteHandler = () => {
    dispatch({
      type: DELETE,
      payload: match.id,
    });
  };
  return (
    <div className="match" id="singleMatch">
      <div className="wrapper">
        <button className="lws-delete" onClick={deleteHandler}>
          <img src={deleteIcon} alt="" />
        </button>
        <h3 className="lws-matchName">Match {match.name} </h3>
      </div>
      <div className="inc-dec">
        <form className="incrementForm" onSubmit={incrementHandler}>
          <h4>Increment</h4>
          <input
            type="number"
            name="increment"
            className="lws-increment"
            value={incrementValue}
            onChange={(e) => {
              setIncrementValue(e.target.value);
            }}
          />
        </form>
        <form className="decrementForm" onSubmit={decrementHandler}>
          <h4>Decrement</h4>
          <input
            type="number"
            name="decrement"
            className="lws-decrement"
            onChange={(e) => {
              setDecrementValue(e.target.value);
            }}
          />
        </form>
      </div>
      <div className="numbers">
        <h2 className="lws-singleResult" id="score">
          {match.score > 0 ? match.score : 0}
        </h2>
      </div>
    </div>
  );
}
