import React from 'react';
import { Header, Footer } from '../../components'

const Contact = () => {
  return (
    <>
      <Header />
      <section class="wow fadeIn bg-extra-dark-gray padding-35px-tb page-title-small top-space">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-8 col-md-6 text-center text-md-left">
              <h1 class="alt-font text-white-2 font-weight-600 mb-0 text-uppercase">Formulário de contato</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="wow fadeIn" id="start-your-project">
        <div className="container">
          <form id="project-contact-form">
            <div className="row">
              <div className="col-12">
                <div id="success-project-contact-form" className="mx-0"></div>
              </div>
              <div className="col-8 col-lg-4">
                <input type="text" name="name" id="name" placeholder="Nome *" className="big-input" />
              </div>
              <div className="col-8 col-lg-4">
                <input type="text" name="phone" id="phone" placeholder="Telefone" className="big-input" />
              </div>
              <div className="col-8 col-lg-4">
                <input type="text" name="email" id="email" placeholder="E-mail *" className="big-input" />
              </div>
              <div className="col-12">
                <textarea name="comment" id="comment" placeholder="Descreva como posso lhe ajudar" rows="6" className="big-textarea"></textarea>
              </div>
              <div className="col-12 text-center">
                <button id="project-contact-us-button" type="submit" className="btn btn-transparent-dark-gray btn-large margin-20px-top">Enviar mensagem</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Contact