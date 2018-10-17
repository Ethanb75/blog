import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          {/* <figure className="image">
            <img src={logo} alt="Kaldi" style={{ width: '88px' }} />
          </figure> */}
          <h1>
            <span>EB</span>
          </h1>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/">
          Home
          <span>navigate to the homepage</span>
        </Link>
        <Link className="navbar-item" to="/about">
          About
          <span>learn more about me</span>
        </Link>
        <Link className="navbar-item" to="/products">
          Contact
          <span>contact me today</span>
        </Link>
      </div>
      <div className="navbar-end">
        <ul>
          <li>
            <a href="https://github.com/Ethanb75">Github</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ethandevelops/">Instagram</a>
          </li>
          <li>
            <a href="mailto:contact@ethandevelops.com">Email</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Navbar
