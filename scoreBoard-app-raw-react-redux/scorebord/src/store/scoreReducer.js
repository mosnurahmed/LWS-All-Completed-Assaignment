import { actionType } from "./actionType";
const { ADD_MATCH, DECREMENT, DELETE, INCREMENT, RESET } = actionType;

const initialState = [
  {
    id: 1,
    name: 1,
    score: 0,
  },
];

export const scoreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MATCH: {
      const match = {
        id: action.payload.id,
        name: action.payload.value,
        score: 0,
      };
      return [...state, match];
    }

    case INCREMENT: {
      return state.map((match) => {
        if (match.id === action.payload.id) {
          if (action.payload.value >= 0) {
            match.score += action.payload.value;
          }
        }
        return match;
      });
    }
    case DECREMENT: {
      return state.map((match) => {
        if (match.id === action.payload.id) {
          if (action.payload.value >= 0 && match.score > 0) {
            match.score -= action.payload.value;
          }
        }
        return match;
      });
    }
    case DELETE: {
      if (state.length > 1) {
        return state.filter((match) => match.id !== action.payload);
      }
      return state;
    }
    case RESET: {
      return state.map((m) => {
        m.score = 0;
        return m;
      });
    }

    default: {
      return state;
    }
  }
};
