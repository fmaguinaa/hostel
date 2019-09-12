import React, { Component } from 'react'

import { Divider } from 'antd'

export default class Reservas extends Component {
  render() {
    return (
      <div className='reservas'>
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
    )
  }
}