import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;

export const statusFilterSelector = (state) => state.filter.status;

export const searchTextSelector = (state) => state.filter.search;

export const priorityFilterSelector = (state) => state.filter.priority;

export const isRemoveSelector = (state) => state.filter.isRemoved;

export const todoListRemainSelector = createSelector(
  todoListSelector,
  statusFilterSelector,
  searchTextSelector,
  priorityFilterSelector,
  (todoList, status, searchText, priority,isRemoved) => {
    return todoList.filter((todo) => {
      if(!todo.isRemoved){
        if (status === "All") {
          return priority.length
            ? todo.name.includes(searchText) && priority.includes(todo.priority)
            : todo.name.includes(searchText);
        }
        return (
          todo.name.includes(searchText) &&
          (status === "Completed" ? todo.completed : !todo.completed) &&
          (priority.length ? priority.priority.includes(todo.priority) : true)
        );
      }
    });
  }
);
