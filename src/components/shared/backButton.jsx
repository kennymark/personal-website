import React, { useState } from 'react'
import Back from 'react-ionicons/lib/MdArrowBack'
import { withRouter } from 'react-router-dom'

function GoBack({ history, }) {

  const [location] = useState(history.location.pathname)

  if (location.includes('project/')) {
    return (
      <>
        <button className="btn btn-light rounded-pill "
          onClick={() => history.goBack()}>
          <Back /> Go back
      </button>
      </>
    )
  }
  return (
    <>
      <button className="btn btn-light rounded-pill "
        onClick={() => history.push('/')}>
        <Back /> Go home
      </button>
    </>
  )
}

export default withRouter(GoBack)
