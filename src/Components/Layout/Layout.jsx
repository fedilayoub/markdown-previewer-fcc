import React from 'react';
import './Layout.css';
import PropTypes from 'prop-types';

const Layout = ({ children, title }) => (
  <div className="Layout">
    <div className="Layout-header">
      <span className="Layout-header-title">{title}</span>
    
    </div>
    <div className="Layout-content">{children}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default Layout;