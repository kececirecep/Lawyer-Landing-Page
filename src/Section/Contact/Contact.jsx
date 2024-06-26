import React from 'react'
import Button from '../../components/Button'


const Contact = () => {
  return (
    <div className='container flex flex-col md:flex-row justify-center items-start md:items-center gap-12 py-24 p-4'>
      <div className='max-w-[800px]'>
        <h2 className='text-titleColor font-play text-48 font-bold'>Complex Questions?</h2>
        <p className='text-descColor text-24 font-poppins font-[400] py-12 '>Request for a personalized budget for your legal problem. We will send you a coupe options in 24 hours. You can have free consult , if a our first customer</p>
        <Button title="CALL NOW" iconStatus={true} />
      </div>
      <img src="/images/contact.png" className='w-[330px] h-[295px] object-contain rounded-bl-[40px] hidden md:flex' alt="" />
    </div>
  )
}

export default Contact