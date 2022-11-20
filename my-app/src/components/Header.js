import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <ul className='nav-link'>
      <li><Link to={'/overview'}>Overview</Link></li>
      <li><Link to={'/question'}>Question</Link></li>
      <li><Link to={'/overview'}>Overview</Link></li>
      <li><Link to={'/overview'}>Overview</Link></li>
      <li><Link to={'/overview'}>Overview</Link></li>
      </ul>
    </div>
  )
}

export default Header
