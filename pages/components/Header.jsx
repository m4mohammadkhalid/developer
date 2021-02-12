import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Header = () => {
    return (
        
        <>

      <Head>
        <title>KHALID</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <div className="preloader">
    <div className="outer">
      <div className="inner">
        <div className="percentage" />                          
      </div>
    </div>
  </div>
  <header>
    <div className="logo float-left">
    <Link href="/">
      <img src="img/logo.png" alt="khalid" />
    </Link>
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
        <li><Link href="/"><a className="active">Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
        <li><Link href="/about"><a>Blog</a></Link></li>
        <li><Link href="/about"><a>Contact</a></Link></li>
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
