import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className='bg-[#f7f5f2] font-serif'>
      
      {/* Title */}
      <div className='text-center text-2xl pt-12 pb-6'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col items-center md:flex-row gap-10 md:gap-16 px-4 md:px-10 lg:px-20 mb-28'>
        {/* Contact Image */}
        <div className='w-full md:w-1/2'>
          <img className='w-full' src={assets.contact_img} alt="Contact Us" />
        </div>

        {/* Contact Details Card */}
        <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-6 sm:p-10 bg-white shadow-2xl rounded-lg border border-[#f0e68c]'>
          <h2 className='font-semibold text-2xl text-[#2a2a2a] mb-4 tracking-wide'>Our Store</h2>
          <p className='text-gray-700 text-base leading-relaxed mb-6'>
            Shop no 4 Emotion <br /> Laxmi Road, Pune Maharashtra 411030, India
          </p>
          <div className='text-gray-700 text-base leading-relaxed'>
            <p><strong>Tel:</strong> +91 9326601274, +91 7423009911</p>
            <p className='mt-2'><strong>Email:</strong> Emotion@gmail.com</p>
          </div>
        </div>
      </div>

      <NewsletterBox/>
    </div>
  );
};

export default Contact;