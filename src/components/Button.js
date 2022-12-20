import React from "react";

function Button({ text, onClick, ...otherProps }) {
  return (
    <button onClick={onClick} {...otherProps}>
      {text}
    </button>
  );
}

export default Button;
