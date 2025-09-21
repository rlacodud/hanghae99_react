// Action Value
const ADD_TODO = "ADD_TODO";

// Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Initial State
const initialState = {
  todo: [],
};

// Reducer 기본형태
const counter = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, // 기존 state 유지
        todo: [...state.todo, action.payload],
      };
    default:
      return state;
  }
};

// export default reducer
export default counter;