import React from "react";

const Wrapper = ({ children, title }) => {
  return (
    <div className="w-full m-8 bg-white p-6 rounded-2xl shadow-lg ">
      <h1 className="text-3xl font-medium">{title}</h1>
      <hr />
      <div className="max-h-[385px] overflow-y-scroll">
        <div className="mx-2">{children}</div>
      </div>
    </div>
  );
};

export default Wrapper;
