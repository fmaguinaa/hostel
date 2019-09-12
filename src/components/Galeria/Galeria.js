import React, { Component } from 'react'

import { Carousel } from 'antd'
import image from '../../layout/images/image1.jpg'

export default class Galeria extends Component {
  render() {
    return (
      <div className='galeria'>
        <Carousel autoplay>
          <div className='galeria__wallpaper' >
            <div className='galeria__image' style={{ backgroundImage: image }}>
              <div className='galeria__image_description'>
                La ciudad
              </div>
            </div>
          </div>
          <div className='galeria__wallpaper' >
            <div className='galeria__image' style={{ backgroundImage: image }}>
              <div className='galeria__image_description'>
                La ciudad
              </div>
            </div>
          </div>
          <div className='galeria__wallpaper' >
            <div className='galeria__image' style={{ backgroundImage: image }}>
              <div className='galeria__image_description'>
                La ciudad
              </div>
            </div>
          </div>
          <div className='galeria__wallpaper' >
            <div className='galeria__image' style={{ backgroundImage: image }}>
              <div className='galeria__image_description'>
                La ciudad
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    )
  }
}