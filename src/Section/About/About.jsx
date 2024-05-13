import React from 'react'
import AboutCard from '../../components/About/AboutCard'

const About = () => {
    const aboutCard = [
        {
            img: "/images/1.png",
            title: "Enviromental Law",
            desc: "Environmental legal issues might occur since the planned business activities are designed"
        }, {
            img: "/images/2.png",
            title: "Corporate and Commercial",
            desc: "Environmental legal issues might occur since the planned business activities are designed"
        }, {
            img: "/images/3.png",
            title: "Information and Technology",
            desc: "Environmental legal issues might occur since the planned business activities are designed"
        }, {
            img: "/images/4.png",
            title: "Other Services",
            desc: "Environmental legal issues might occur since the planned business activities are designed"
        },{
            img: "/images/4.png",
            title: "Other Services",
            desc: "Environmental legal issues might occur since the planned business activities are designed"
        },{
            img: "/images/4.png",
            title: "Other Services",
            desc: "Environmental legal issues might occur since the planned business activities are designed"
        },
    ]
    return (
        <div className='bg-sectionLightBlue py-36'>
            <div className='container flex items-center'>
                <div>
                    <h2 className='text-titleColor font-play text-48 font-semibold'>Why do we help <br /> with legalization?</h2>
                    <p className='text-20 text-descColor font-poppins pt-12'>We are here for UMKM in Indonesia to carry out the legalization process, which is sometimes complicated.</p>
                </div>
                <div className='grid grid-cols-3 gap-8 '>
                    {
                        aboutCard.map(((item, index) => {
                            return (
                                <AboutCard img={item.img} title={item.title} desc={item.desc} key={index} />
                            )
                        }))
                    }
                </div>
            </div>
        </div>
    )
}

export default About