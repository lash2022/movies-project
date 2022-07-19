// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <div className="footer">
//       <div>Moviefy</div>
//       <div>©2021, Movie, Inc. or its affiliates</div>
//     </div>
//   );
// };

// export default Footer;
import React from 'react'

import { Link } from 'react-router-dom';

import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
       
      <div class='footer-links'>
        
            <Link to='/'>- Main</Link>
            <Link to='/'>- Movies</Link>
            <Link to='/'>- Trailers</Link>
            <Link to='/'>- lists</Link>
            <Link to='/'>- studios</Link>
            <Link to='/'>- festivals</Link>
            <Link to='/'>- Oscars</Link>
            <Link to='/'>- serials</Link>
            <Link to='/'>- franchises</Link>
            <Link to='/'>- User Agreement</Link>
            <Link to='/'>- Privacy Policy</Link>
         
        
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            𝑀𝒪𝒱𝐼𝐸𝐹𝒴
            </Link>
          </div>
          <small class='website-rights'>𝑀𝒪𝒱𝐼𝐸𝐹𝒴 © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Footer