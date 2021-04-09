import React from 'react';
import PropTypes from 'prop-types';

function Component({ children, extraClass }) {
  return (
    <button
      type="button"
      className={`${extraClass} justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-vivid-600 ring-offset-gray-800 hover:bg-yellow-vivid-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-vivid-500`}
    >
      {children}
    </button>
  );
}

Component.defaultProps = {
  extraClass: '',
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  extraClass: PropTypes.string,
};

export default Component;
