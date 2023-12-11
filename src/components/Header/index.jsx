import React from 'react'

import Call from '../../assets/images/call.png';
import Mail from '../../assets/images/mail.png';

//Styles
import '../../assets/css/responsive.css'
import '../../assets/css/style.css'

/**
* @author
* @function Header
**/

export const Header = () => {
  return(
      <section id="desktop_navbar" class="header_area">
         <div class="header_top">
            Header
            <div class="container">
               <div class="header_top_wrapper d-flex justify-content-center justify-content-md-between">
                  <div class="header_top_info d-none d-md-block">
                     <ul>
                        <li><img src={Call} alt="call"/><a href="#">+91 9441314306</a></li>
                        <li><img src={Mail} alt="mail"/><a href="#">sreenathreddy961@gmail.com</a></li>
                     </ul>
                  </div>
                  <div class="header_top_login">
                     <ul>
                        <li style = {{color: 'white'}}> Price drop. Hurry up!</li>
                        <li><a class="main-btn" href="courses.html">Learn More</a></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
  }
