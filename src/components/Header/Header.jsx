import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return (
        <div className='shadow py-8 fixed w-full z-50 bg-white'>
            <div className='container flex'>
                <Logo />
                <Menu />
            </div>
        </div>
    )
}

export default Header