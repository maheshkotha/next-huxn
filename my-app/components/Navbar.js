import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <div className='logo'>
          <h1>Logo</h1>
        </div>
        <div className='link-container'>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/portfolio'>Portfolio</Link>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar