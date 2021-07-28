import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <ul className="feedback-list">
      {option.map((value) => (
        <li key={value}>
          <button onClick={onLeaveFeedback} data-value={value}>
            {value}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
