import React, { Component } from 'react'

import { Carousel, Col, Divider, Row, Tabs } from 'antd'
import image from '../../layout/images/image1.jpg'

const { TabPane } = Tabs;

const carousel = (
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
)

const allPhotos = (
  <Row gutter={32}>
    <Col xs={24} sm={12}>
      <div className='card'>
        <div className='card-photo' style={{backgroundImage:image}} />
        <div className='title'>La ciudad</div>
      </div>
    </Col>
    <Col xs={24} sm={12}>
      <div className='card'>
        <div className='card-photo' style={{ backgroundImage: image }} />
        <div className='title'>La ciudad</div>
      </div>
    </Col>
    <Col xs={24} sm={12}>
      <div className='card'>
        <div className='card-photo' style={{ backgroundImage: image }} />
        <div className='title'>La ciudad</div>
      </div>
    </Col>
    <Col xs={24} sm={12}>
      <div className='card'>
        <div className='card-photo' style={{ backgroundImage: image }} />
        <div className='title'>La ciudad</div>
      </div>
    </Col>
    <Col xs={24} sm={12}>
      <div className='card'>
        <div className='card-photo' style={{ backgroundImage: image }} />
        <div className='title'>La ciudad</div>
      </div>
    </Col>
    <Col xs={24} sm={12}>
      <div className='card'>
        <div className='card-photo' style={{ backgroundImage: image }} />
        <div className='title'>La ciudad</div>
      </div>
    </Col>
  </Row>
)


export default class Galeria extends Component {
  render() {
    return (
      <div className='galeria'>
        <Divider style={{paddingTop: '2rem', marginTop:'0'}}>
          <h1 className='heading-tertiary heading-tertiary--1'>
            Galería
          </h1>
        </Divider>


        <Tabs>

          <TabPane tab='Presentacion' key='1'>
            {carousel}
          </TabPane>
          <TabPane tab='Todas las fotos' key='2'>
            {allPhotos}
          </TabPane>

        </Tabs>

       
      </div>
    )
  }
}