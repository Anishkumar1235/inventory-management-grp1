
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ icon, number, description, type }) => {
  const colorClasses = {
    default: {
      bg: 'bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md',
      border: 'border-gray-300',
      text: 'text-blue-900',
    },
    value: {
      bg: 'bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md',
      border: 'border-blue-300',
      text: 'text-blue-900',
    },
    stock: {
      bg: 'bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md',
      border: 'border-green-300',
      text: 'text-blue-900',
    },
    supplier: {
      bg: 'bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md',
      border: 'border-yellow-300',
      text: 'text-blue-900',
    },
    product: {
      bg: 'bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md',
      border: 'border-red-300',
      text: 'text-blue-900',
    },
    graph: {
      bg: 'bg-gradient-to-tr from-emerald-300 to-fuchsia-500 shadow-md',
      border: 'border-purple-300',
      text: 'text-blue-900',
    }
  };

  const { bg, border, text } = colorClasses[type] || colorClasses.default;

  return (
    <div className={`flex flex-col items-center p-6 ${bg} ${border} ${text} border rounded-lg shadow-md transition-transform transform hover:scale-105`}>
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
        <p className="text-black font-bold text-center">
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
  type: PropTypes.oneOf(['default', 'value', 'stock', 'supplier', 'product', 'graph']),
};

Card.defaultProps = {
  type: 'default',
};

export default Card;
