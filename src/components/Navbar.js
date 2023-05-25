import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container d-flex justify-content-center align-items-center" style={{
    fontFamily: "'Roboto', Arial, sans-serif",
  }}>
      <a className="navbar-brand" href="/">
        Todos
      </a>
    </div>
  </nav>
  )
}

export default Navbar
