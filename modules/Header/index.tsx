import React from 'react'
import HeaderTop from './HeaderTop'
import HeaderCenter from './HeaderCenter'
import HeaderBottom from './HeaderBottom'

function Header() {
  return (
    <header>
        <HeaderTop/>
        <HeaderCenter/>
        <HeaderBottom/>   
    </header>
  )
}

export default Header