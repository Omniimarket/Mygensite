import React from 'react';
import Link from 'next/link';

const GeneratorCard = ({ name, icon, color, href, desc }) => {
  return (
    <Link
      href={href}
      className={`
        generator-card bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col items-center text-center
        border border-${color}-700 hover:shadow-xl hover:border-${color}-500
        transform hover:scale-[1.02] transition-all duration-300 ease-in-out
      `}
    >
      <div className={`text-${color}-400 text-6xl mb-4`}>{icon}</div>
      <h3 className={`text-2xl font-bold mb-2 text-${color}-300`}>{name}</h3> {/* Now dynamic */}
      <p className="text-gray-400 mb-6">{desc}</p>
      <span
        className={`
          bg-gradient-to-r from-${color}-600 to-${color}-700 text-white px-6 py-3 rounded-full
          text-md font-semibold hover:from-${color}-700 hover:to-${color}-800
          transition-colors shadow-md
        `}
      >
        Generate Now
      </span>
    </Link>
  );
};

export default GeneratorCard;
