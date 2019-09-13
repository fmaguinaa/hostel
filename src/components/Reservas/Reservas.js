import React, { Component } from 'react'

import { Col, Divider, Row } from 'antd'

export default class Reservas extends Component {
  render() {
    return (
      <div className='reservas'>
        <div className='reservas-content'>
          <Divider>
            <h1 className='heading-tertiary heading-tertiary--1'>
              Reservas
            </h1>
          </Divider>
          <h1 className='heading-tertiary heading-tertiary--center u-margin-bottom-small'>
            Promociones
          </h1>
          <p className='paragraph'>
            Contamos con habitaciones dobles, matrimonial, y compartidas. Con 4 y 6 camas. Espacios compartidos, cocina, bar y comedor, TV cable, Internet.
          </p>
        </div>
        <Row gutter={32}>
          <Col xs={24} sm={12}>
            <div className='card'>
              <div className='card-photo' />
              <div className='title'>La ciudad</div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className='card'>
              <div className='card-photo' />
              <div className='title'>La ciudad</div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className='card'>
              <div className='card-photo' />
              <div className='title'>La ciudad</div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className='card'>
              <div className='card-photo' />
              <div className='title'>La ciudad</div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className='card'>
              <div className='card-photo' />
              <div className='title'>La ciudad</div>
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className='card'>
              <div className='card-photo' />
              <div className='title'>La ciudad</div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}