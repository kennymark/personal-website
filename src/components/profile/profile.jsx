import React from 'react'
import App from '../../App'
import Typed from 'react-typed'



const Profile = () => {

  return (
    <>
      <App title='Profile'>
        <div className="row mt-5">
          <div className="col-md" >
            <p>
              <Typed strings={['I’m Kenny Mark, currently ']}
                typeSpeed={50} showCursor={false} />{' '}
              a Software Engineer for Trelleborg Marine Systems and formerly a University of Chester graduate. I graduated with a Computer Science degree in CompSci but the web (front-end && backend) is where I live.  I love everything about UI design and UX on the web. I have worked on several projects including this website. I also develop and design mobile apps with React Native.
              </p>
            <p>
              I actively spend many hours per day working on my side projects which can be found on github code. I have developed applications for mobile, desktop and web both in their native languages or using cross-platform solutions. Software development aside, I am also heavily invested in the creation and nurturing of ideas that are used by the masses. I incline to be entrepreneurial at times and product design would be an area I would love to explore and competent at. I see beyond code and design.
          </p>
          </div>
          <div className="col-md-4">
            {/* <h1 className="title-2">Interests</h1> */}
          </div>
        </div>
      </App>

    </>
  )
}

export default Profile
