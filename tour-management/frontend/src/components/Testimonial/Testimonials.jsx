

import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonials = () => {

  const settings = {
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite :true,
          dots :true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
      },
    },
    ]

  }
  return (
    <Slider { ...settings} >
        <div className="testimonial py-4 px-3" >
            <p>"What truly set this company apart was the personalized attention we received. They made sure we saw the best parts of our destination while also giving us freedom to explore on our own. The constant communication and care we felt throughout the trip ensured everything ran smoothly. It was truly an unforgettable experience that exceeded all our expectations."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3" >
            <p>"This was by far the best trip I’ve ever had! From the moment we landed, everything was taken care of with attention to detail. The itinerary was customized to fit our interests perfectly, and the local guides were incredibly knowledgeable. Every day brought something new, and we felt so cared for throughout the entire journey."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lia Fraklin</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3" >
            <p>"I was blown away by how well this company handled every aspect of our trip. We had a tailored itinerary that balanced adventure and relaxation. The personal touch and the insider tips from our guide made it feel like we were exploring with friends. I didn’t have to worry about a single thing, which made the whole experience incredibly relaxing."
            – Aman P.
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3" >
            <p>"As someone who’s traveled a lot, I can confidently say this was the most seamless trip I’ve experienced. The team went above and beyond to ensure we were comfortable, happy, and experiencing everything to the fullest. Every detail, from the accommodation to the tours, was well thought out, and I truly felt like a VIP."
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3" >
            <p>"This wasn’t just a vacation; it was a journey. I’ve never felt so immersed in the culture and environment of a destination. Our guide was not only professional but also passionate about sharing the history, local traditions, and hidden gems. It made all the difference in how we experienced the place. Highly recommend this service for anyone looking for a deeply enriching trip!"
            </p>

            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customer</p>
                </div>
            </div>
        </div>
    </Slider>
  )
  
}
export default Testimonials