import React from 'react'
import Counter from '../../components/Counter/Counter'

const CounterSec = () => {
    const counter = [
        {
            number: 30,
            desc: "Clients"
        }, {
            number: 300,
            desc: "Taken business legalities"
        }, {
            number: 8,
            desc: "Years of Journey"
        },
    ]
    return (
        <div className='bg-themeBlue py-24'>
            <div className='container text-center'>
                <h2 className='font-play text-48 text-white font-black pb-4'>Some count that matters</h2>
                <p className='font-poppins text-18 text-white font-[300]'>Our achievement in the journey depicted in numbers</p>
                <div className='pt-12 flex items-center justify-center gap-24 '>
                    {
                        counter.map((item, index) => {
                            return (
                                <Counter key={index} number={item.number} desc={item.desc} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CounterSec