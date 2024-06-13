import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex justify-center gap-8'>
        <NavLink to="/" className={(e)=>e.isActive ? 'text-red-600 font-bold' : 'hover:text-red-600' }>Home</NavLink>
        <NavLink to="/about" className={(e)=>e.isActive ? 'text-red-600 font-bold' : 'hover:text-red-600' }>About</NavLink>
        <NavLink to="/users" className={(e)=>e.isActive ? 'text-red-600 font-bold' : 'hover:text-red-600' }>Users</NavLink>
    </nav>
  )
}

export default Nav