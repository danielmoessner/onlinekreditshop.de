import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { Transition } from '@headlessui/react';

function Component({ article, button }) {
  return (
    <div>
      <Link to={`/ratgeber/${article.slug}/`} className="mt-2 block">
        <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
        <p className="mt-3 text-base text-gray-500">{article.shortDescription}</p>
      </Link>
      <div className="mt-3">
        <Link
          to={`/ratgeber/${article.slug}/`}
          className="text-base font-semibold text-blue-800 hover:text-blue-700"
        >
          {button}
        </Link>
      </div>
    </div>
  );
}

Component.defaultProps = {};

Component.propTypes = {
  article: PropTypes.shape({
    slug: PropTypes.string,
    title: PropTypes.string,
    shortDescription: PropTypes.string,
  }).isRequired,
  button: PropTypes.string.isRequired,
};

export default Component;
