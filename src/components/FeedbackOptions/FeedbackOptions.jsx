import React from 'react';
import css from './feedbackOptions..module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.container}>
    {options.map(option => (
      <button
        className={css.button}
        type="button"
        onClick={() => onLeaveFeedback(option)}
        key={option}
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;