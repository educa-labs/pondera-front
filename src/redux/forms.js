const SET_FORM_VALUE = 'SET_FORM_VALUE';

export const logChange = (form, field, value) => ({
  type: SET_FORM_VALUE,
  form,
  field,
  value,
});

const createForm = (name, fields) => {
  const initalState = {};
  fields.forEach((field) => {
    initalState[field] = '';
  });
  return (state = initalState, action) => {
    switch (action.type) {
      case SET_FORM_VALUE:
        if (action.form === name) {
          return Object.assign({}, state, {
            [action.field]: action.value,
          });
        }
        return state;
      default:
        return state;
    }
  };
};

export default createForm;

