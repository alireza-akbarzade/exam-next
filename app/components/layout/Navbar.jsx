'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
// ادرس اون صفحه
  const pathName =usePathname()

    return (
        <div className="top-area">
        <div className="header-area">
          <nav className="navbar navbar-default bootsnav  navbar-sticky navbar-scrollspy" data-minus-value-desktop="70" data-minus-value-mobile="55" data-speed="1000">

            <div className="container">

              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">carvilla<span></span></a>

              </div>
              <div className="collapse navbar-collapse menu-ui-design" id="navbar-menu">
                <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                  <li className=" scroll"><Link   style={{color:pathName=== '/'? "red":''}}  href="/"  >home</Link></li>
                  <li className="scroll"><Link href="/services"  style={{color:pathName=== '/services' ? "red":''}} >service</Link></li>
                  <li className="scroll"><Link href="#featured-cars">featured cars</Link></li>
                  <li className="scroll"><Link href="/cars"  style={{color:pathName=== '/cars' ? "red":''}} >new cars</Link></li>
                  <li className="scroll"><Link href="#brand">brands</Link></li>
                  <li className="scroll"><Link href="#contact">contact</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="clearfix"></div>

        </div>
      </div>
    );
}

export default Navbar;