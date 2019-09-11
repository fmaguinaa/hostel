import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube, faTwitter } from "@fortawesome/free-brands-svg-icons"

export default function Social() {
  return(
    <div className='social'>
      <a href='https://www.facebook.com/Hosteltravellerspalace/' target='_blank'>
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href='https://www.instagram.com/travellers_palace/' target='_blank'>
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href='https://www.twitter.com' target='_blank'>
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href='https://www.youtube.com/' target='_blank'>
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
  )
}