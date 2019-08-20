//import React,{Fragment,useState } from 'react'
//import StudentNavigation from '../../common/studentNavigation/StudentNavigation'

import React, { Component } from 'react'

import image from "../../assets/images/background/image.png"

export default class Tutor extends Component{

  subscribeTutor = (e) => {
    e.preventDefault()
    this.props.history.push('/tutorconfirm')
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <div>
        <div className="tutor-container">
          <div className="tutor-container-phrases">
            <h3 className="heading-secondary heading-secondary--sub">
              Contribuye tus conocimientos con proposito
            </h3>
            <h1 className="heading-secondary">
              Quieres ganar dinero y cambiar el mundo?
            </h1>
            <h1 className="heading-secondary u-margin-bottom-medium">
              Inscribete hoy.
            </h1>
            <form className="form-tutor">
              <div className="form__row form__row--2 u-width-quarter">
                <input type="email" className="search__input" placeholder="Correo Electronico"></input>
              </div>
              <div className="form__row form__row--2">
                <button className="btn btn--orange" onClick={this.subscribeTutor}>Inscribeme</button>
              </div>
            </form>
          </div>
        </div>
  
        {/* PROPOSITO */}
        <div className="tutor-options" id="proposito">
          <div className="tutor-options-container">
            <div className="tutor-options-container__item content">
              <h1 className="heading-tertiary u-margin-bottom-medium">
                Nuestro proposito, el tuyo y el nuestro
              </h1>
              <p className="paragraph">
                Papaya quiere ayudar a la gente latina a triunfar en el mundo tecnológico. Estadísticas muestran que hay un total de 8% de latinos en tech y queremos cambiar ese número mientras cambiamos las percepciones de la gente al nivel mundial! Como se dice en Perú, este desafío va ser Papaya ;). Dónde está mi gente??
              </p>
            </div>
            <img
              // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
              // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
              alt="p1"
              className="photo photo--p1"
              src={image} />
          </div>
        </div>
  
        {/* ACERCA */}
        <div className="tutor-options" id="acerca">
          <div className="tutor-options-container">
            <div className="tutor-options-container__item content">
              <h1 className="heading-tertiary u-margin-bottom-medium">
                Las oportunidades se expanden cuando tu expandes tus horizontes
              </h1>
              <p className="paragraph">
                Queremos conectar a estudiantes que puedan representar a Peru de la mejor manero con estudiantes de Estados Unidos. Les ensenaras todo lo que sabes, estableceras conexiones, y ganaras dinero mientras lo haces. Actualmente, estamos trabajando en campanas que puedan ayudar a universitarios como tu a tener practicas en USA.
              </p>
            </div>
            <img
              alt="p1"
              className="photo photo--p1"
              src={image}></img>
          </div>
        </div>
  
        {/* COMO FUNCIONA */}
        <div className="tutor-options" id="como-funciona">
          <div className="tutor-options-container tutor-options-container--1" >
            <div className="vertical-center">
              <div className="features u-margin-bottom-big">
                <div className="feature">
                  <h1 className="heading-tertiary u-margin-bottom-small">
                    Ganancias de Confianza
                  </h1>
                  <p className="paragraph">
                    Papaya quiere ayudar a estudiantes de tu calibre para hacer dinero facil - cuando y donde te sea mas conveniente... Es Papaya ;)
                  </p>
                </div>
                <div className="feature">
                  <h1 className="heading-tertiary u-margin-bottom-small">
                    Lo mas Vital
                </h1>
                  <p className="paragraph">
                    Nada mas necesitas acceso a una computadora con y una buena conexion al internet - simple!
                  </p>
                </div>
                <div className="feature">
                  <h1 className="heading-tertiary u-margin-bottom-small">
                    Necesitas una computadora?
                  </h1>
                  <p className="paragraph">
                    Estamos creando un programa para ayudar a estudiantes a obtener una computadora pagando poco a poco con tutoria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tutor-options" id="como-funciona2">
          <div className="tutor-options-container tutor-options-container--1">
            <div className="vertical-center">
              <h1 className="heading-tertiary">
                Easy to use
              </h1>
              <div className="features">
                <div className="feature">
                  <h3 className="heading-quaternary u-margin-bottom-small">
                    Step 1
                  </h3>
                  <p className="paragraph">
                    Go online
                  </p>
                  <img
                    alt="p2"
                    className="photo photo--p1"
                    src={image} />
                </div>
                <div className="feature">
                  <h3 className="heading-quaternary u-margin-bottom-small">
                    Step 2
                  </h3>
                  <p className="paragraph">
                    Accept sessions and start making dough!
                  </p>
                  <img
                    // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
                    // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="p3"
                    className="photo photo--p1"
                    src={image} />
                </div>
                <div className="feature">
                  <h3 className="heading-quaternary u-margin-bottom-small">
                    Step 3
                  </h3>
                  <p className="paragraph">
                    Cash out instantly
                  </p>
                  <img
                    // srcset="../../assets/images/background/image.png 300w, ../../assets/images/background/image.png 1000w"
                    // srcset="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                    alt="p4"
                    className="photo photo--p1"
                    src={image} />
                </div>
              </div>
  
            </div>
          </div>
  
        </div>
  
      </div>
    )
  }
}