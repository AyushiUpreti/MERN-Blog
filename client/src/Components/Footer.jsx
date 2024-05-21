import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <ul className='footer_categories'>
        <li> <Link to="/posts/categories/Agriculture">Agriculture</Link> </li>
        <li> <Link to="/posts/categories/Business">Business</Link> </li>
        <li> <Link to="/posts/categories/Education">Education</Link> </li>
        <li> <Link to="/posts/categories/Entertainment">Entertainment</Link> </li>
        <li> <Link to="/posts/categories/Art">Art</Link> </li>
        <li> <Link to="/posts/categories/Investment">Investment</Link> </li>
        <li> <Link to="/posts/categories/Uncategorized">Uncategorized</Link> </li>
        </ul>

        <div className="footer_copyright">
          <small>All rights reserved &copy; Copyright Ayushi Upreti.</small>
        </div>
      
    </footer>
  )
}

export default Footer
