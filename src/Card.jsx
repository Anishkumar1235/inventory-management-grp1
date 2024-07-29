import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, number, description, type }) => {
  
  const colorClasses = {
    default: {
      bg: 'bg-blue-300',
      border: 'border-gray-300',
      text: 'text-gray-900',
    },
    value: {
      bg: 'bg-blue-300',
      border: 'border-blue-300',
      text: 'text-blue-900',
    },
    stock: {
      bg: 'bg-blue-300',
      border: 'border-green-300',
      text: 'text-green-900',
    },

  };

  const { bg, border, text } = colorClasses[type] || colorClasses.default;

  return (
    <div
      className={`flex flex-col items-center p-6 ${bg} ${border} ${text} border rounded-lg shadow-md transition-transform transform hover:scale-105`}
    >
      {icon && (
        <div className={`flex items-center justify-center text-4xl mb-4 ${text}`}>
          {icon}
        </div>
      )}
      {number && (
        <div className={`text-2xl font-semibold ${text} mb-2 text-center`}>
          {number}
        </div>
      )}
      {description && (
        <p className={`text-gray-700 text-center`}>
          {description}
        </p>
      )}
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.node,
  number: PropTypes.string,
  description: PropTypes.string,
  type: PropTypes.oneOf(['default', 'value', 'stock']),
};

Card.defaultProps = {
  type: 'default',
};

export default Card;
