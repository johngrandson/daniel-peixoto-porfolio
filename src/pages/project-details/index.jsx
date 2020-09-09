import React, { useState, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { strapi } from '../../services';
import { CircleToBlockLoading } from 'react-loadingg'
import ReactPlayer from 'react-player';
import keys from '../../config'

const ProjectDetails = ({ match }) => {
  const { id } = match.params;

  const [data, setData] = useState(null)
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
  console.log(data);

  return (
    <>
      <Header />
      {loading && <CircleToBlockLoading />}
      {data && (
        <>
          <section className='wow fadeIn bg-extra-dark-gray'>
            <div className='container'>
              <div className='row'>
                <div className='col-12 col-lg-6 md-margin-50px-bottom sm-margin-30px-bottom wow fadeInLeft'>
                  <h2 className='alt-font font-weight-700 letter-spacing-minus-2 text-white-2 margin-5px-bottom'>{data.title}</h2>
                  <h6 className='alt-font font-weight-300'>{data.categories}</h6>
                  <p className='margin-35px-bottom d-block'>{data.description}</p>
                  {data.url && <a href='index.html' className='btn btn-transparent-light-gray btn-small'>Launch Website</a>}
                </div>
                <div className='col-12 col-lg-4 offset-lg-2 wow fadeInRight'>
                  <ul className='list-style-9 margin-twelve-left'>
                    <li className='text-uppercase'><span className='d-block text-extra-small text-white-2'>Cliente</span>{data.client}</li>
                    <li className='text-uppercase'><span className='d-block text-extra-small text-white-2'>Data de publicação</span>{data.creationDate}</li>
                    {data.url && <li className='text-uppercase'><span className='d-block text-extra-small text-white-2'>Website</span><a href='index.html'>{data.url}</a></li>}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className='wow fadeIn bg-light-gray'>
            <div className='container-fluid padding-five-lr'>
              <div className='row no-gutters'>
                <div className='col filter-content overflow-hidden'>
                  <ul className='portfolio-grid work-4col gutter-large hover-option7'>
                    {data.thumb.map(res => (
                      <li className='grid-item web branding design wow fadeInUp float-left'>
                        <a href='#'>
                          <figure>
                            <div className='portfolio-img'><img src={`${res.url}`} alt='' /></div>
                            <figcaption>
                              <div className='portfolio-hover-main text-center last-paragraph-no-margin'>
                                <div className='portfolio-hover-box align-middle'>
                                  <div className='portfolio-hover-content position-relative'>
                                    <span className='font-weight-600 alt-font text-uppercase margin-one-bottom d-block text-extra-dark-gray'>{res.name}</span>
                                    <p className='text-medium-gray text-uppercase text-extra-small'>{data.categories}</p>
                                  </div>
                                </div>
                              </div>
                            </figcaption>
                          </figure>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
          {data.thumb.map(res => (
            res.mime === 'video/mp4' && (
              <div className='parallax wow fadeIn' data-stellar-background-ratio='0.1'>
                <div className='row justify-content-center bg-light-gray'>
                  <ReactPlayer
                    url={`${res.url}`}
                    playing
                    className='mb-4 mt-4'
                    height={500}
                    loop
                  />
                </div>
              </div>
            )
          ))}
        </>
      )}
      <Footer />
    </>
  )
}

export default ProjectDetails