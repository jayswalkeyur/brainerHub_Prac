import React from 'react';

function Button({ type = "button", className = "", onClick, logo, children }) {
  return (
    <button
      type={type}
      className={`px-6 py-3 rounded-lg text-white font-semibold ${className} flex items-center justify-center space-x-2 transition duration-300`}
      onClick={onClick}
    >
 
      {logo && <span className="w-5 h-5">{logo}</span>}

      <span>{children}</span>
    </button>
  );
}

export default Button;
