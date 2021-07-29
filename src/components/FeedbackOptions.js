import React from "react";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onGoodClick, onNeutralClick, onBadClick }) => {
  return (
    <ul className="feedback-list">
      <li>
        <button onClick={onGoodClick}>Good</button>
      </li>
      <li>
        <button onClick={onNeutralClick}>Neutral</button>
      </li>
      <li>
        <button onClick={onBadClick}>Bad</button>
      </li>
    </ul>
  );
};

FeedbackOptions.propTypes = {
  onGoodClick: PropTypes.func.isRequired,
  onNeutralClick: PropTypes.func.isRequired,
  onBadClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
