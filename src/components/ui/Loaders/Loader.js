import React from "react";

const Loader = () => {
  return (
    <div className="animate-pulse min-w-full  mt-5 p-3">
      <h1 className="text-sm text-slate-400 bg-gray-100  p-3">Loading ....</h1>
      <div className="mt-2 pb-4 flex items-center space-between border-b"></div>
      <div className="mt-4 text-sm bg-gray-100 h-4  p-3"></div>
      <div className="mt-1 text-sm bg-gray-100 h-4  p-3"></div>
      <div className="mt-1 text-sm bg-gray-100 h-4 p-3"></div>
      <div className="mt-1 text-sm bg-gray-100 h-4  p-3"></div>
      <div className="mt-1 text-sm bg-gray-100 h-4  p-3"></div>
    </div>
  );
};

export default Loader;
