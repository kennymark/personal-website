import React from 'react'
import Back from 'react-ionicons/lib/MdArrowBack'
import { withRouter } from 'react-router-dom'

function GoBack({ history }) {
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
