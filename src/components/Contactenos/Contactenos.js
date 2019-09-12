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
        <div>
          
          HOSTEL TRAVELLER'S PALACE

          Jr. Enrique palacios 312 - Barrio de San Francisco

          Office: (051) (043)236501

          Cel: (051) 954896912

          Mail: hosteltravellerspalace@gmail.com
        </div>
        </div>
      </Fragment>
    )
  }
}