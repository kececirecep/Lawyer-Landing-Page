import React from 'react'
import Button from '../../components/Button'

const Hero = () => {
    return (
        <div className='container flex items-center justify-between py-12  pt-48'>
            <div className=''>
                <div className='bg-lightBlue flex items-center gap-4 font-jakarta p-2 rounded-full max-w-max'>
                    <span className='bg-themeBlue text-white text-16 rounded-full px-5 py-1'>New</span>
                    <h5 className='text-themeBlue'>Stay connected to the upcoming & Recent jobs</h5>
                </div>
                <h2 className='text-90 font-play text-themeBlue font-bold pb-8'>Your Solution <br />Legal Consultacy</h2>
                <p className='font-jakarta text-descColor text-24 pb-12'>We are here to help you take care of your legality with the best service especially for you.</p>
                <Button title="GET STARTED" />
                <p className='pt-16 pb-6 text-descColor font-jakarta text-22'>Trusted by 10+ companies in indonesia</p>
                <img src="/images/hero-brands.png" className='w-[238px] object-contain' alt="" />
            </div>
            <div>
                <div className='w-[711px] h-[711px] bg-[#F0F6FF] block rounded-full relative'>
                    <span className='w-[511px] h-[511px] bg-[#E3EEFF] block rounded-full absolute top-0 right-28'></span>
                    <img src="/images/hero.png" className='w-[546px] h-[700px] object-contain absolute right-28 top-0' alt="" />
                    <div className='rounded absolute bottom-0 left-48 shadow p-4 bg-white px-24 py-6 text-center font-jakarta'>
                        <h4 className='text-24 text-titleColor font-semibold'>Tiara Andini</h4>
                        <h6 className='text-16 text-descColor'>-Lawyer</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero