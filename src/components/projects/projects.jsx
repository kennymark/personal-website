import React, { useState, useEffect } from 'react'
import App from '../../App'
import Image from 'react-image'
import { startCase } from 'lodash'
import Loading from 'react-ionicons/lib/MdSync'
import Visible from 'react-visibility-sensor'

function Projects({ history }) {
  const [projects, setProjects] = useState([])
  const [url] = useState('./projects.json')
  const json = 'application/json'

  const viewProject = (proj) => history.push('/project/' + proj.id)

  useEffect(() => {
    getProjects()
    return () => setProjects(null)
  }, [])

  const getProjects = () => {
    fetch(url, { headers: { 'Content-Type': json } })
      .then(res => res.json())
      .then(data => setProjects(data.results))
  }

  return (
    <App title='Projects'>
      <div className="row">
        {projects.map((proj, i) => (
          <div key={i} className="col-md-4 project-box mb-5"
            onClick={() => viewProject(proj)}>
            <Visible>
              <Image src={[proj.image, '/assets/skeleton.webp']} className='shadow'
                loader={<Loading color='white' fontSize='80px' className='center text-center' beat={true} />} />
            </Visible>
            <p className='project-text text-warning'>{startCase(proj.name)}</p>
          </div>
        ))}
      </div>
    </App>
  )

}

export default Projects
