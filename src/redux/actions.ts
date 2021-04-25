// actions.js
export default {
    start: () => ({ type: 'START' }),
    tick: () => ({ type: 'TICK' }),
    stop: () => ({ type: 'STOP' }),
    reset: () => ({ type: 'RESET' }),
    status: () => ({ type: 'STATUS' }),
    time: () => ({ type: 'TIME' }),
};

