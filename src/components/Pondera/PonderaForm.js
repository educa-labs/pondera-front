import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import is from 'is_js';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Container from 'muicss/lib/react/container';
import TextInput from '../Inputs/TextInput';
import SelectInput from '../Inputs/SelectInput';
import wrapCard from '../../hoc/wrapCard';

const options = [
  { value: 1, label: 'Santiago' },
  { value: 2, label: 'La Serena' },
];

const renderInput = props => (
  <Input
    {...props}
  />
);


class PonderaForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nem: '',
    };
    this.onChange = this.onChange.bind(this);
    this.logValue = this.logValue.bind(this);
  }

  onChange(ev) {
    console.log(ev);
    this.setState({ nem: ev.target.value });
  }

  logValue(field) {
    return (ev) => {
      this.setState({ [field]: ev.target.value });
    }
  }

  render() {
    return (
      <Form onSubmit={this.props.onSubmit}>
        <legend>Ponderar</legend>
        <input
          type="text"
          value={this.state.nem}
          onChange={ev => this.setState({ nem: ev.target.value })}
        />
        <div className="mui--text-subhead">
          Ingresa tus puntajes y carrera
        </div>
        
        <Container>
          <Row>
            <Col>
              <TextInput
                label="Nombre y apellido"
                floatingLabel
                onChange={this.logValue('nem')}
                value={this.state.nem}
              />
            </Col>
          </Row>
        </Container>
        <SelectInput
          label="Comuna"
          options={options}
        />
        <SelectInput
          label="Comuna"
          options={options}
        />
        <Row>
          <Col xs={6}>
            <Button
              color="primary"
              type="button"
              className="btn--fullwidth"
              variant="flat"
            >
              Reestablecer
            </Button>
          </Col>
          <Col xs={6}>
            <Button
              color="primary"
              type="submit"
              className="btn--fullwidth"
              variant="raised"
            >
              Calcular
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }
}  
  


export default wrapCard(PonderaForm);
