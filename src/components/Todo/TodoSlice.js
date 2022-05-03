// const initState = [
//   { id: 1, name: "Studying", completed: false, priority: "Medium" },
//   { id: 2, name: "Play game", completed: true, priority: "Low" },
//   { id: 3, name: "Watch movie", completed: false, priority: "High" },
// ];
// const todoReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoListStatus":
//       return [...state, action.payload];
//     default:
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? {
//               ...state,
//               completed: !todo.completed,
//             }
//           : todo
//       );
//   }
// };

// export default todoReducer;

import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todoList",
  initialState: JSON.parse(localStorage.getItem("list-todo")) || [],

  // [
  //   {
  //     id: 1,
  //     name: "Studying",
  //     completed: false,
  //     priority: "Medium",
  //     isRemoved: false,
  //   },
  //   {
  //     id: 2,
  //     name: "Play game",
  //     completed: true,
  //     priority: "Low",
  //     isRemoved: false,
  //   },
  //   {
  //     id: 3,
  //     name: "Watch movie",
  //     completed: false,
  //     priority: "High",
  //     isRemoved: false,
  //   },
  // ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("list-todo", JSON.stringify(state));
    },
    toggleTodoListStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
      localStorage.setItem("list-todo", JSON.stringify(state));
    },
    removeTodoItem: (state, action) => {
      const removeItem = state.find((todo) => todo.id === action.payload);
      removeItem.isRemoved = true;
      localStorage.setItem("list-todo", JSON.stringify(state));
    },
    removeAll: (state, action) => {
      state.length = 0;
      localStorage.clear();
    },
  },
});
