import React from 'react'

const TestimonialCard = (props) => {
    return (
        <div>
            <div className='shadow p-3 bg-white rounded relative'>
                <span className='absolute -bottom-3 left-1/2 transform -translate-x-1/2 -translate-y-0 bg-white rotate-45 w-6 h-6 border-r border-b border-gray-300'></span>
                <h4 className='font-poppins text-18 font-medium text-titleColor pb-2'>{props.title}</h4>
                <p className='font-poppins text-14 text-descColor'>{props.desc}</p>
            </div>
            <div className='flex justify-center gap-4 mt-12'>
                <img src={props.profileImg} className='w-[56px] h-[56px] rounded-full object-contain' alt="" />
                <div>
                    <h5 className='font-poppins text-18 font-bold text-titleColor'>{props.profileTitle}</h5>
                    <span className='font-poppins text-14 font-medium text-descColor'>{props.profileDesc}</span>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard