import React from 'react'
import GoBack from '../shared/backButton'

const Notfound = () => {
  return (
    <>
      <GoBack />
      <p style={{ color: 'white' }}>
        Error 404
      </p>
    </>
  )
}

export default Notfound
