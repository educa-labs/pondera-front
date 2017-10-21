import Input from 'muicss/lib/react/input';
import WithError from '../../hoc/EnhanceInput';

function TextInput() {
  return WithError(Input);
}

export default TextInput();
