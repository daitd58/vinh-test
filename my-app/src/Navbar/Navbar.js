import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='Navbar'>
            <div className="navContainer">

                <div className="navItems">
                    <ul>
                        <li>
                            <Link to='/Overview' className='nav-link'>OverView</Link>
                        </li>
                        <li>
                            <Link to='/Bookmark' className='nav-link'>Annoucement</Link>
                        </li>
                        <li>
                            <Link to='/Grade' className='nav-link'>Grade</Link>
                        </li>
                        <li>
                            <Link to='/Annoucement' className='nav-link'>Customers</Link>
                        </li>
                        <li>
                            <Link to='/Question' className='nav-link'>Question</Link>
                        </li>
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default Navbar