import React from 'react'
import { FaDribbble, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    
    <div className=' pt-12 bg-blue-950'>
        <div className='  mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='ml-8'>
                <h1 className=' font-bold text-2xl text-white'>About</h1>
                <p className='mt-5 text-sm text-white hover:text-orange-600'>
                    Fastootech was founded by a passionate team that aims to revolutionize IT solutions and empower businesses. 

                </p>
                <div className='flex items-center space-x-4 mt-6 text-white'>
                    <FaFacebookF />
                    <FaTwitter />
                    <FaDribbble />
                    <FaYoutube />

                </div>
            </div>
            <div className='space-y-5 ml-15'>
                <h1 className='font-bold text-2xl text-white'>Company</h1>
                <p className='font-medium cursor-pointer text-sm text-white hover:text-orange-600'>About us</p>
                <p className='font-medium cursor-pointer text-sm text-white hover:text-orange-600'>Services</p>
                <p className='font-medium cursor-pointer text-sm text-white hover:text-orange-600'>Blog</p>
            </div>
             <div className='space-y-5'>
                <h1 className='font-bold text-2xl text-white'>Address</h1>
                <p className='font-medium cursor-pointer text-sm text-white hover:text-orange-600'>Site No. 26 Laskar, Hosur Rd, next to Nexus Mall, Chikku Lakshmaiah Layout, Adugodi, Bengaluru, Karnataka 560029</p>
           
              
            </div>
             <div>
                <h1 className='font-bold text-2xl text-white'>Contact Us</h1>
               <div className='mt-6'>
                <h1 className='text-sm text-white '>Our Mobile Number</h1>
                <h2 className='text-base font-bold mt-1 text-white hover:text-orange-600'>7760408321</h2>
               </div>
                <div className='mt-6 text-white'>
                <h1 className='text-sm '>Our Email Address</h1>
                <h2 className='text-base font-bold mt-1 hover:text-orange-600'>contact@fastootech.com</h2>
               </div>
            </div>
        </div>
        <div className='mt-20 mx-auto border-t text-white  pb-5 flex flex-col md:flex-row justify-between items-center text-sm'>
            <p className='text-center md:text-left hover:text-orange-600'>
                Copyright © 2025 Fastootech
            </p>
            <div className='flex items-center space-x-4 mt-4'>
                <span>Social :</span>
                <span className='text-white hover:text-orange-600'><FaFacebookF/></span>
                <span className='text-white hover:text-orange-600'><FaTwitter/></span>
                <span className='text-white hover:text-orange-600'><FaDribbble/></span>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
