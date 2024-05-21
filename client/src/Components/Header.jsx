import React, { useContext, useState } from 'react';
import {Link} from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../Assets/logo.jpg';

import { UserContext } from '../context/userContext';

const Header = () => {
  const[isNavShowing, setIsNavShowing]= useState(window.innerWidth > 800 ? true : false)
  const {currentUser}= useContext(UserContext)


  const closeNav=()=>{
    if(window.innerWidth < 800){
      setIsNavShowing(false);
    } else{
      setIsNavShowing(true)
    }
  }
  
  return (
      <nav>
        <div className="container nav_container">
          <Link to='/' className="nav_logo" onClick={closeNav}>
            <img src={logo} alt="" />
          </Link>

          {currentUser?.id &&  isNavShowing && <ul className='nav_menu'>
            <li> <Link to={`$/profile/${currentUser.id}`} onClick={closeNav}>{currentUser?.name}</Link> </li>
            <li> <Link to="/create"  onClick={closeNav}>Create post</Link> </li>
            <li><Link to="authors"  onClick={closeNav}>Authors</Link> </li>
            <li> <Link to= "/logout"  onClick={closeNav}>Logout</Link></li>
          </ul >}
       

          {!currentUser?.id &&  isNavShowing && <ul className='nav_menu'>
            <li><Link to="authors"  onClick={closeNav}>Authors</Link> </li>
            <li> <Link to= "/loginPage"  onClick={closeNav}>Login</Link></li>
          </ul >}
       
      <button className='nav_toggle_btn' onClick={()=> setIsNavShowing(!isNavShowing)  } >
        {isNavShowing ?  <AiOutlineClose/> : <FaBars/>}
         
      </button>
      </div> 
      </nav>
  )
}

export default Header
