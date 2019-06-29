import React, { useState, useEffect } from 'react'
import Image from 'react-image'
import Md from 'react-markdown'
import App from '../../App'
import Slide from 'react-reveal/Slide'
import ViewButton from '../shared/viewButton'

function Project({ match }) {
  const [project, setProject] = useState({})
  const [md, setMd] = useState('')
  const [id] = useState(match.params.id)
  const url = '/projects.json',
    json = 'application/json'

  const mdStyle = {
    overflowY: 'scroll',
    height: 700,
    background: '#b2404d3d'
  }

  useEffect(() => {
    findProject(id)
    return () => setProject(null)
  }, [])

  const findProject = (id) => {
    fetch(url, { headers: { 'Content-Type': json, 'Accept': json, mode: 'cors' } })
      .then(res => res.json())
      .then(data => setProject(data.results[id - 1]))
  }

  fetch(project.markdown)
    .then(res => res.text())
    .then(data => { setMd(data) })
    .catch(err => '')

  return (
    <Slide top>
      <App title='Project'>
        <ViewButton link={project.link} />
        <div className="row pb-4">
          <div className="col-md rounded mr-2 w-100 proj">
            <Image src={[project.image, '/assets/skeleton.webp']} className='shadow-md' />
          </div>
          <div className="col-md markdown rounded-sm" style={mdStyle}>
            <Md source={md} escapeHtml={true} />
          </div>

        </div>
      </App>
    </Slide>
  )
}


export default Project