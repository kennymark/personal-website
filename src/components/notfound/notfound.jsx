import React from 'react'
import GoBack from '../shared/backButton'

const Notfound = () => {
  return (
    <>
      <div className="container">
        <GoBack />
        <p className='center text-light'>
          Error 404
        </p>
      </div>

    </>
  )
}

export default Notfound
