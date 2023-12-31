import React from 'react'
import logo from "../assets/image/favicon.png"


function Header() {
  return (
    <header className="header">
        <div className="container">
          <div className="header-wrapper">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="name">Scoreboard</h1>
            <h5 className="total">Total</h5>
          </div>
        </div>
      </header>
  )
}

export default Header