import {ADD_TODO, SHOW_ACTIVE, SHOW_ALL, SHOW_COMPLETED, TOGGLE_TODO} from "../constants";
import todo from './todo';
import { combineReducers } from 'redux';

const byId = (state = {}, action) => {
    switch (action.type) {
        case ADD_TODO:
        case TOGGLE_TODO:
            return {
                ...state,
                [action.id]: todo(state[action.id], action)
            };
        default: return state;
    }
};


const allIds = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO: return [...state, action.id];
        default: return state;
    }
};

const todos = combineReducers({byId, allIds});

export default todos;

const getAllTodos = (state) => state.allIds.map(id => state.byId[id]);

export const getVisibleTodos = (state, filter) => {
    const allTodos = getAllTodos(state);
    switch (filter) {
        case SHOW_ALL: {return allTodos;}
        case SHOW_COMPLETED: {
            return allTodos.filter(t => t.completed);
        }
        case SHOW_ACTIVE: {
            return allTodos.filter(t => !t.completed);
        }
        default:
            throw new Error(`Unknown filter: ${filter}.`)
    }
};