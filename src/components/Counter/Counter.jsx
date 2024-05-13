import React from 'react'

const Counter = (props) => {
    return (
        <div key={props.key} className=''>
            <h1 className='font-poppins font-extrabold text-48 text-white'>{props.number}+</h1>
            <span className='font-poppins font-[400] text-18 text-white'>{props.desc}</span>
        </div>
    )
}

export default Counter