import filterReducers from "../components/Filters/FilterSlice";
import todoReducer from "../components/Todo/TodoSlice";
import { combineReducers } from "redux";

// const rootReducer = (state={}, action) => {
//   return {
//     filter: filterReducers(state.filter, action),
//     todoList: todoReducer(state.todoList, action),
//   };
// };

const rootReducer = combineReducers({
  filter: filterReducers,
  todoList: todoReducer,
});

export default rootReducer;
