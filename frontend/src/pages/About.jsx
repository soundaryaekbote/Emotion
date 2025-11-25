import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      {/* About Title */}
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Content */}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px] rounded-lg shadow-md' src={assets.about_img} alt="About Emotion" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 leading-relaxed'>
              <p>
                <b className='text-gray-800'>Emotion</b> is more than just a clothing brand – it’s a celebration of individuality, luxury, and timeless style. 
                Founded with the vision of redefining fashion, we bring together elegance, comfort, and premium craftsmanship in every piece we create.
              </p>
              <p>
                At Emotion, we believe fashion is a reflection of who you are – your personality, your story, your <i>emotion</i>. 
                Our collections are designed for everyone: men, women, and kids, making luxury fashion accessible to the whole family while maintaining exclusivity and sophistication.
              </p>
              <b className='text-gray-800'>Our Philosophy</b>
              <p>
                We combine modern design with traditional artistry, ensuring each outfit is crafted with the finest fabrics, attention to detail, and a touch of luxury that lasts. 
                From everyday wear to statement pieces, Emotion clothing allows you to wear your confidence, your elegance, and most importantly – your emotions.
              </p>
          </div>
      </div>

      {/* Why Choose Us Section */}
      <div className='text-xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:shadow-md transition'>
            <b>Unmatched Quality</b>
            <p className='text-gray-600'>
              Every piece is crafted from premium fabrics with precise tailoring to deliver durability, comfort, and elegance.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:shadow-md transition'>
            <b>Luxury for Everyone</b>
            <p className='text-gray-600'>
              From men’s and women’s collections to kids’ fashion, we design for all – because luxury is not limited, it’s for everyone.
            </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 rounded-lg hover:shadow-md transition'>
            <b>Customer-Centered Experience</b>
            <p className='text-gray-600'>
              We value your trust. With seamless shopping, secure payments, and dedicated support, we ensure your experience is as premium as our clothing.
            </p>
          </div>
      </div>

      {/* Newsletter */}
      <NewsletterBox />
    </div>
  )
}

export default About
