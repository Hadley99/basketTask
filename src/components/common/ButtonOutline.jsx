import React from "react";

const ButtonOutline = (props) => {
  return (
    <button
      {...props}
      type="button"
      className="bg-white  border-2 border-blue-400 p-2 rounded-md disabled:bg-gray-400 hover:shadow-inputShadow disabled:hover:shadow-none"
    >
      {props.value}
    </button>
  );
};

export default ButtonOutline;
