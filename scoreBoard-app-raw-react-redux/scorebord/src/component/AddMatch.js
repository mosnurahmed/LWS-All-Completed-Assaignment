import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionType } from "../store/actionType";
const { ADD_MATCH, RESET } = actionType;

function AddMatch() {
  const matches = useSelector((state) => state.matches);
  const id = matches.length + 1;

  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch({
      type: ADD_MATCH,
      payload: { id, value: id },
    });
  };
  const resetHandler = () => {
    dispatch({
      type: RESET,
    });
  };

  return (
    <div className="add_match">
      <button className="btn lws-addMatch" onClick={addHandler}>
        Add Another Match
      </button>
      <button className="lws-reset">
        <svg
          fill="none"
          width="24"
          height="24"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          ></path>
        </svg>
        <span onClick={resetHandler}>Reset</span>
      </button>
    </div>
  );
}

export default AddMatch;
