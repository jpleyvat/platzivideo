import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <div className='app'>
    {children}
    <Footer />
  </div>
);

export default Layout;
