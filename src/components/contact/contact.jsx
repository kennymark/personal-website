import React from 'react'
import App from '../../App'
import Mail from 'react-ionicons/lib/MdMail'
import Animate from 'react-reveal/Pulse'

function Contact() {
  return (
    <Animate>
      <App title='Contact'>
        <form action="https://formspree.io/geniounico@outlook.com" method='POST'>
          <div className="row" style={{ marginTop: 150 }}>
            <div className="col-md">

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" className="form-control" id="subject" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" name="_replyto" id='email' required />
              </div>

              <div className="form-group">
                <label htmlFor="name">Name/Organisation</label>
                <input type="text" className="form-control" id="name" />
              </div>

            </div>
            <div className="col-md">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" className='form-control' rows="10" required />
            </div>
          </div>

          <button className="btn btn-light rounded-pill my-3" type='submit'>
            Send Mail <Mail color='#34495e' />
          </button>

        </form>
      </App>
    </Animate>
  )
}

export default Contact
