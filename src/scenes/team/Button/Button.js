import React from 'react';
import './Button.css';

const UIButton = ({ verificationChange }) => {
  return (
    <button onClick={verificationChange} className="ui-button">
      New Collaborators
    </button>
  );
};

export default UIButton;
