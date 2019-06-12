import React from 'react'
import { NavLink as Link } from 'react-router-dom'
import GithubLogo from 'react-ionicons/lib/LogoGithub'

const Nav = () => {
  return (
    <>
      <nav className=''>
        <ul className='justify-content-end' >
          <li className='nav-item'>
            <Link to='/projects' className='nav-link' activeClassName='active'>Projects</Link>
          </li>
          <li className='nav-item'>
            <Link to='/skills' className='nav-link' activeClassName='active'>Skills</Link>
          </li>
          <li className='nav-item'>
            <Link to='/profile' className='nav-link' activeClassName='active'>Profile</Link>
          </li>
          <li className='nav-item'>
            <Link to='/contact' className='nav-link' activeClassName='active'>Contact</Link>
          </li>
          <li className='nav-item'>
            <a href="https://github.com/kennymark" target='_blank' rel="noopener noreferrer" className='nav-link'>
              <GithubLogo color='#fff' fontSize='30px' />
            </a>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav
