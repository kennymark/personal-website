import React, { useEffect } from 'react';
import GoBack from './components/shared/backButton'
import ReactGA from 'react-ga';
import Pulse from 'react-reveal/Fade'
import Nav from './components/shared/header';


function App({ title, children }) {
  const { pathname, search } = window.location

  useEffect(() => {
    process.env.NODE_ENV.includes('prod') && ReactGA.initialize('UA-68267074-1')
    ReactGA.pageview(pathname + search);
  }, [pathname])

  return (
    <Pulse>
      <div className="container-2">
        <Nav />
        <div className='d-flex align-items-center'>
          <h1 className="display-4">{title}</h1>
          <span className='ml-4'><GoBack /></span>
        </div>
        {children}
      </div>
    </Pulse>
  )
}

export default App;