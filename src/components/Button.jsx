import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to={props.link} className='px-6 py-4 bg-themeBlue font-jakarta text-16 font-semibold rounded text-white'>GET STARTED</Link>
    )
}

export default Button