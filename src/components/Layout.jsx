import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Navigation from './Navigation';

function Layout({ children }) {
  return (
    <div className="relative">
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
};

export default Layout;
