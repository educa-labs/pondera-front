import React from 'react';
import ResultHeader from '../components/Result/ResultHeader';
import ResultWeights from '../components/Result/ResultWeights';
import ResultBody from '../components/Result/ResultBody';
import ResultFooter from '../components/Result/ResultFooter';

const result = {
  title: 'Derecho en Universidad de Chile',
  nem: 20,
  ranking: 20,
  math: 20,
  language: 20,
  history: 20,
  score: 650,
  cut: 690,
  diff: -40,
  careers: [
    { title: 'Derecho PUC' },
    { title: 'Derecho UGM' },
    { title: 'Derecho UAI' },
  ],
};

const Result = ({ goBack }) => (
  <div className="page">
    <ResultHeader title={result.title} />
    <ResultWeights result={result} />
    <ResultBody result={result} />
    <ResultFooter onClick={goBack} />
  </div>
);

export default Result;
