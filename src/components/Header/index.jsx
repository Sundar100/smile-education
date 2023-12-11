import React from 'react'

import Call from '../../assets/images/call.png';
import Mail from '../../assets/images/mail.png';
import Search from '../../assets/images/search.png';
import SmileEducation from '../../assets/images/courses/smile-education.jpg';


//Styles
import '../../assets/css/responsive.css'
import '../../assets/css/style.css'
import '../../assets/css/animate.css'
import '../../assets/css/bootstrap.min.css'
import '../../assets/css/default.css'
import '../../assets/css/font-awesome.min.css'
import '../../assets/css/magnific-popup.css'
import '../../assets/css/nice-select.css'
import '../../assets/css/slick.css'

/**
* @author
* @function Header
**/

export const Header = () => {
  return(
      <section id="desktop_navbar" class="header_area">
         <div class="header_top">
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
         <div class="header_menu">
            <div class="container">
               <nav class="navbar navbar-expand-lg">
                  <a class="navbar-brand" href="index.html">
                  <img src={SmileEducation} alt="logo" style = {{height: 70}}/>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  <span class="toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                     <ul class="navbar-nav m-auto">
                        <li>
                           <a id = "homePage" class="" href="index.html">Home</a>
                        </li>
                        <li>
                           <a href="courses.html">Courses</a>
                        </li>
                        <li>
                           <a href="about.html">About</a>
                        </li>
                        <li>
                           <a href="contact.html">Contact</a>
                        </li>
                     </ul>
                  </div>
                  <div class="navbar_meta">
                     <ul>
                        <li>
                           <a id="search" href="#"><img src={Search} alt="search"/></a>
                           <div class="search_bar">
                              <input type="text" placeholder="Search"/>
                              <button><i class="fa fa-search"></i></button>
                           </div>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
         </div>
      </section>
   )
  }
