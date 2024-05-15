import React from 'react'
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className='bg-footer-bottom py-4'>
            <div className='container flex flex-col items-center justify-between'>
                <h3 className='text-[#9DA0AE] font-semibold'>© 2024 Lawliet. All rights reserved</h3>
                <div className='py-2'>
                    <ul className='flex items-center gap-4'>
                        <Link><li className='bg-[#195E88] text-white p-2 rounded-full'><FaFacebookF /></li></Link>
                        <Link><li className='bg-[#195E88] text-white p-2 rounded-full'><AiFillInstagram /></li></Link>
                        <Link><li className='bg-[#195E88] text-white p-2 rounded-full'><FaTwitter /></li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default FooterBottom