import React from 'react'

export default function Header() {
  return (
    <header>
      <nav class="navbar navbar-default bootsnav bg-black">
        <div class="container-fluid nav-header-container height-100px padding-three-half-lr sm-height-70px sm-padding-15px-lr">
          <div class="col d-none d-md-block text-left pl-0">
            <div class="social-icon">
              <a href="https://www.facebook.com/" title="Facebook" target="_blank"><i class="fab fa-facebook-f text-white-2" aria-hidden="true"></i></a>
              <a href="https://twitter.com/" title="Twitter" target="_blank"><i class="fab fa-twitter text-white-2"></i></a>
              <a href="https://www.linkedin.com/in/daniel-peixoto-jardelino-ba94b3107/" title="Linkedin" target="_blank"><i class="fab fa-linkedin text-white-2"></i></a>
            </div>
          </div>
          <div class="col text-md-center pl-0 pl-md-3">
            <a class="logo" href="/"><img src="../assets/images/logo-daniel.png" data-rjs="images/logo-daniel.png" class="default" alt="Pofo" /></a>
          </div>
          <div class="col text-right pr-0">
            <div class="hamburger-menu">
              <div class="btn btn-hamburger border-none">
                <button class="navbar-toggler mobile-toggle" type="button" id="open-button" data-toggle="collapse" data-target=".navbar-collapse">
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
              </div>
              <div class="hamburger-menu-wrepper sm-text-center">
                <div class="hamburger-logo text-left"><a class="logo" href="/"><img src="../assets/images/logo-daniel.png" data-rjs="images/logo-daniel.png" alt="Pofo" /></a></div>
                <div class="btn btn-hamburger border-none">
                  <button class="close-menu close-button-menu" id="close-button"></button>
                </div>
                <div class="animation-box">
                  <div class="menu-middle">
                    <div class="menu-wrapper display-table-cell vertical-align-middle text-left">
                      <div class="d-md-flex">
                        <div class="col-lg-8 col-md-7 d-flex align-items-center">
                          <ul class="hamburger-menu-links alt-font">
                            <li><a href="/" title="Home">Home</a></li>
                            <li><a href="/about" title="about">Sobre mim</a></li>
                            <li><a href="/contact" title="Contato">Contato</a></li>
                          </ul>
                        </div>
                        <div class="col-lg-4 col-md-5 d-flex align-items-center social-style-3">
                          <div>
                            <span class="text-extra-large text-deep-pink alt-font display-block margin-15px-bottom">Daniel Peixoto Copywriter</span>
                            <span class="text-medium alt-font display-block font-weight-300 margin-15px-bottom line-height-30">301 The Greenhouse,<br />Custard Factory, London, E2 8DY.<br />Call - +44 (0) 123 456 7890<br />Email - <a href="mailto:info@domain.com" class="text-white-2" target="_blank">info@domain.com</a></span>
                            <div class="separator-line-horrizontal-medium-light2 bg-deep-pink margin-25px-tb sm-margin-15px-tb display-inline-block"></div>
                            <div class="social-icon-style-9">
                              <ul class="small-icon">
                                <li><a class="margin-20px-right facebook" href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a class="margin-20px-right twitter" href="http://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a></li>
                                <li><a class="linkedin" href="http://linkedin.com" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
