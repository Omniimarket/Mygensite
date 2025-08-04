import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="text-center mt-8 text-blue-400 font-medium flex items-center justify-center">
      <div className="animate-spin inline-block w-6 h-6 border-4 border-blue-400 border-t-transparent rounded-full mr-2"></div>
      {message}
    </div>
  );
};

export default LoadingSpinner;
