import React from 'react';
import ResultHeader from './ResultHeader';
import ResultWeights from './ResultWeights';
import ResultBody from './ResultBody';
import ResultFooter from './ResultFooter';

/*
 title: 'Derecho en Universidad Mayor',
        similar: [
          { id: 1, title: 'Derecho' },
          { id: 2, title: 'Ingenieria PUC' },
          { id: 2, title: 'Ingenieria UCH' },
        ],
        score: 655,
        cut: 444,
        weights: {
          language: 20,
          math: 20,
          history: 10,
          nem: 25,
          ranking: 25,
        },
*/

const Result = ({ goBack, result }) => (
  result ? (
    <div className="page">
      <ResultHeader title={result.title} />
      <ResultWeights weights={result.weights} />
      <ResultBody result={result} />
      <ResultFooter onClick={goBack} />
    </div>
  ) : null
);

export default Result;
