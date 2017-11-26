import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';


/**
 * PageTransition manages the smooth transition between two full width children
 * Root div is full width and has no overflow-x
 * The page container stack horizontally both childs
 * Each child must be 100vw witdh
 */

const PageTransition = ({
  currentPage,
  children,
}) => (
  <div className="page-transition">
    <Motion style={{ x: spring(currentPage * 100) }}>
      {({ x }) => (
        <div className="page-container" style={{ transform: `translateX(-${x}vw` }}>
          {children[0]}
          {children[1]}
        </div>
      )}
    </Motion>
  </div>
);

PageTransition.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default PageTransition;
