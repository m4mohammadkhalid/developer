import React from 'react'

const Header = () => {
    return (
        
        <>


  {/* <div className="preloader">
    <div className="outer">
      <div className="inner">
        <div className="percentage" />                          
      </div>
    </div>
  </div> */}
  <header>
    <div className="logo float-left">
      <img src="img/logo.png" alt="khalid" />
    </div> 
    <div className="nav-icon float-right">
      <span />
      <span />
      <span />
    </div>
  </header>
  <div className="full-menu">
    <div className="fullmenu-content">
      <ul className="page-menu">
        <li><a className="active" href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="blogs.html">Blog Posts</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="https://themeforest.net/item/amokachi-creative-portfolio-html-template/22605799">Buy Now</a></li>
        <li className="social">
          <a href="#"><i className="fab fa-twitter" /></a>
          <a href="#"><i className="fab fa-instagram" /></a>
          <a href="#"><i className="fab fa-dribbble" /></a>
          <a href="#"><i className="fab fa-telegram-plane" /></a>
        </li>
      </ul>
    </div>
    <a href="#0" className="modal-close" />
  </div>
  <div className="cd-transition-layer visible opening"> 
    <div className="bg-layer" />
  </div>


        </>

    )
}

export default Header
