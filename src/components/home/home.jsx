import React from 'react'
import Typed from 'react-typed'
import Fade from 'react-reveal/Fade'
import './home.css'
import Nav from '../shared/header';



const Home = () => {
  return (
    <>
      <div className="landing d-flex flex-column">

        <Fade>
          <div className="container-2">
            <Nav />
          </div>
        </Fade>

        <Fade big cascade bottom>
          <div className="intro-box align-self-center center">
            <h1 className='intro-text text-left px-4 d-flex flex-column'>
              Hello! I'm KENNY,
              <span className='text-center '>
                I {' '}<Typed strings={['develop', 'design', 'and', 'code']} className='font-italic' typeSpeed={150} backSpeed={90} loop />
                apps
              </span>
            </h1>
          </div>
        </Fade>

      </div>
    </>
  )
}

export default Home
