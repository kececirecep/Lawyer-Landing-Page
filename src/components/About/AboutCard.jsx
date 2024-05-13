import React from 'react'

const AboutCard = (props) => {
    return (
        <div key={props.key} className='shadow rounded bg-white p-4'>
            <img src={props.img} alt="" className='w-[37px] h-[37px] object-contain' />
            <h2 className='font-play text-24 text-titleColor font-bold py-4'>{props.title}</h2>
            <p className='font-jakarta text-16 text-descColor'>{props.desc}</p>
        </div>
    )
}

export default AboutCard