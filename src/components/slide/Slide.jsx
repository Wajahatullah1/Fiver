import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop type validation
import './Slide.scss';
import Slider from 'infinite-react-carousel';

export const Slide = ({ children, slidesToShow, arrowScroll }) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
          {children}
        </Slider>
      </div>
    </div>
  );
};

// Add prop type validation
Slide.propTypes = {
  children: PropTypes.node, // PropTypes.node allows any valid JSX element as children
  slidesToShow: PropTypes.number.isRequired, // Assuming slidesToShow is a required number
  arrowScroll: PropTypes.number.isRequired, // Assuming arrowScroll is a required number
};

export default Slide;
