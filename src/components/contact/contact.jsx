import React from 'react'
import App from '../../App'
import Mail from 'react-ionicons/lib/MdMail'

function Contact() {
  return (
    <App title='Contact'>
      <form method='POST' data-netlify="true" name="contact" action='/success' >
        <input type="hidden" name="form-name" value="contact" />

        <div className="row" style={{ marginTop: 100 }}>
          <div className="col-md">

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" className="form-control" id="subject" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control" name="email" id='email' required />
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
          Send Mail <Mail color='gray' />
        </button>

      </form>
    </App>

  )
}

export default Contact
