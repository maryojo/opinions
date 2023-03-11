import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../images/logo.png"

const Logo = () => {
  return (
    <Link to="/">
            <img src={logo} alt="" className="w-[2.7rem] sm:w-[3.5rem] md:w-[4.2rem]" />
    </Link>
  )
}

export default Logo