const SET_FORM_VALUES = 'SET_FORM_VALUES';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FORM_VALUES:
      return action.payload;
    default:
      return state;
  }
};

export const setFormValues = values => ({
  type: SET_FORM_VALUES,
  payload: values,
});

export default reducer;

