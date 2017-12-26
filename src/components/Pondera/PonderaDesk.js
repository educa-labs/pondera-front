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
  result, children, index, onSimilarClick, resultName, similar, special
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
        {result && <ResultHeader title={resultName} />}
        {result && <ResultWeights result={result} />}
        {result && <ResultBody special={special} similar={similar} result={result} onSimilarClick={onSimilarClick} />}
        {result && <ResultFooter desk />}
      </Panel>
    </HideCard>
  </Container>
);

PonderaDesk.defaultProps = {
  result: null,
  similar: null,
};

PonderaDesk.propTypes = {
  result: PropTypes.object,
  similar: PropTypes.array,
  children: PropTypes.element.isRequired,
  index: PropTypes.number.isRequired,
  onSimilarClick: PropTypes.func.isRequired,
  resultName: PropTypes.string.isRequired,
};

export default PonderaDesk;
