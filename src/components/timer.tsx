import React, { ReactPropTypes } from 'react'
import actions from '../redux/actions';

const Timer = ({ start, stop, reset, time, status }) => (
    <div>
        <p>
            {getFormattedTime(state)} ({state.status})
      </p>
        <button
            disabled={state.status === 'Running'}
            onClick={() => reset()}>
            Reset
      </button>
        <button
            disabled={state.status === 'Running'}
            onClick={() => start()}>
            Start
      </button>
        <button
            disabled={state.status === 'Stopped'}
            onClick={stop}>
            Stop
      </button>
    </div>
);

Timer.propTypes = {
    start: actions.start,
    stop: actions.stop,
    status: actions.status,
    time: actions.time
}