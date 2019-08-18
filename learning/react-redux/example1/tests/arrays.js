import assert from 'assert';
import deepFreeze from 'deep-freeze';

const addCounter = (list) => {
    return [...list, 0];
};

const removeCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)
    ];
};

const incrementCounter = (list, index) => {
    return [
        ...list.slice(0, index),
        list[index] + 1,
        ...list.slice(index + 1)
    ]
};

describe('Avoiding array mutations', function () {

    it('Add counter test', function () {
        const listBefore = [];
        const listAfter = [0];

        deepFreeze(listBefore);
        assert.deepEqual(addCounter(listBefore), listAfter);
    });

    it('Remove counter test', function () {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 20];

        deepFreeze(listBefore);
        assert.deepEqual(removeCounter(listBefore, 1), listAfter);
    });

    it('Increment counter test', function () {
        const listBefore = [0, 10, 20];
        const listAfter = [0, 11, 20];

        deepFreeze(listBefore);
        assert.deepEqual(incrementCounter(listBefore, 1), listAfter);
    });

});