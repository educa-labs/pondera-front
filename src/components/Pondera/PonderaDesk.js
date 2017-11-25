import React from 'react';
import PropTypes from 'prop-types';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';
import HideCard from '../Layout/HideCard';
import Logo from '../../assets/svg/logo-pondera.svg';
import ResultHeader from '../Result/ResultHeader';
import ResultWeights from '../Result/ResultWeights';
import ResultBody from '../Result/ResultBody';
import ResultFooter from '../Result/ResultFooter';

const PonderaDesk = ({
  result, children, index, onSimilarClick, calculating,
}) => (
  <Container fluid>
    <div className="big-logo">
      <Logo width={400} height={150} />
    </div>
    <HideCard hidden={!index}>
      {React.Children.only(children)}
      <Panel className="panel-result fixed-size-panel">
        <Container className="no-margin">
          <legend>Resultado</legend>
        </Container>
        {result && <ResultHeader result={result} />}
        {result && <ResultWeights result={result} />}
        {result && <ResultBody result={result} onSimilarClick={onSimilarClick} />}
        {result && <ResultFooter desk calculating={calculating} />}
      </Panel>
    </HideCard>
  </Container>
);

PonderaDesk.defaultProps = {
  result: null,
};

PonderaDesk.propTypes = {
  result: PropTypes.object,
  children: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  onSimilarClick: PropTypes.func.isRequired,
  calculating: PropTypes.bool.isRequired,
}

export default PonderaDesk;
