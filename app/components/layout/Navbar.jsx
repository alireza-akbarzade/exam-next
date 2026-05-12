import Link from 'next/link';
import React from 'react';

const Navbar = () => {
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
                  <li className=" scroll active"><Link href="/">home</Link></li>
                  <li className="scroll"><Link href="/services">service</Link></li>
                  <li className="scroll"><Link href="#featured-cars">featured cars</Link></li>
                  <li className="scroll"><Link href="/cars">new cars</Link></li>
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