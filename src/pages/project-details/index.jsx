import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { strapi } from '../../services';
import '../../assets/css/style.css';

const ProjectDetails = ({ match }) => {
  const { id } = match.params;

  const [visible, setVisible] = useState(false)
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true)
      const response = await strapi.get({ service: 'portfolios', id })
      setLoading(false)
      setData(response)
    } catch (error) {
      setLoading(false)
      console.log('error :>> ', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  console.log('data :>> ', data);
  return (
    <>
      <Header />
      <section class="wow fadeIn bg-light-gray big-section">
        <div class="container padding-two-tb">
          <div class="row">
            <div class="col-12 text-center margin-60px-bottom md-margin-30px-bottom sm-margin-10px-bottom">
              <span class="width-60 mx-auto text-outside-line alt-font sm-width-100 sm-padding-15px-lr d-inline">Branding &nbsp;&nbsp; • &nbsp;&nbsp; Design &nbsp;&nbsp; • &nbsp;&nbsp; Web</span>
              <h1 class="text-extra-dark-gray alt-font letter-spacing-minus-1 font-weight-700 d-block margin-10px-top">{data.title}</h1>
            </div>
            <div class="col-12 col-lg-5 offset-lg-1 line-height-28 last-paragraph-no-margin md-margin-50px-bottom sm-margin-30px-bottom wow fadeInUp">
              <p>{data.description}</p>
            </div>
            <div class="col-12 col-lg-4 offset-lg-1 line-height-26 wow fadeInUp">
              <ul class="list-style-6 margin-twelve-left">
                <li class="margin-5px-bottom"><label class="width-30 d-inline-block">Client:</label>Jason Richardson</li>
                <li class="margin-5px-bottom"><label class="width-30 d-inline-block">Industry:</label>Adventure  /  Travel</li>
                <li class="margin-5px-bottom"><label class="width-30 d-inline-block">Services:</label>Design, Art Direction, Website</li>
                <li class="margin-5px-bottom"><label class="width-30 d-inline-block">Date:</label>January 16th, 2017</li>
                <li class="margin-5px-bottom"><label class="width-30 d-inline-block">Website:</label><a href="#">www.spiceblends.com</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section class="wow fadeIn">
        <div class="container">
          <div class="row">
            <div class="col-12 margin-30px-bottom wow fadeInUp">
              <img src="http://placehold.it/1200x752" class="width-100" alt="" />
            </div>
            <div class="col-12 margin-30px-bottom wow fadeInUp">
              <img src="http://placehold.it/1200x675" class="width-100" alt="" />
            </div>
            <div class="col-12 margin-30px-bottom wow fadeInUp">
              <img src="http://placehold.it/1200x675" class="width-100" alt="" />
            </div>
            <div class="col-12 margin-30px-bottom wow fadeInUp">
              <img src="http://placehold.it/1200x675" class="width-100" alt="" />
            </div>
            <div class="col-12 margin-30px-bottom wow fadeInUp">
              <img src="http://placehold.it/1200x675" class="width-100" alt="" />
            </div>
            <div class="col-12 wow fadeInUp">
              <img src="http://placehold.it/2560x1440" class="width-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section class="wow fadeIn bg-light-gray">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <div class="text-extra-small letter-spacing-3 alt-font text-extra-dark-gray text-uppercase margin-70px-bottom sm-margin-30px-bottom d-inline-block">Project Photo Gallery</div>
            </div>
          </div>
          <div class="row">
            <div class="col-12 p-0 sm-padding-15px-lr">
              <div class="filter-content overflow-hidden">
                <ul class="portfolio-grid work-3col gutter-large hover-option4 lightbox-gallery">
                  <li class="grid-sizer"></li>
                  <li class="grid-item web branding design wow fadeInUp">
                    <a href="http://placehold.it/900x900" title="Project Photo 01">
                      <figure>
                        <div class="portfolio-img bg-extra-dark-gray"><img src="http://placehold.it/900x900" alt="" class="project-img-gallery" /></div>
                        <figcaption>
                          <div class="portfolio-hover-main text-center">
                            <div class="portfolio-hover-box align-middle">
                              <div class="portfolio-hover-content position-relative">
                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li class="grid-item web branding design wow fadeInUp" data-wow-delay="0.2s">
                    <a href="http://placehold.it/900x900" title="Project Photo 02">
                      <figure>
                        <div class="portfolio-img bg-extra-dark-gray"><img src="http://placehold.it/900x900" alt="" class="project-img-gallery" /></div>
                        <figcaption>
                          <div class="portfolio-hover-main text-center">
                            <div class="portfolio-hover-box align-middle">
                              <div class="portfolio-hover-content position-relative">
                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li class="grid-item wow fadeInUp" data-wow-delay="0.4s">
                    <a href="http://placehold.it/900x900" title="Project Photo 03">
                      <figure>
                        <div class="portfolio-img bg-extra-dark-gray"><img src="http://placehold.it/900x900" alt="" class="project-img-gallery" /></div>
                        <figcaption>
                          <div class="portfolio-hover-main text-center">
                            <div class="portfolio-hover-box align-middle">
                              <div class="portfolio-hover-content position-relative">
                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li class="grid-item wow fadeInUp" data-wow-delay="0.4s">
                    <a href="http://placehold.it/900x900" title="Project Photo 04">
                      <figure>
                        <div class="portfolio-img bg-extra-dark-gray"><img src="http://placehold.it/900x900" alt="" class="project-img-gallery" /></div>
                        <figcaption>
                          <div class="portfolio-hover-main text-center">
                            <div class="portfolio-hover-box align-middle">
                              <div class="portfolio-hover-content position-relative">
                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li class="grid-item wow fadeInUp" data-wow-delay="0.4s">
                    <a href="http://placehold.it/900x900" title="Project Photo 05">
                      <figure>
                        <div class="portfolio-img bg-extra-dark-gray"><img src="http://placehold.it/900x900" alt="" class="project-img-gallery" /></div>
                        <figcaption>
                          <div class="portfolio-hover-main text-center">
                            <div class="portfolio-hover-box align-middle">
                              <div class="portfolio-hover-content position-relative">
                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li class="grid-item wow fadeInUp" data-wow-delay="0.4s">
                    <a href="http://placehold.it/900x900" title="Project Photo 06">
                      <figure>
                        <div class="portfolio-img bg-extra-dark-gray"><img src="http://placehold.it/900x900" alt="" class="project-img-gallery" /></div>
                        <figcaption>
                          <div class="portfolio-hover-main text-center">
                            <div class="portfolio-hover-box align-middle">
                              <div class="portfolio-hover-content position-relative">
                                <i class="ti-zoom-in text-white-2 fa-2x"></i>
                              </div>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProjectDetails