import React from 'react'
import View from 'react-ionicons/lib/MdEye'


function ViewButton({ link }) {
  return (
    <>
      <button className="btn btn-dark rounded-pill mb-3  "
        onClick={() => window.open(link)}>
        View on Github  <View color='white' />
      </button>
    </>
  )
}

export default ViewButton
