import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Todo List</h1>
      <Link style={styleLink} to="/">Home</Link> | <Link style={styleLink} to="/about">About</Link>
    </header>
  )
}

const headerStyle = {
  color: '#fff',
  backgroundColor: '#000',
  textTransform: 'uppercase',
  padding: '25px',
  textAlign: 'center'
}

const styleLink = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header