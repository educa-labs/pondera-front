import React from 'react';
import { Transition } from 'react-transition-group';
import { Route } from 'react-router-dom';


const PageTransition = ({
  currentPage,
  defaultPath,
  pathOne,
  pathTwo,
  children,
}) => (
  <div className="page-transition">
    <Transition in={currentPage === pathOne || currentPage === defaultPath} timeout={500}>
      {status => (
        <div className={`pages-wrapper fade fade-${status}`}>
          <Route
            path={pathOne}
            children={props => (
              React.cloneElement(children[0], props)
            )}
          />
          <Route
            path={pathTwo}
            children={props => (
              React.cloneElement(children[1], props)
            )}
          />
        </div>
      )}
    </Transition>
  </div>
);

export default PageTransition;
