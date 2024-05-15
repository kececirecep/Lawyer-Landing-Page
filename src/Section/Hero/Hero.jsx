import React from 'react'
import Button from '../../components/Button'

const Hero = () => {
    return (
        <div className='container flex flex-col-reverse md:flex-row items-center justify-between py-12 pt-[125px]'>
            <div className='p-4'>
                <div className='bg-lightBlue flex items-center gap-4 font-jakarta p-2 pr-3 rounded-full max-w-max'>
                    <span className='bg-themeBlue text-white text-16 rounded-full px-5 py-1'>New</span>
                    <h5 className='text-themeBlue'>Stay connected to the upcoming & Recent jobs</h5>
                </div>
                <h2 className='text-48 lg:text-90 font-play text-themeBlue font-bold pb-8 py-12'>Your Solution <br />Legal Consultacy</h2>
                <p className='font-jakarta text-descColor text-20 lg:text-24 pb-12'>We are here to help you take care of your legality with the best service especially for you.</p>
                <Button title="GET STARTED" />
                <p className='pt-16 pb-6 text-descColor font-jakarta text-22'>Trusted by 10+ companies in indonesia</p>
                <img src="/images/hero-brands.png" className='w-[238px] object-contain' alt="" />
            </div>
            <div className='hidden lg:block'>
                <img src="/images/hero2.svg" className='w-full object-contain' alt="" />
            </div>
        </div>
    )
}

export default Hero