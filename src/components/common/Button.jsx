import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="bg-blue-400 border-2 border-blue-400 text-white p-1.5 rounded-md disabled:bg-gray-400 hover:shadow-inputShadow disabled:hover:shadow-none disabled:border-gray-400"
    >
      {props.value}
    </button>
  );
};

export default Button;
