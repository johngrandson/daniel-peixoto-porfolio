/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useState, useEffect } from 'react'
import { CircleToBlockLoading } from 'react-loadingg'
import { Link } from 'react-router-dom'
import { strapi } from '../../services'
import { queryToUrl } from '../../utils/query-to-url'

const MainComponent = (props) => {
  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await strapi.find({ service: 'portfolios', query: queryToUrl({ _limit: 10 }) })
      setLoading(false)
      setData(response)
    } catch (error) {
      setLoading(false)
      setError(true)
      console.log('error :>> ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={`${visible && 'show-menu'} bg-black position-absolute left-0 top-0 width-100 height-100`}>
      <header>
        <nav className='navbar bg-transparent navbar-top navbar-transparent-no-sticky full-width-pull-menu white-link no-transition'>
          <div className='container-fluid nav-header-container height-100px padding-three-half-lr sm-height-70px sm-padding-15px-lr'>
            <div className='col d-none d-md-block pl-0'>
              <div className='header-social-icon border-none no-padding-left no-margin-left'>
                <a href='https://www.facebook.com/' title='Facebook' target='_blank'><i className='fab fa-facebook-f'></i></a>
                <a href='https://twitter.com/' title='Twitter' target='_blank'><i className='fab fa-twitter'></i></a>
                <a href='https://linkedin.com/' title='Linkedin' target='_blank'><i className='fab fa-linkedin'></i></a>
              </div>
            </div>
            <div className='col text-md-center pl-0 pl-md-3'>
              <a className='logo' href='index.html'><img src='../assets/images/logo-white@2x.png' data-rjs='images/logo-white@2x.png' alt='Pofo' /></a>
            </div>
            <div className='col text-right pr-0'>
              <button onClick={() => setVisible(!visible)} className='navbar-toggler mobile-toggle d-inline-block' type='button' id='open-button' data-toggle='collapse' data-target='.navbar-collapse'>
                <span></span>
                <span></span>
                <span></span>
              </button>
              <div className='menu-wrap full-screen no-padding d-md-flex'>
                <div className='col-md-6 p-0 d-none d-md-block'>
                  <div className='cover-background full-screen'>
                    <div className='opacity-light bg-extra-dark-gray'></div>
                    <div className='position-absolute height-100 width-100 text-center'>
                      <div className='display-table height-100 width-100'>
                        <div className='display-table-cell height-100 width-100 vertical-align-middle position-relative'>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-6 p-0 bg-white full-screen text-left'>
                  <div className='position-absolute height-100 width-100 overflow-auto'>
                    <div className='display-table height-100 width-100'>
                      <div className='display-table-cell height-100 width-100 vertical-align-middle padding-fourteen-lr alt-font link-style-2 md-padding-seven-lr sm-padding-15px-lr'>
                        <ul className='font-weight-600 sm-no-padding-left'>
                          <li className='dropdown'>
                            <Link to='/'>Home</Link>
                          </li>
                          <li className='dropdown'>
                            <Link to='/portfolio'>Portfólio</Link>
                          </li>
                          <li className='dropdown'>
                            <Link to='/contact'>Contato</Link>
                          </li>
                        </ul>
                        <div className='margin-fifteen-top padding-35px-left sm-no-padding-left'>
                          <div className='icon-social-medium margin-three-bottom'>
                            <a href='https://www.facebook.com/' target='_blank' className='text-extra-dark-gray text-deep-pink-hover margin-one-lr'><i className='fab fa-facebook-f' aria-hidden='true'></i></a>
                            <a href='https://twitter.com/' target='_blank' className='text-extra-dark-gray text-deep-pink-hover margin-one-lr'><i className='fab fa-twitter' aria-hidden='true'></i></a>
                            <a href='https://behance.com/' target='_blank' className='text-extra-dark-gray text-deep-pink-hover margin-one-lr'><i className='fab fa-behance' aria-hidden='true'></i></a>
                            <a href='https://linkedin.com/' target='_blank' className='text-extra-dark-gray text-deep-pink-hover margin-one-lr'><i className='fab fa-linkedin' aria-hidden='true'></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button onClick={() => setVisible(false)} className='close-button-menu' id='close-button'></button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <section className='p-0'>
        <div className='swiper-bottom-scrollbar-full swiper-container'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide width-550px sm-width-100 sm-height-auto'>
              <div className='position-relative width-90 height-100 d-flex align-items-center padding-ten-all sm-padding-fifteen-all sm-width-100'>
                <div>
                  <h4 className='text-medium-gray d-block margin-5px-bottom alt-font'>Olá,</h4>
                  <h6 className='text-medium-gray font-weight-300 margin-20px-bottom alt-font'>Eu sou Daniel Peixoto</h6>
                  <p className='text-large d-block float-left font-weight-300 width-90 margin-35px-bottom'>I design thoughtful digital experiences & beautiful brand aesthetics. I provide high quality web design services.</p>
                  <img src='../assets/images/signature.png' className='width-60 signature' alt='' />
                </div>
              </div>
            </div>
            {loading && <CircleToBlockLoading />}
            {error && 'error!!'}
            {data.length > 0 && data.map(res => (
              <div key={res.id} className='swiper-slide width-auto sm-height-auto last-paragraph-no-margin mr-4'>
                <div className='height-100 d-flex align-items-center'>
                  <div className='d-block position-relative'>
                    <Link to={`/project-details/${res.id}`}><img src={`${process.env.REACT_APP_STRAPI_URL}${res.thumb[0].url}`} alt={res.title} /></Link>
                  </div>
                  <div className='hover-title-box padding-55px-lr width-300px md-width-100 md-padding-20px-lr'>
                    <div className='separator width-50px bg-black d-none d-xl-inline-block sm-margin-lr-auto'></div>
                    <h3><a className='text-white-2 font-weight-600 alt-font text-white-2-hover' href='single-project-page-01.html'>{res.title}</a></h3>
                  </div>
                </div>
              </div>
            ))}
            <div className='swiper-slide width-150px sm-width-100 sm-height-auto'>
            </div>
          </div>
          <div className='swiper-scrollbar d-none d-md-inline-block'></div>
          <div className='swiper-pagination-vertical position-fixed bullet-deep-pink z-index-5'></div>
        </div>
      </section>
    </div>
  )
}

export default MainComponent