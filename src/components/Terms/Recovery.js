import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import TextInput from '../Inputs/TextInput';
import simplePage from '../../hoc/simplePage';
import LoadingWrapper from '../Other/LoadingWrapper';
import { changePassword } from '../../helpers/api';


class Recovery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '',
      password: '',
      loading: false,
      error: '',
      message: '',
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(ev) {
    ev.preventDefault();
    const { token } = this.props;
    const { current, password } = this.state;
    this.setState({ loading: true });
    changePassword(token, current, password)
      .then(() => {
        this.setState({
          loading: false,
          message: 'Contraseña cambiada.',
        });
      })
      .catch((err) => {
        this.setState({
          error: err.response.data.message,
          loading: false,
        });
      });
  }
  render() {
    const { current, password } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <legend>Cambiar contraseña</legend>
        <TextInput
          label="Contraseña actual"
          type="password"
          value={current}
          floatingLabel
          onChange={ev => this.setState({ current: ev.target.value })}
          />
        <TextInput
          label="Nueva contraseña"
          type="password"
          value={password}
          floatingLabel
          onChange={ev => this.setState({ password: ev.target.value })}
        />
        <div className="mui-textfield--error-text">{this.state.error}</div>
        {this.state.message}
        <Button
          color="primary"
          type="submit"
          className="btn--fullwidth"
          variant="raised"
          disabled={this.state.loading}
        >
          <LoadingWrapper loading={this.state.loading}>
            {() => 'Cambiar'}
          </LoadingWrapper>
        </Button>
      </Form>
    );
  }
}

export default connect(state => ({
  token: state.session.token,
}))(simplePage(Recovery));
