import assert from 'assert';

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT' : return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};

describe('Redux state', function () {
    it('State should be incremented and equals 1', function () {
        assert.equal(1, counter(0, {type: 'INCREMENT'}));
    });
    it('State should be incremented and equals 2', function () {
        assert.equal(2, counter(1, {type: 'INCREMENT'}));
    });
    it('State should be decremented and equals 1', function () {
        assert.equal(1, counter(2, {type: 'DECREMENT'}));
    });
});