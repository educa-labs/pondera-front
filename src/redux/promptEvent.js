const SET_PROMPT_EVENT = 'SET_PROMT_EVENT';
const UNSET_PROMPT_EVENT = 'UNSET_PROMPT_EVENT';

export const setPromptEvent = event => ({
  type: SET_PROMPT_EVENT,
  event,
});

export default (state = null, action) => {
  switch (action.type) {
    case SET_PROMPT_EVENT:
      return action.event;
    case UNSET_PROMPT_EVENT:
      return null;
    default:
      return state;
  }
};

