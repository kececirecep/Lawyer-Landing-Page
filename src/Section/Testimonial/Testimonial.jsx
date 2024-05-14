import React from 'react'
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard'

const Testimonial = () => {
    const testimonialInfo = [
        {
            title: "Incredible Experience",
            desc: "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly.",
            profileImg: "/images/testi.png",
            profileTitle: "Anya Tailor Joy",
            profileDesc: "CEO, SF Industires"
        }, {
            title: "Dependable, Responsive, Professional Partner",
            desc: "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. ",
            profileImg: "/images/testi.png",
            profileTitle: "Sri Alam",
            profileDesc: "CEO, Membagongkan GROUP"
        }, {
            title: "Dependable, Responsive, Professional Partner",
            desc: "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. ",
            profileImg: "/images/testi.png",
            profileTitle: "Sri Alam",
            profileDesc: "CEO, Membagongkan GROUP"
        }
    ]
    return (
        <div className='bg-sectionLightBlue py-36'>
            <div className='container'>
                <h2 className='font-play text-48 font-bold text-titleColor text-center pb-12'>Clients Testimonial</h2>
                <div className='grid grid-cols-3 gap-12'>
                    {
                        testimonialInfo.map((item, index) => {
                            return (
                                <div>
                                    <TestimonialCard title={item.title} key={index} desc={item.desc} profileImg={item.profileImg} profileTitle={item.profileTitle} profileDesc={item.profileDesc} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Testimonial