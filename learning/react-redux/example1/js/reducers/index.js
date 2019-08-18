import {combineReducers} from "redux";
import byId, * as fromTodos from "./todos";

const todoApp = combineReducers({todos: byId});

export default todoApp;

export const getVisibleTodos = (state, filter) => fromTodos.getVisibleTodos(state.todos, filter);