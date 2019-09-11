import React, { Component, Fragment } from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMailBulk } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default class Contactenos extends Component {
  render() {
    return (
      <Fragment>
          Enviar correo:
        <div>
        <FontAwesomeIcon icon={faMailBulk} />
        <FontAwesomeIcon icon={faWhatsapp} />

        </div>
      </Fragment>
    )
  }
}