import React from 'react'
import FooterBottom from './FooterBottom'


const Footer = () => {
    return (
        <div>
            <div className='bg-themeBlue py-24 text-white'>
                <div className="container p-4 grid grid-cols-1 md:grid-cols-5 gap-12">
                    <div className=''>
                        <img src="/images/footer-logo.png" className='w-[159px] h-[54px] object-contain' alt="" />
                        <p className='pt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt ab dolore illo! Sed, modi.</p>
                    </div>
                    <div className=' '>
                        <h2 className='text-22 pb-8'>Product</h2>
                        <ul className=''>
                            <li className='py-2'>Overview</li>
                            <li className='py-2'>Features</li>
                            <li className='py-2'>Tutorials</li>
                            <li className='py-2'>Pricing</li>
                            <li className='py-2'>Releases</li>
                        </ul>
                    </div>
                    <div className=' '>
                        <h2 className='text-22 pb-8'>Product</h2>
                        <ul className=''>
                            <li className='py-2'>Overview</li>
                            <li className='py-2'>Features</li>
                            <li className='py-2'>Tutorials</li>
                            <li className='py-2'>Pricing</li>
                            <li className='py-2'>Releases</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className='text-22 pb-8'>Company</h2>
                        <ul className=''>
                            <li className='py-2'>About</li>
                            <li className='py-2'>Press</li>
                            <li className='py-2'>Careers</li>
                            <li className='py-2'>Contact</li>
                            <li className='py-2'>Partners</li>
                        </ul>
                    </div>
                    <div className=''>
                        <h2 className='text-22 pb-8'>Support</h2>
                        <ul className=' '>
                            <li className='py-2'>Help Center</li>
                            <li className='py-2'>Terms of service</li>
                            <li className='py-2'>Legal</li>
                            <li className='py-2'>Privacy Policy</li>
                            <li className='py-2'>Status</li>
                        </ul>
                    </div>
                </div>
            </div>
            <FooterBottom />
        </div>
    )
}

export default Footer