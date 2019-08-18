import assert from 'assert';
import deepFreeze from 'deep-freeze';

const toggleTodo = (todo) => {
    return {
        ...todo,
        completed: !todo.completed
    }
};

describe('Avoiding object mutations', function () {

    it('Toggle todo test', function () {
        const todoBefore = {
            id: 0,
            text: 'Learn Redux',
            completed: false
        };
        const todoAfter = {
            id: 0,
            text: 'Learn Redux',
            completed: true
        };

        deepFreeze(todoBefore);
        assert.deepEqual(toggleTodo(todoBefore), todoAfter);
    });


});