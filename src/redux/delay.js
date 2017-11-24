const sleep = time => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  })
);

const DELAY_ON = 'DELAY_ON';
const DELAY_OFF = 'DELAY_OFF';

const delayOn = () => ({
  type: DELAY_ON,
});

const delayOff = () => ({
  type: DELAY_OFF,
});

/* THUNKS */

export const wait = duration => (
  async (dispatch) => {
    dispatch(delayOn());
    await sleep(duration);
    dispatch(delayOff());
  }
);


const delay = (state = true, action) => {
  switch (action.type) {
    case DELAY_ON:
      return true;
    case DELAY_OFF:
      return false;
    default:
      return state;
  }
};

export default delay;
