import React, { Component } from 'react'
// import emoji from 'react-easy-emoji'

import { Carousel } from 'antd'

import image from '../../layout/images/image1.jpg'

export default class Landing extends Component {
  render() {
    return (

      <div className='landing'>

        <Carousel autoplay>
          <div className='landing__wallpaper' >
            <div className='landing__image' style={{ backgroundImage: image }}>
              <div className='landing__image_description'>
                La ciudad
              </div>
            </div>
          </div>
          <div className='landing__wallpaper'>
            <div className='landing__image' style={{ backgroundColor: 'blue' }}>
              <div className='landing__image_description'>
                La ciudad
              </div>
            </div>
          </div>
          <div className='landing__wallpaper'>
            <div className='landing__image' style={{ backgroundColor: 'yellow' }}>
              <div className='landing__image_description'>
                La ciudad
              </div>
            </div>
          </div>
        </Carousel>
        <h1 className='heading-tertiary u-margin-bottom-small center'>
              Un poco sobre nosotros
            </h1>
        <div className='services'>
          <div className='service'>

            <div className='content'>
              <img src={image} alt='description--1' className='photo photo--p2' />
              <div className='description'>
                <h1 className='heading-tertiary u-margin-bottom-small center'>
                  Comodidad y seguridad
                </h1>
                <p className='paragraph'>
                  Espacios pensados para su comodidad y seguridad completa.
                  <br />
                  Nuestra ubicación cerca a las avenidas principales y a la plaza central, permite la mejor distribución del tiempo de nuestros visitantes.
                  <br />
                  Brindamos información turística, y programamos el itinerario de nuestros visitantes, contamos con personal, calificado para brindar un servicio de calidad a nuestros huéspedes, y hacer su estadía placentera.
                </p>
              </div>
            </div>
          </div>
          </div>
          <h1 className='heading-tertiary u-margin-bottom-small center'>
              Un poco sobre nosotros
            </h1>
        <div className='services'>
          <div className='service'>

            <div className='content'>
              <div className='description'>
                <h1 className='heading-tertiary u-margin-bottom-small center'>
                  Comodidad y seguridad
                </h1>
                <p className='paragraph'>
                  Espacios pensados para su comodidad y seguridad completa.
                  <br />
                  Nuestra ubicación cerca a las avenidas principales y a la plaza central, permite la mejor distribución del tiempo de nuestros visitantes.
                  <br />
                  Brindamos información turística, y programamos el itinerario de nuestros visitantes, contamos con personal, calificado para brindar un servicio de calidad a nuestros huéspedes, y hacer su estadía placentera.
                </p>
              </div>
            <img src={image} alt='description--1' className='photo photo--p2' />
            </div>
          </div>
          <div className='service'>
            <div className='content'>
              <img src={image} alt='description--1' className='photo photo--p2' />
              <div className='description'>
                <h1 className='heading-tertiary u-margin-bottom-small center'>
                  Comodidad y seguridad
                </h1>
                <p className='paragraph'>
                  Espacios pensados para su comodidad y seguridad completa.
                  <br />
                  Nuestra ubicación cerca a las avenidas principales y a la plaza central, permite la mejor distribución del tiempo de nuestros visitantes.
                  <br />
                  Brindamos información turística, y programamos el itinerario de nuestros visitantes, contamos con personal, calificado para brindar un servicio de calidad a nuestros huéspedes, y hacer su estadía placentera.
                </p>
              </div>
            </div>
          </div>

        </div>






        {/* //       <div style={{ ustifyContent: 'center', alignItems: 'center'}}>
        
// <center>
//   <h1>
//             {
//               emoji('En construccion.... 😜😜😜')
//             }
//   </h1>

  
// </center>
//       </div> */}
      </div>

    )
  }
}