import { duration } from '../config/transitions';

const sleep = time => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
);

const RESET_DELAY = 'RESET_DELAY';
const END_DELAY = 'END_DELAY';

const resetDelay = () => ({
  type: RESET_DELAY,
});

const endDelay = () => ({
  type: END_DELAY,
});

/* THUNKS */

export const waitDelay = () => (
  async (dispatch) => {
    await sleep(duration);
    dispatch(endDelay());
    await sleep(duration);
    dispatch(resetDelay());
  }
);


const delayAnimation = (state = true, action) => {
  switch (action.type) {
    case RESET_DELAY:
      return true;
    case END_DELAY:
      return false;
    default:
      return state;
  }
};

export default delayAnimation;
