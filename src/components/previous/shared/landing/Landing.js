import React, { useState } from 'react'

import LandingNavigation from '../landingNavigation/LandingNavigation'
import StudentLanding from '../../student/studentLanding/StudentLanding'
import TutorLanding from '../../tutor/tutorLanding/TutorLanding'
import Footer from '../footer/Footer'


export default function Landing() {
  const [variant, setVariant] = useState('');
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const renderVariantContent = () => {
    if (variant === 'student') return StudentLanding();
    if (variant === 'tutor') return TutorLanding(subscribeEmail, setSubscribeEmail);
    return (
      <div>
        DEFAULT CONTENT
      </div>
    )
  };

  return (
    <article>
      <div className="main">
        { LandingNavigation(variant, setVariant) }
        { renderVariantContent() }
      </div>
      <div className="bottom">
        { Footer() }
      </div>
    </article>
  )
}