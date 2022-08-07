import React from "react";

const Button = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="bg-blue-400 text-white p-2 rounded-md disabled:bg-gray-400 hover:shadow-inputShadow disabled:hover:shadow-none"
    >
      {props.value}
    </button>
  );
};

export default Button;
