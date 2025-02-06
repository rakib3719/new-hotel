import React from 'react';

const Loader = () => {
    return (
        <div>
 <div className="flex items-center justify-center mt-12 ">
      <div className="relative w-24 h-24">
        {/* Rotating Outer Circle */}
        <div className="absolute inset-0 border-4 border-t-rose-300 border-rose-700 rounded-full animate-spin"></div>

        {/* Inner Hotel Icon */}
        <div className="absolute inset-4 flex flex-col items-center justify-center bg-white rounded-full">
          <div className="w-8 h-8 bg-yellow-500 rounded-b-md"></div>
          <div className="w-10 h-4 bg-rose-500 rounded-t-md"></div>
          <div className="mt-2 text-center text-xs font-semibold text-gray-900">Seven View</div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Loader;