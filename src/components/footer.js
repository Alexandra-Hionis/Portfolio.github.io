import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Footer() {
    return (
        
    <footer class="navbar fixed-bottom">
    <ul style="list-style: none;">
   <li> 
    <Link to="https://www.linkedin.com/in/alexandra-hionis/">
    <image src="assets/images/linkedin.png" alt="LinkedIn icon" class="social-icons"/>
    </Link>
       
  </li>
  <li>
   
<Link to="https://github.com/Alexandra-Hionis">
    <image src="assets/images/linkedin.png" alt="LinkedIn icon" class="social-icons"/>
    </Link>
  </li>
  <li>
    
<Link to="https://twitter.com/AlexandraHionis">
    <image src="assets/images/linkedin.png" alt="LinkedIn icon" class="social-icons"/>
    </Link>
    
  </li>
  </ul>
  </footer>

  );
}

export default Footer;