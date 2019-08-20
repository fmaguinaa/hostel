import React from 'react'

import { updateStateOnEvent } from '../../../utils'

export default function TutorLanding(email, setEmail) {

  const subscribe = (email, e) => {
    e.preventDefault();
    alert('subscribed!');
    // subscribe with email
    setEmail('')
  };

  return (
    <React.Fragment>
      <div>TUTOR LANDING</div>
      <section>
        <form onSubmit={ (e) => subscribe(email, e) }>
          <p>Subscribe to stay in the loop</p>
          <input type='text' placeholder='Email' onChange={ (e) => updateStateOnEvent(setEmail, e) } value={ email } />
          <input type='submit' />
        </form>

      </section>
      <section>TUTOR Section2</section>
      <section>TUTOR Section3</section>
    </React.Fragment>
  )
}