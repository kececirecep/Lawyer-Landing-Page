import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return (
        <div className='py-8 flex items-center justify-between'>
            <Logo />
            <Menu />
        </div>
    )
}

export default Header