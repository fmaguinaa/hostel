import React, { Component } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMailBulk, faMapMarked, faPhone, faMobile } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

import { Divider } from 'antd'

// const iframe = `<iframe src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d983.6905404222398!2d-77.5246574!3d-9.5293812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a90df246e21607%3A0x29ed1c3bb9169a82!2sHostel%20Traveller&#39;s%20Palace!5e0!3m2!1ses-419!2spe!4v1568345457724!5m2!1ses-419!2spe" width = "600" height = "450" frameborder = "0" style = "border:0;" allowfullscreen = "" title = 'Ubicacion' ></iframe>`

// const Iframe = (
//   <div dangerouslySetInnerHTML={{__html: {iframe}}}></div>
// )

export default class Contactenos extends Component {
  render() {
    return (
      <div className='contactenos'>
        <Divider style={{ paddingTop: '2rem', marginTop: '0' }}>
          <h1 className='heading-tertiary heading-tertiary--1'>
            Contactenos
          </h1>
        </Divider>
        <div className='contactenos-content'>
          <div className='row'>
            <FontAwesomeIcon icon={faMailBulk} />
            <p className='text'>
              Correo:
            </p>
            <a href='mailto:hosteltravellerspalace@gmail.com' target='_blank' rel="noopener noreferrer">
              hosteltravellerspalace@gmail.com
            </a>
          </div>

          <div className='row'>
            <FontAwesomeIcon icon={faPhone} />
            <p className='text'>
              Telefono:
            </p>
            <a href='tel:+51043236501' target='_blank' rel="noopener noreferrer">
              (051) (043) 236 501
            </a>
          </div>

          <div className='row'>
            <FontAwesomeIcon icon={faMobile} />
            <p className='text'>
              Celular:
            </p>
            <a href='tel:+51954896912' target='_blank' rel="noopener noreferrer">
              (051) 954 896 912
            </a>
          </div>

          <div className='row'>
            <FontAwesomeIcon icon={faWhatsapp} />
            <p className='text'>
              Whatsapp:
            </p>
            <a href="https://wa.me/15551234567?text=Estoy%20interesado%20en%20hospedarme" target='_blank' rel="noopener noreferrer">
              +51 954 896 912
            </a>
          </div>

          <div className='row'>
            <FontAwesomeIcon icon={faMapMarked} />
            <p className='text'>
              Direccion:
            </p>
            <a href='https://goo.gl/maps/mxM7JLUarxYFnwCB9' target='_blank' rel="noopener noreferrer">
              Jr. Enrique palacios 312 - Barrio de San Francisco
            </a>
          </div>
        </div>
        <div>

        <div>
          {/* <Iframe/> */}
        </div>
        </div>
      </div>
    )
  }
}
