import React from 'react'
import style from './Nav.module.css'
import logo from '../img/logo.png'
import { Link } from 'react-router-dom'
import {BsFillPersonFill} from 'react-icons/bs'
const Nav = () => {
  return (
    <div className={style.nav}>
      <Link to='/' className={style.logo} >
        <img src={logo} />
        <h1>
          Minimal <span>Shop</span>ping
        </h1>
      </Link>
      <div>
        <BsFillPersonFill size={30} />
      </div>
    </div>
  )
}

export default Nav