import React from 'react'
import App from '../../App'
import Typed from 'react-typed'



const Profile = () => {
  return (
    <>
      <App title='Profile'>
        <div className="row mt-5">
          <div className="col-md" >
            <p><Typed strings={['I’m Kenny Mark, currently']}
              typeSpeed={50} showCursor={false} />{' '} a Software Engineer at SABS Travel Technologies and formerly a University of Chester graduate. I graduated with a 2:1 Computer Science degree. I am primarily a front-end developer but I have built back-end solutions in Node and ExpressJs. I have worked on several projects including this website. I also develop and design mobile apps with React Native.
            </p>
            <p> Software development aside, I am also heavily invested in the creation and nurturing of ideas that are used by the masses. I incline to be entrepreneurial at times and product design would be an area I would love to explore and competent at. I see beyond code and design.
          </p>
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </App>

    </>
  )
}

export default Profile
