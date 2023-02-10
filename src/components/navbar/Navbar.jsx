import React from 'react'
import { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'


const Menu = () => {
  return (
    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#what">What is AudioGPT-3</a></p>
      <p><a href="#possi">open AI</a></p>
      <p><a href="#features">Cases Studies</a></p>
      <p><a href="#blog">Library </a></p>
    </>
  )

}

const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='audioGPT3__navbar'>
      <div className='audioGPT3__navbar--Links'>
        <div className='audioGPT3__navbar--Links__logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='audioGPT3__navbar--Links__container'>
          <Menu />
        </div>
      </div>
      <div className='audioGPT3__navbar--sign'>
        <div className='audioGPT3__navbar--sign__section'>
          <p>sign in</p>
          <button type='button'>Sign Up</button>
        </div>
        <div className='audioGPT3__navbar--sign__menu'>
          {ToggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
          }
          {
            ToggleMenu && (
              <div className='audioGPT3__navbar--sign__menu--container slide-in-elliptic-top-fwd'>
                <div className='audioGPT3__navbar--sign__menu--container__links'>
                  <Menu />
                  <div className='audioGPT3__navbar--sign__menu--container__links--sign'>
                    <p>sign in</p>
                    <button type='button'>Sign Up</button>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>

    </div>
  )
}

export default Navbar