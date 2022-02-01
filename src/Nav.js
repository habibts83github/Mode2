import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
     <nav>
         
       {/* <h3>Logo</h3> */}
    <ul className='nav-links' >
        <Link to='home'><li>Home</li></Link>
        <Link to ='about'> <li>About Us</li></Link>              
        <Link to='Quran'> <li> Quran</li> </Link>
        <Link to='Hadith'> <li> Hadiths </li> </Link>
        <Link to='contact'><li>Contact Us</li></Link>
    </ul>
   </nav>
 
  );
}
export default Nav;