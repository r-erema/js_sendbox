import assert from 'assert';
import deepFreeze from 'deep-freeze';
import {createStore/*, combineReducers*/} from 'redux';
import {ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, SHOW_ALL, SHOW_COMPLETED} from '../js/constants';

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                id: action.id,
                text: action.text,
                completed: false
            };
        case TOGGLE_TODO:
            if (state.id !== action.id) {
                return state;
            }

            return {
                ...state,
                completed: !state.completed
            };
        default: return state;
    }
};

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];
        case TOGGLE_TODO:
            return state.map(t => todo(t, action));
        default: return state;
    }
};

const visibilityFilter = (state = SHOW_ALL, action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default: return state;
    }
};

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce(
            (nextState, key) => {
                nextState[key] = reducers[key](
                    state[key],
                    action
                );
                return nextState;
            },
            {}
        );
    };
};

const todoApp = combineReducers({
    todos,
    visibilityFilter
});

const store = createStore(todoApp);

describe('Todo list reducer', function () {

    it('Add todo', function () {
        const stateBefore = [];
        const action = {
            type: ADD_TODO,
            id: 0,
            text: 'Learn Redux'
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            }
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);
        assert.deepEqual(todos(stateBefore, action), stateAfter);
    });

    it('Toggle todo', function () {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: false
            },
        ];
        const action = {
            type: TOGGLE_TODO,
            id: 1
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                completed: false
            },
            {
                id: 1,
                text: 'Go shopping',
                completed: true
            },
        ];

        deepFreeze(stateBefore);
        deepFreeze(action);
        assert.deepEqual(todos(stateBefore, action), stateAfter);
    });


    it('Visibility filter', function () {
        const stateResult = {
            todos: [],
            visibilityFilter: SHOW_COMPLETED
        };
        store.dispatch({
            type: SET_VISIBILITY_FILTER,
            filter: SHOW_COMPLETED
        });
        assert.deepEqual(store.getState(), stateResult);
    });

});