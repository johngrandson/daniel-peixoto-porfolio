(this["webpackJsonpdaniel-peixoto-portfolio"]=this["webpackJsonpdaniel-peixoto-portfolio"]||[]).push([[0],{159:function(e,a){e.exports={REACT_APP_STRAPI_URL:"https://api-danielpeixoto.herokuapp.com"}},160:function(e,a){e.exports={REACT_APP_STRAPI_URL:"https://api-danielpeixoto.herokuapp.com"}},161:function(e,a){e.exports={REACT_APP_STRAPI_URL:"https://api-danielpeixoto.herokuapp.com"}},162:function(e,a){e.exports={REACT_APP_STRAPI_URL:"https://api-danielpeixoto.herokuapp.com"}},208:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),c=t.n(r),i=t(5),o=t.n(i),s=t(12),m=t(17),d=t(28),p=t(10),u=t(21),g=t.n(u),E="http://localhost:1337",h={find:function(e){return Object(s.a)(o.a.mark((function a(){var t,n,l,r,c,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.endpoint,n=void 0===t?E:t,l=e.service,r=e.query,a.next=3,g.a.get("".concat(n,"/").concat(l).concat(r));case 3:return c=a.sent,i=c.data,a.abrupt("return",i);case 6:case"end":return a.stop()}}),a)})))()},get:function(e){return Object(s.a)(o.a.mark((function a(){var t,n,l,r,c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.endpoint,n=void 0===t?E:t,l=e.service,r=e.id,a.next=3,g.a.get("".concat(n,"/").concat(l,"/").concat(r));case 3:return c=a.sent,a.abrupt("return",c.data);case 5:case"end":return a.stop()}}),a)})))()},create:function(e){return Object(s.a)(o.a.mark((function a(){var t,n,l,r,c;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.endpoint,n=void 0===t?E:t,l=e.service,r=e.data,a.next=3,g.a.post("".concat(n,"/").concat(l),r);case 3:return c=a.sent,a.abrupt("return",c.data);case 5:case"end":return a.stop()}}),a)})))()},patch:function(e){return Object(s.a)(o.a.mark((function a(){var t,n,l,r,c,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.endpoint,n=void 0===t?E:t,l=e.service,r=e.data,c=e.id,a.next=3,g.a.patch("".concat(n,"/").concat(l,"/").concat(c),r);case 3:return i=a.sent,a.abrupt("return",i.data);case 5:case"end":return a.stop()}}),a)})))()},remove:function(e){return Object(s.a)(o.a.mark((function a(){var t,n,l,r,c,i;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.endpoint,n=void 0===t?E:t,l=e.service,r=e.id,a.next=3,g.a.delete("".concat(n,"/").concat(l,"/").concat(r));case 3:return c=a.sent,i=c.data,a.abrupt("return",i);case 6:case"end":return a.stop()}}),a)})))()}},b=t(41),f=t.n(b),v=t(24),x=t.n(v),N=t(210),w=function(e){var a=Object(n.useState)(!1),t=Object(m.a)(a,2),r=t[0],c=t[1],i=Object(n.useState)([]),u=Object(m.a)(i,2),g=u[0],E=u[1],b=Object(n.useState)(!1),v=Object(m.a)(b,2),w=v[0],k=v[1],_=Object(n.useState)(!1),y=Object(m.a)(_,2),P=y[0],T=y[1],O=function(){var e=Object(s.a)(o.a.mark((function e(){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k(!0),e.next=4,h.find({service:"portfolios",query:(l=void 0,"?".concat(f.a.stringify(l,{encode:!1})))});case 4:a=e.sent,k(!1),E(a),e.next=15;break;case 9:e.prev=9,e.t0=e.catch(0),console.log("error :>> ",e.t0),k(!1),T(!0),t="error",n=e.t0,N.a[t]({message:"Erro ao carregar dados",description:"A aplica\xe7\xe3o apresentou erros ao carregar dados da API. \n ".concat(n)});case 15:case"end":return e.stop()}var t,n,l}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){O()}),[]),l.a.createElement("div",{className:"".concat(r&&"show-menu"," bg-black bg-grunge position-absolute left-0 top-0 width-100 height-100")},l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar bg-transparent navbar-top navbar-transparent-no-sticky full-width-pull-menu white-link no-transition"},l.a.createElement("div",{className:"container-fluid nav-header-container height-100px padding-three-half-lr sm-height-70px sm-padding-15px-lr"},l.a.createElement("div",{className:"col d-none d-md-block pl-0"},l.a.createElement("div",{className:"header-social-icon border-none no-padding-left no-margin-left"},l.a.createElement("a",{href:"https://www.facebook.com/",title:"Facebook",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-f"})),l.a.createElement("a",{href:"https://twitter.com/",title:"Twitter",target:"_blank"},l.a.createElement("i",{className:"fab fa-twitter"})),l.a.createElement("a",{href:"https://linkedin.com/",title:"Linkedin",target:"_blank"},l.a.createElement("i",{className:"fab fa-linkedin"})))),l.a.createElement("div",{className:"col text-md-center pl-0 pl-md-3"},l.a.createElement("a",{className:"logo",href:"index.html"},l.a.createElement("img",{src:"../assets/images/logo-daniel.png","data-rjs":"images/logo-daniel.png",alt:"Pofo"}))),l.a.createElement("div",{className:"col text-right pr-0"},l.a.createElement("button",{onClick:function(){return c(!r)},className:"navbar-toggler mobile-toggle d-inline-block",type:"button",id:"open-button","data-toggle":"collapse","data-target":".navbar-collapse"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null)),l.a.createElement("div",{className:"menu-wrap full-screen no-padding d-md-flex"},l.a.createElement("div",{className:"col-md-6 p-0 d-none d-md-block"},l.a.createElement("div",{className:"cover-background full-screen"},l.a.createElement("div",{className:"opacity-light bg-extra-dark-gray"}),l.a.createElement("div",{className:"position-absolute height-100 width-100 text-center"},l.a.createElement("div",{className:"display-table height-100 width-100"},l.a.createElement("div",{className:"display-table-cell height-100 width-100 vertical-align-middle position-relative"}))))),l.a.createElement("div",{className:"col-md-6 p-0 bg-white full-screen text-left"},l.a.createElement("div",{className:"position-absolute height-100 width-100 overflow-auto"},l.a.createElement("div",{className:"display-table height-100 width-100"},l.a.createElement("div",{className:"display-table-cell height-100 width-100 vertical-align-middle padding-fourteen-lr alt-font link-style-2 md-padding-seven-lr sm-padding-15px-lr"},l.a.createElement("ul",{className:"font-weight-600 sm-no-padding-left"},l.a.createElement("li",{className:"dropdown"},l.a.createElement(p.b,{to:"/"},"Home")),l.a.createElement("li",{className:"dropdown"},l.a.createElement(p.b,{to:"/about"},"Sobre mim")),l.a.createElement("li",{className:"dropdown"},l.a.createElement(p.b,{to:"/contact"},"Contato"))),l.a.createElement("div",{className:"margin-fifteen-top padding-35px-left sm-no-padding-left"},l.a.createElement("div",{className:"icon-social-medium margin-three-bottom"},l.a.createElement("a",{href:"https://www.facebook.com/",target:"_blank",className:"text-extra-dark-gray text-deep-pink-hover margin-one-lr"},l.a.createElement("i",{className:"fab fa-facebook-f","aria-hidden":"true"})),l.a.createElement("a",{href:"https://twitter.com/",target:"_blank",className:"text-extra-dark-gray text-deep-pink-hover margin-one-lr"},l.a.createElement("i",{className:"fab fa-twitter","aria-hidden":"true"})),l.a.createElement("a",{href:"https://behance.com/",target:"_blank",className:"text-extra-dark-gray text-deep-pink-hover margin-one-lr"},l.a.createElement("i",{className:"fab fa-behance","aria-hidden":"true"})),l.a.createElement("a",{href:"https://linkedin.com/",target:"_blank",className:"text-extra-dark-gray text-deep-pink-hover margin-one-lr"},l.a.createElement("i",{className:"fab fa-linkedin","aria-hidden":"true"}))))))),l.a.createElement("button",{onClick:function(){return c(!1)},className:"close-button-menu",id:"close-button"}))))))),l.a.createElement("section",{className:"p-0"},l.a.createElement("div",{className:"swiper-bottom-scrollbar-full swiper-container"},l.a.createElement("div",{className:"swiper-wrapper"},w&&l.a.createElement(d.CircleToBlockLoading,null),P&&l.a.createElement("h1",null,P),g.length>0&&g.map((function(e){return l.a.createElement("div",{key:e.id,className:"swiper-slide width-auto sm-height-auto last-paragraph-no-margin ml-4"},l.a.createElement("div",{className:"height-100 d-flex align-items-center"},l.a.createElement("div",{className:"d-block position-relative"},l.a.createElement(p.b,{to:"/project-details/".concat(e.id)},l.a.createElement("img",{src:"".concat(x.a.REACT_APP_STRAPI_URL).concat(e.thumb[0].url),alt:e.title}))),l.a.createElement("div",{className:"hover-title-box padding-55px-lr width-300px md-width-100 md-padding-20px-lr"},l.a.createElement("div",{className:"separator width-50px bg-black d-none d-xl-inline-block sm-margin-lr-auto"}),l.a.createElement("h3",null,l.a.createElement(p.b,{to:"/project-details/".concat(e.id),className:"text-extra-medium-gray font-weight-600 alt-font text-extra-medium-gray-hover"},e.title)))))})),l.a.createElement("div",{className:"swiper-slide width-150px sm-width-100 sm-height-auto"})),l.a.createElement("div",{className:"swiper-scrollbar d-none d-md-inline-block"}),l.a.createElement("div",{className:"swiper-pagination-vertical position-fixed bullet-deep-pink z-index-5"}))))};function k(){return l.a.createElement("header",null,l.a.createElement("nav",{class:"navbar navbar-default bootsnav bg-black"},l.a.createElement("div",{class:"container-fluid nav-header-container height-100px padding-three-half-lr sm-height-70px sm-padding-15px-lr"},l.a.createElement("div",{class:"col d-none d-md-block text-left pl-0"},l.a.createElement("div",{class:"social-icon"},l.a.createElement("a",{href:"https://www.facebook.com/",title:"Facebook",target:"_blank"},l.a.createElement("i",{class:"fab fa-facebook-f text-white-2","aria-hidden":"true"})),l.a.createElement("a",{href:"https://twitter.com/",title:"Twitter",target:"_blank"},l.a.createElement("i",{class:"fab fa-twitter text-white-2"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-peixoto-jardelino-ba94b3107/",title:"Linkedin",target:"_blank"},l.a.createElement("i",{class:"fab fa-linkedin text-white-2"})))),l.a.createElement("div",{class:"col text-md-center pl-0 pl-md-3"},l.a.createElement("a",{class:"logo",href:"/"},l.a.createElement("img",{src:"../assets/images/logo-daniel.png","data-rjs":"images/logo-daniel.png",class:"default",alt:"Pofo"}))),l.a.createElement("div",{class:"col text-right pr-0"},l.a.createElement("div",{class:"hamburger-menu"},l.a.createElement("div",{class:"btn btn-hamburger border-none"},l.a.createElement("button",{class:"navbar-toggler mobile-toggle",type:"button",id:"open-button","data-toggle":"collapse","data-target":".navbar-collapse"},l.a.createElement("span",null),l.a.createElement("span",null),l.a.createElement("span",null))),l.a.createElement("div",{class:"hamburger-menu-wrepper sm-text-center"},l.a.createElement("div",{class:"hamburger-logo text-left"},l.a.createElement("a",{class:"logo",href:"/"},l.a.createElement("img",{src:"../assets/images/logo-daniel.png","data-rjs":"images/logo-daniel.png",alt:"Pofo"}))),l.a.createElement("div",{class:"btn btn-hamburger border-none"},l.a.createElement("button",{class:"close-menu close-button-menu",id:"close-button"})),l.a.createElement("div",{class:"animation-box"},l.a.createElement("div",{class:"menu-middle"},l.a.createElement("div",{class:"menu-wrapper display-table-cell vertical-align-middle text-left"},l.a.createElement("div",{class:"d-md-flex"},l.a.createElement("div",{class:"col-lg-8 col-md-7 d-flex align-items-center"},l.a.createElement("ul",{class:"hamburger-menu-links alt-font"},l.a.createElement("li",null,l.a.createElement("a",{href:"/",title:"Home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"/about",title:"about"},"Sobre mim")),l.a.createElement("li",null,l.a.createElement("a",{href:"/contact",title:"Contato"},"Contato")))),l.a.createElement("div",{class:"col-lg-4 col-md-5 d-flex align-items-center social-style-3"},l.a.createElement("div",null,l.a.createElement("span",{class:"text-extra-large text-deep-pink alt-font display-block margin-15px-bottom"},"Daniel Peixoto Copywriter"),l.a.createElement("span",{class:"text-medium alt-font display-block font-weight-300 margin-15px-bottom line-height-30"},"301 The Greenhouse,",l.a.createElement("br",null),"Custard Factory, London, E2 8DY.",l.a.createElement("br",null),"Call - +44 (0) 123 456 7890",l.a.createElement("br",null),"Email - ",l.a.createElement("a",{href:"mailto:info@domain.com",class:"text-white-2",target:"_blank"},"info@domain.com")),l.a.createElement("div",{class:"separator-line-horrizontal-medium-light2 bg-deep-pink margin-25px-tb sm-margin-15px-tb display-inline-block"}),l.a.createElement("div",{class:"social-icon-style-9"},l.a.createElement("ul",{class:"small-icon"},l.a.createElement("li",null,l.a.createElement("a",{class:"margin-20px-right facebook",href:"https://www.facebook.com/",target:"_blank"},l.a.createElement("i",{class:"fab fa-facebook-f"}))),l.a.createElement("li",null,l.a.createElement("a",{class:"margin-20px-right twitter",href:"http://twitter.com",target:"_blank"},l.a.createElement("i",{class:"fab fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{class:"linkedin",href:"http://linkedin.com",target:"_blank"},l.a.createElement("i",{class:"fab fa-linkedin-in"})))))))))))))))))}function _(){return l.a.createElement("footer",{className:"footer-classic-dark bg-extra-dark-gray padding-five-bottom sm-padding-30px-bottom"},l.a.createElement("div",{className:"bg-dark-footer padding-20px-tb sm-padding-30px-tb"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row align-items-center"},l.a.createElement("div",{className:"col-lg-4 col-md-5 text-center alt-font sm-margin-15px-bottom"},l.a.createElement("a",{href:"index.html"},"Powered by Fleye Systems ",l.a.createElement("img",{className:"fleye-logo",src:"../assets/images/tentacles.png","data-rjs":"images/tentacles.png",alt:"Pofo"}))),l.a.createElement("div",{className:"col-lg-4 col-md-2 text-center sm-margin-10px-bottom"},l.a.createElement("a",{href:"index.html"},l.a.createElement("img",{className:"footer-logo",src:"../assets/images/logo-daniel.png","data-rjs":"images/logo-daniel.png",alt:"Pofo"}))),l.a.createElement("div",{className:"col-lg-4 col-md-5 text-center"},l.a.createElement("span",{className:"alt-font margin-20px-right"},"On social networks"),l.a.createElement("div",{className:"social-icon-style-8 d-inline-block vertical-align-middle"},l.a.createElement("ul",{className:"small-icon mb-0"},l.a.createElement("li",null,l.a.createElement("a",{className:"facebook text-white-2",href:"https://www.facebook.com/",target:"_blank"},l.a.createElement("i",{className:"fab fa-facebook-f","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"twitter text-white-2",href:"https://twitter.com/",target:"_blank"},l.a.createElement("i",{className:"fab fa-twitter"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"google text-white-2",href:"https://plus.google.com",target:"_blank"},l.a.createElement("i",{className:"fab fa-google-plus-g"}))),l.a.createElement("li",null,l.a.createElement("a",{className:"instagram text-white-2",href:"https://instagram.com/",target:"_blank"},l.a.createElement("i",{className:"fab fa-instagram no-margin-right","aria-hidden":"true"}))))))))))}var y=t(80),P=t.n(y),T=function(e){var a=e.match.params.id,t=Object(n.useState)(null),r=Object(m.a)(t,2),c=r[0],i=r[1],p=Object(n.useState)(!1),u=Object(m.a)(p,2),g=u[0],E=u[1],b=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,E(!0),e.next=4,h.get({service:"portfolios",id:a});case 4:t=e.sent,E(!1),i(t),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),E(!1),console.log("error :>> ",e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),console.log(c),l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),g&&l.a.createElement(d.CircleToBlockLoading,null),c&&l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"wow fadeIn bg-extra-dark-gray"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12 col-lg-6 md-margin-50px-bottom sm-margin-30px-bottom wow fadeInLeft"},l.a.createElement("h2",{className:"alt-font font-weight-700 letter-spacing-minus-2 text-white-2 margin-5px-bottom"},c.title),l.a.createElement("h6",{className:"alt-font font-weight-300"},c.categories),l.a.createElement("p",{className:"margin-35px-bottom d-block"},c.description),c.url&&l.a.createElement("a",{href:"index.html",className:"btn btn-transparent-light-gray btn-small"},"Launch Website")),l.a.createElement("div",{className:"col-12 col-lg-4 offset-lg-2 wow fadeInRight"},l.a.createElement("ul",{className:"list-style-9 margin-twelve-left"},l.a.createElement("li",{className:"text-uppercase"},l.a.createElement("span",{className:"d-block text-extra-small text-white-2"},"Cliente"),c.client),l.a.createElement("li",{className:"text-uppercase"},l.a.createElement("span",{className:"d-block text-extra-small text-white-2"},"Data de publica\xe7\xe3o"),c.creationDate),c.url&&l.a.createElement("li",{className:"text-uppercase"},l.a.createElement("span",{className:"d-block text-extra-small text-white-2"},"Website"),l.a.createElement("a",{href:"index.html"},c.url))))))),l.a.createElement("section",{className:"wow fadeIn bg-light-gray"},l.a.createElement("div",{className:"container-fluid padding-five-lr"},l.a.createElement("div",{className:"row no-gutters"},l.a.createElement("div",{className:"col filter-content overflow-hidden"},l.a.createElement("ul",{className:"portfolio-grid work-4col gutter-large hover-option7"},c.thumb.map((function(e){return l.a.createElement("li",{className:"grid-item web branding design wow fadeInUp float-left"},l.a.createElement("a",{href:"#"},l.a.createElement("figure",null,l.a.createElement("div",{className:"portfolio-img"},l.a.createElement("img",{src:"".concat(x.a.REACT_APP_STRAPI_URL).concat(e.url),alt:""})),l.a.createElement("figcaption",null,l.a.createElement("div",{className:"portfolio-hover-main text-center last-paragraph-no-margin"},l.a.createElement("div",{className:"portfolio-hover-box align-middle"},l.a.createElement("div",{className:"portfolio-hover-content position-relative"},l.a.createElement("span",{className:"font-weight-600 alt-font text-uppercase margin-one-bottom d-block text-extra-dark-gray"},e.name),l.a.createElement("p",{className:"text-medium-gray text-uppercase text-extra-small"},c.categories))))))))}))))))),c.thumb.map((function(e){return"video/mp4"===e.mime&&l.a.createElement("div",{className:"parallax wow fadeIn","data-stellar-background-ratio":"0.1"},l.a.createElement("div",{className:"row justify-content-center bg-light-gray"},l.a.createElement(P.a,{url:"".concat(x.a.REACT_APP_STRAPI_URL).concat(e.url),playing:!0,className:"mb-4 mt-4",height:500,loop:!0})))}))),l.a.createElement(_,null))},O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement("section",{id:"home",className:"p-0 parallax mobile-height wow fadeIn","data-stellar-background-ratio":"0.5",style:{backgroundImage:"http://placehold.it/1920x1200"}},l.a.createElement("div",{className:"opacity-full bg-extra-dark-gray"}),l.a.createElement("div",{className:"container position-relative full-screen"},l.a.createElement("div",{className:"slider-typography text-center"},l.a.createElement("div",{className:"slider-text-middle-main"},l.a.createElement("div",{className:"slider-text-middle"},l.a.createElement("div",{className:"bg-black-opacity-light w-50 mx-auto md-width-80"},l.a.createElement("div",{className:"padding-fifteen-all sm-padding-20px-all"},l.a.createElement("span",{className:"title-extra-large text-white-2 font-weight-600 d-block margin-30px-bottom sm-margin-10px-bottom"},"404!"),l.a.createElement("h6",{className:"text-uppercase text-deep-pink font-weight-600 alt-font d-block margin-5px-bottom"},"P\xe1gina n\xe3o encontrada"),l.a.createElement("span",{className:"text-medium-gray width-60 d-block mx-auto text-large md-width-100"},"A p\xe1gina que voc\xea est\xe1 procurando n\xe3o existe ou foi removida."),l.a.createElement("form",{action:"search-result.html",method:"post",className:"position-relative"},l.a.createElement("div",{className:"input-group-404 input-group margin-50px-tb sm-margin-20px-tb"},l.a.createElement("input",{name:"text",id:"text","data-email":"required",type:"text",placeholder:"Buscar...",className:"extra-big-input border-none form-control"}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{type:"submit",className:"btn btn-large bg-white text-medium-gray"},l.a.createElement("i",{className:"ti-search icon-small m-0 position-raltive top-2"}))))),l.a.createElement(p.b,{to:"/",className:"btn btn-transparent-white btn-medium text-extra-small border-radius-4"},l.a.createElement("i",{className:"ti-arrow-left margin-5px-right ml-0","aria-hidden":"true"})," Voltar ao site...")))))))),l.a.createElement(_,null))},R=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement("section",{class:"wow fadeIn bg-extra-dark-gray padding-35px-tb page-title-small top-space"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row align-items-center"},l.a.createElement("div",{class:"col-xl-8 col-md-6 text-center text-md-left"},l.a.createElement("h1",{class:"alt-font text-white-2 font-weight-600 mb-0 text-uppercase"},"Formul\xe1rio de contato"))))),l.a.createElement("section",{className:"wow fadeIn",id:"start-your-project"},l.a.createElement("div",{className:"container"},l.a.createElement("form",{id:"project-contact-form"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{id:"success-project-contact-form",className:"mx-0"})),l.a.createElement("div",{className:"col-8 col-lg-4"},l.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Nome *",className:"big-input"})),l.a.createElement("div",{className:"col-8 col-lg-4"},l.a.createElement("input",{type:"text",name:"phone",id:"phone",placeholder:"Telefone",className:"big-input"})),l.a.createElement("div",{className:"col-8 col-lg-4"},l.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"E-mail *",className:"big-input"})),l.a.createElement("div",{className:"col-12"},l.a.createElement("textarea",{name:"comment",id:"comment",placeholder:"Descreva como posso lhe ajudar",rows:"6",className:"big-textarea"})),l.a.createElement("div",{className:"col-12 text-center"},l.a.createElement("button",{id:"project-contact-us-button",type:"submit",className:"btn btn-transparent-dark-gray btn-large margin-20px-top"},"Enviar mensagem")))))),l.a.createElement(_,null))},A=t(3);var S=function(){return l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(A.c,null,l.a.createElement(A.a,{exact:!0,path:"/",component:w}),l.a.createElement(A.a,{path:"/project-details/:id",component:T}),l.a.createElement(A.a,{path:"/contact",component:R}),l.a.createElement(A.a,{component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p.a,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},24:function(e,a,t){var n=t(159),l=t(160),r=t(161),c=t(162);e.exports="PRD"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_STRAPI_URL:"http://localhost:1337"}).REACT_APP_ENVIRONMENT?l:"HML"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_STRAPI_URL:"http://localhost:1337"}).REACT_APP_ENVIRONMENT?r:"DEV"===Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,REACT_APP_STRAPI_URL:"http://localhost:1337"}).REACT_APP_ENVIRONMENT?n:c},87:function(e,a,t){e.exports=t(208)}},[[87,1,2]]]);
//# sourceMappingURL=main.98a63dae.chunk.js.map