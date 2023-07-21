const increment = document.getElementsByClassName("incrementForm");
const decrement = document.getElementsByClassName("decrementForm");
const score = document.getElementById("score");
const matches = document.getElementById("matches");

let match = document.getElementById("singleMatch");

const initialState = [
  {
    id: 0,
    value: 120,
  },
  {
    id: 1,
    value: 120,
  },
  {
    id: 2,
    value: 120,
  },
];

// const ADD_MATCH = "addMatch";

// const addMatch = (id) => {
//   return {
//     type: ADD_MATCH,
//     payload: id + 1,
//   };
// };

// function reducer(state = initialState, action) {
//   if (action.type === ADD_MATCH) {
//     const add = {
//       id: action.payload,
//       value: 120,
//     };
//     return [...state, add];
//   }
// }

// const store = Redux.createStore(reducer);

// const render = () => {
//   const state = store.getState();
//   console.log(state);
// };

// store.subscribe(render);

initialState.map((m) => {
  const app = matches.appendChild(match);
  return app;
});
