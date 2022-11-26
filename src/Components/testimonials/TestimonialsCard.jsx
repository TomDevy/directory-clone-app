import React from 'react'
import './testimonialsCard.css'
import { RiDoubleQuotesL } from "react-icons/ri";
import testimonial from '../../assets/testimonialImg.webp'

const TestimonialsCard = () => {
  return (
    <div className="testimonial-card">
      <img src={testimonial} alt="" />
      <div>
        <RiDoubleQuotesL className="quotes" />
      </div>
      <div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
      </div>
      <div className="">
        <h1>Jessica Watson</h1>
      </div>
    </div>
  );
}

export default TestimonialsCard