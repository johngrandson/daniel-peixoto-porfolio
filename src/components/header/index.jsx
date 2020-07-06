import React from 'react'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-default bootsnav background-white header-light navbar-scroll-top navbar-expand-lg nav-box-width">
        <div className="container-fluid nav-header-container">
          <div className="col-auto pl-0">
            <a className="logo" href="/"><img src="../assets/images/logo-black-big@2x.png" data-rjs="images/logo-black-big@2x.png" alt="Pofo" /></a>
          </div>
          <div className="col accordion-menu pr-0 pr-md-3">
            <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#navbar-collapse-toggle-1">
              <span className="sr-only">toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbar-collapse-toggle-1">
              <ul id="accordion" className="nav navbar-nav no-margin alt-font text-normal" data-in="fadeIn" data-out="fadeOut">
                <li className="dropdown simple-dropdown"><a href="#">Menu</a><i className="fas fa-angle-down dropdown-toggle" data-toggle="dropdown" aria-hidden="true"></i>
                  <ul className="dropdown-menu" role="menu">
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="#">About <i className="fas fa-angle-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="about-us-simple.html">About us simple</a></li>
                        <li><a href="about-us-classic.html">About us classic</a></li>
                        <li><a href="about-us-modern.html">About us modern</a></li>
                        <li><a href="about-me.html">About me</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Services <i className="fas fa-angle-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="services-simple.html">Services simple</a></li>
                        <li><a href="services-classic.html">Services classic</a></li>
                        <li><a href="services-modern.html">Services modern</a></li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" href="/contact">Contato</a>
                    </li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Team <i className="fas fa-angle-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="team-simple.html">Team simple</a></li>
                        <li><a href="team-classic.html">Team classic</a></li>
                      </ul>
                    </li>
                    <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#">Additional Pages <i className="fas fa-angle-right"></i></a>
                      <ul className="dropdown-menu">
                        <li><a href="our-clients.html">Our clients</a></li>
                        <li><a href="404.html">Error 404</a></li>
                        <li><a href="coming-soon.html">Coming soon</a></li>
                        <li><a href="coming-soon-02.html">Coming soon – style 02</a></li>
                        <li><a href="faq.html">Faq</a></li>
                        <li><a href="maintenance.html">Maintenance</a></li>
                        <li><a href="search-result.html">Search result</a></li>
                        <li><a href="pricing.html">Pricing</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-auto pr-0">
            <div className="header-searchbar">
              <a href="#search-header" className="header-search-form"><i className="fas fa-search search-button"></i></a>
              <form id="search-header" method="post" action="search-result.html" name="search-header" className="mfp-hide search-form-result">
                <div className="search-form position-relative">
                  <button type="submit" className="fas fa-search close-search search-button"></button>
                  <input type="text" name="search" className="search-input" placeholder="Buscar..." autoComplete="off" />
                </div>
              </form>
            </div>
            <div className="header-social-icon d-none d-md-inline-block">
              <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i className="fab fa-facebook-f" aria-hidden="true"></i></a>
              <a href="https://twitter.com/" title="Twitter" target="_blank"><i className="fab fa-twitter"></i></a>
              <a href="https://linkedin.com/" title="Linkedin" target="_blank"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
