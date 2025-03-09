import React from "react";

export default function LoadingSpinner() {
  return (
    <div className="absolute top-[50%] left-[50%] translate-[-50%] flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
