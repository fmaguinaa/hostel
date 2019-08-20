import React, { useState, useEffect } from 'react'

export default function Dashboard() {
  const [user, setUser] = useState('')
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!initialized) {
      var fetchedUser = {
        firstName: 'Wanda',
        lastName: 'Maximoff',
        email: 'wanda@mail.com',
        school: 'University of Central Florida',
        major: 'Computer Science',
        token: 'fas90dzsdcj0z9s.2r92034afowijapw.fefauw8cjzpsdijzp'
      }
      setUser(fetchedUser)
      setInitialized(true)
    }
  })

  const fetchUser = () => {
    var fetchedUser = {
      firstName: 'Wanda',
      lastName: 'Vision',
      email: 'wanda@mail.com',
      school: 'University of Central Florida',
      major: 'Computer Science',
      token: 'fas90dzsdcj0z9s.2r92034afowijapw.fefauw8cjzpsdijzp'
    }

    setUser(fetchedUser)
  }

  return (
    <div>
      <p>DASHBOARD</p>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.email}</p>
      <p>{user.school}</p>
      <p>{user.major}</p>
      <p>{user.token}</p>
      <button onClick={() => fetchUser()}>Change</button>
    </div>
  )
}