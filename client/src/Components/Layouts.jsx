import React from 'react';
import {Outlet}from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layouts = () => {
  return (
    <div>
      <Header/>
       <Outlet/>  {/* placeholder provided by reactrouter where the child component (index.js) will be rendered or the content will be displayed */}
      <Footer/>
    </div>
  )
}

export default Layouts
