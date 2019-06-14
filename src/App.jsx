import React from 'react';
import GoBack from './components/shared/backButton'
import Animate from 'react-reveal/Fade'
import Nav from './components/shared/header';


function App({ title, children }) {
  return (
    <Animate>
      <div className="container-2 ">
        <Nav />
        <div className='d-flex align-items-center'>
          <h1 className="display-4">{title}</h1>
          <span className='ml-4'><GoBack /></span>
        </div>
        {children}
      </div>
    </Animate>
  )
}

export default App;